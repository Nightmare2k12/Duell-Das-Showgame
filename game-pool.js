/**
 * game-pool.js — Game Pool Manager
 *
 * Each game is a module in /games/<game-id>/game.js
 * It must export a GameModule object:
 *
 *   window.GameModules['zeit-schaetzen'] = {
 *     id: 'zeit-schaetzen',
 *     name: 'Zeit schätzen',
 *     description: '...',
 *     minRounds: 1,    // min mini-rounds to finish game
 *     init(container, context, onGameEnd) { ... },
 *     destroy() { ... }
 *   }
 *
 * context = { isHost, round, pointValue, p1Name, p2Name, network: Network }
 * onGameEnd(winner) where winner = 'p1' | 'p2' | 'draw'
 */

const GamePool = (() => {
  // Registry: populated as game scripts load
  const registry = {};
  const playHistory = []; // [{gameId, round}]
  let loadedScripts = new Set();

  /**
   * Register a game module (called by each game's script).
   */
  function register(module) {
    registry[module.id] = { ...module, lastPlayedRound: -1 };
    console.log('[GamePool] Registered:', module.id);
  }

  /**
   * List of game IDs to load (add new games here).
   * The game scripts are loaded lazily on first need.
   */
  const GAME_IDS = [
    'zeit-schaetzen',
    'zahlenreihen',
    'ist-das-richtig',
    'der-ausreisser',
    'punktlandung-world',
    'punktlandung-de',
    'schaetzen-oder-wissen',
    'emoji-charade',
    'pi-mal-daumen',
    'turm-bauen',
    'anagramm-alarm',
	'plot-twist',
	'pwer-ist-es',
    'pixel-raten',
	'soundtracks',
	'pfad-der-erleuchtung',
	'sortieren',
	'mathe-rennbahn',
	'gleichgewicht-der-massen',
	'karten-gedaechtnis',
    // Future games: 'wortketze', 'reaktion', ...
  ];

  /**
   * Preload all game scripts. Returns a Promise resolving when all are loaded.
   * Spiele die bereits per <script src> geladen wurden, werden übersprungen.
   */
  function preloadAll() {
    return Promise.all(GAME_IDS.map(id => {
      if (registry[id]) return Promise.resolve(); // schon registriert
      return loadGameScript(id);
    }));
  }

  function loadGameScript(id) {
    // Kein Cache — immer neu laden damit Änderungen sofort wirken
    loadedScripts.add(id);
    return new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = `games/${id}/game.js?v=${Date.now()}`;
      s.onload = resolve;
      s.onerror = () => {
        console.warn('[GamePool] Could not load game:', id);
        loadedScripts.delete(id);
        resolve(); // non-fatal
      };
      document.head.appendChild(s);
    });
  }

  /**
   * Select the next game using weighted random prioritizing
   * games that haven't been played recently.
   *
   * @param {number} currentRound - current match round (1-15)
   * @param {string[]} exclude - game IDs to exclude (already in queue for this session)
   */
  function selectNext(currentRound, exclude = []) {
    const available = Object.values(registry).filter(g => !exclude.includes(g.id));
    if (available.length === 0) {
      // Fallback: allow repeats if pool is exhausted
      const all = Object.values(registry);
      if (all.length === 0) return null;
      return all[Math.floor(Math.random() * all.length)];
    }

    // Weight = rounds since last played (higher = more likely)
    const weights = available.map(g => {
      const sinceLastPlayed = g.lastPlayedRound < 0
        ? 100
        : currentRound - g.lastPlayedRound;
      return Math.max(1, sinceLastPlayed);
    });

    const totalWeight = weights.reduce((a, b) => a + b, 0);
    let rand = Math.random() * totalWeight;
    for (let i = 0; i < available.length; i++) {
      rand -= weights[i];
      if (rand <= 0) return available[i];
    }
    return available[available.length - 1];
  }

  /**
   * Build a shuffled game order for all 15 rounds,
   * ensuring no repeats and priority for long-absent games.
   */
  function buildRoundOrder() {
    const order = [];
    const usedIds = new Set();

    for (let r = 1; r <= 15; r++) {
      const game = selectNext(r, [...usedIds]);
      if (game) {
        order.push(game.id);
        usedIds.add(game.id);
        // If we've used all games, reset usedIds for the next pass
        if (usedIds.size >= GAME_IDS.length) usedIds.clear();
      } else {
        // Shouldn't happen but push fallback
        order.push(GAME_IDS[0]);
      }
    }
    return order;
  }

  /**
   * Mark a game as played in a given round.
   */
  function markPlayed(gameId, round) {
    if (registry[gameId]) {
      registry[gameId].lastPlayedRound = round;
    }
    playHistory.push({ gameId, round });
    // Persist to localStorage for cross-session priority
    try {
      localStorage.setItem('duel_play_history', JSON.stringify(
        Object.fromEntries(Object.entries(registry).map(([id, g]) => [id, g.lastPlayedRound]))
      ));
    } catch (e) {}
  }

  /**
   * Load persisted play history.
   */
  function loadHistory() {
    try {
      const stored = JSON.parse(localStorage.getItem('duel_play_history') || '{}');
      Object.entries(stored).forEach(([id, round]) => {
        if (registry[id]) registry[id].lastPlayedRound = round;
      });
    } catch (e) {}
  }

  function getGame(id) { return registry[id] || null; }
  function getRegistry() { return registry; }
  function getGameIds() { return GAME_IDS; }

  // ── Aliase für index.html-Kompatibilität ──────────────────
  // index.html nutzt: GamePool.get(), .ids(), .buildOrder()
  function get(id)    { return getGame(id); }
  function ids()      { return Object.keys(registry); }
  function buildOrder() { return buildRoundOrder(); }

  return {
    register,
    preloadAll,
    loadGameScript,
    buildRoundOrder,
    selectNext,
    markPlayed,
    loadHistory,
    getGame,
    getRegistry,
    getGameIds,
    // Aliase
    get,
    ids,
    buildOrder,
  };
})();
