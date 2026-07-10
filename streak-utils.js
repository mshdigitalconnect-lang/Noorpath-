/* streak-utils.js — Shared streak + daily-pick helpers for NoorPath.
   Pure JS, no deps. Reads /surahs-data.js for verse data when present. */
(function () {
  "use strict";

  const STREAK_KEY = "noorpath_recite_dates_v1";

  function todayKey(d) {
    d = d || new Date();
    return d.toISOString().slice(0, 10);  // YYYY-MM-DD
  }

  function loadDates() {
    try {
      const v = JSON.parse(localStorage.getItem(STREAK_KEY) || "[]");
      return Array.isArray(v) ? v : [];
    } catch (e) { return []; }
  }
  function saveDates(arr) {
    // Cap to last 365 days to bound storage
    const sorted = Array.from(new Set(arr)).sort();
    localStorage.setItem(STREAK_KEY, JSON.stringify(sorted.slice(-365)));
  }

  // Call after a successful recitation session
  function markSessionToday() {
    const arr = loadDates();
    const k = todayKey();
    if (!arr.includes(k)) {
      arr.push(k);
      saveDates(arr);
    }
    return computeStreak();
  }

  // Returns { current, longest, todayDone }
  function computeStreak() {
    const arr = loadDates();
    const set = new Set(arr);
    const today = todayKey();
    const yesterday = todayKey(new Date(Date.now() - 86400000));

    // current streak: consecutive days ending today OR yesterday (grace until end of today)
    let current = 0;
    let cursor = set.has(today) ? new Date(today + "T00:00:00") : (set.has(yesterday) ? new Date(yesterday + "T00:00:00") : null);
    while (cursor && set.has(todayKey(cursor))) {
      current++;
      cursor = new Date(cursor.getTime() - 86400000);
    }

    // longest run
    let longest = 0, run = 0, prev = null;
    arr.sort();
    for (const d of arr) {
      if (prev) {
        const diff = Math.round((new Date(d) - new Date(prev)) / 86400000);
        run = diff === 1 ? run + 1 : 1;
      } else {
        run = 1;
      }
      if (run > longest) longest = run;
      prev = d;
    }

    return {
      current,
      longest,
      todayDone: set.has(today),
      totalDays: set.size
    };
  }

  // Deterministic verse-of-the-day. Same verse for all users on same date.
  function pickVerseForToday() {
    if (!window.SURAHS) return null;
    // Flatten all (surah, ayah) pairs
    const flat = [];
    for (const s of window.SURAHS) {
      for (const v of s.verses) flat.push({ s, v });
    }
    // Index based on days-since-epoch
    const dayIdx = Math.floor(Date.now() / 86400000);
    const pick = flat[dayIdx % flat.length];
    return {
      surah: pick.s.n,
      surahName: pick.s.name,
      surahArabic: pick.s.arabic,
      ayah: pick.v.i,
      words: pick.v.words,
      words_ip: pick.v.words_ip || pick.v.words,
      trans: pick.v.trans,
      label: `${pick.s.name} · ${pick.s.n}:${pick.v.i}`
    };
  }

  // Public API
  window.NoorPathStreak = {
    todayKey, loadDates, markSessionToday, computeStreak, pickVerseForToday
  };
})();
