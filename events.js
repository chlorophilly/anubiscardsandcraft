/*
  Anubis event calendar data.
  Update this file when a new weekly post goes up on Facebook.

  dated:     confirmed events with a real date (from the FB weekly post / monthly calendar).
             When a date has a dated event for a game, the weekly recurring slot for that game is hidden that day.
  recurring: the usual weekly rhythm (dow: 0 Sun, 1 Mon ... 6 Sat). Shown as "weekly" on days with no confirmed post yet.
  games:     label + accent color (CI v3.0 game accents).
*/
window.ANUBIS = {
  updated: "2026-09-19",
  source: "https://www.facebook.com/AnubisCardsandCraft",

  games: {
    lorcana:   { label: "Lorcana",   color: "#D946A4" },
    mtg:       { label: "MTG",       color: "#C8102E" },
    pokemon:   { label: "Pokémon",   color: "#3D7DCA" },
    riftbound: { label: "Riftbound", color: "#08B4B5" },
    onepiece:  { label: "One Piece", color: "#F47C20" }
  },

  recurring: [
    { dow: 1, game: "pokemon",   title: "Gym Battle",               time: "19:00" },
    { dow: 2, game: "lorcana",   title: "Casual On-Demand",         time: "19:30", note: "Learn to Play at 19:00" },
    { dow: 3, game: "mtg",       title: "Casual Commander",         time: "19:00" },
    { dow: 3, game: "riftbound", title: "Nexus Night 1v1 (Bo1)",    time: "20:00" },
    { dow: 4, game: "lorcana",   title: "Casual Core Constructed",  time: "19:30", note: "Learn to Play at 19:00" },
    { dow: 5, game: "mtg",       title: "Friday Night Modern",      time: "19:00" },
    { dow: 5, game: "riftbound", title: "Casual Best-of-1",         time: "20:00" },
    { dow: 0, game: "riftbound", title: "Nexus Night 1v1 (Bo3)",    time: "14:00" }
  ],

  dated: [
    // Week of Sep 14 to 20 (FB weekly post, 2026-09-13)
    { date: "2026-09-14", game: "pokemon", title: "Gym Battle", time: "19:00", fee: "150 THB",
      detail: "Includes 2 packs of Pitch Black (TH). Swiss 3 rounds. 32 players. Promo for everyone.",
      img: "img/events/gym-battle.jpg" },
    { date: "2026-09-15", game: "lorcana", title: "Casual On-Demand", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13), Coconut, or Pack Rush (450 THB). New players at 19:00 for Learn to Play. No sign-up needed." },
    { date: "2026-09-16", game: "mtg", title: "Casual Commander", time: "19:00", fee: "Open 1 pack",
      detail: "Who's your commander this week?", img: "img/events/casual-commander.jpg" },
    { date: "2026-09-16", game: "riftbound", title: "Nexus Night 1v1 (Bo1)", time: "20:00", fee: "300 THB",
      detail: "Max 5 rounds. 32 players. Register in UVS (opened Mon Sep 14, 12:00)." },
    { date: "2026-09-17", game: "lorcana", title: "Casual Core Constructed", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13) or Coconut. Learn to Play at 19:00. Walk-ins welcome." },
    { date: "2026-09-18", game: "mtg", title: "Friday Night Modern", time: "19:00", fee: "240 THB",
      detail: "Includes 1 HOB booster pack." },
    { date: "2026-09-18", game: "riftbound", title: "Casual Best-of-1", time: "20:00", fee: "250 THB",
      detail: "Standard Constructed. 4 rounds. 24 players. Practice round, no Nexus Night promo.",
      img: "img/events/riftbound-casual-bo1.jpg" },
    { date: "2026-09-19", game: "lorcana", title: "Attack of the Vine Set Championship", time: "10:00", fee: "400 THB", major: true,
      detail: "Core Constructed Best-of-3, cut to Top 8. 36 players. Champion playmat, Top 8 foil promo, participation promo. Registration opens Tue Sep 15, 12:00 in the Lorcana OpenChat note.",
      img: "img/events/set-championship.jpg" },
    { date: "2026-09-20", game: "riftbound", title: "Nexus Night 1v1 (Bo3)", time: "14:00", fee: "300 THB",
      detail: "4 rounds. 32 players. Register in UVS." },

    // September majors (FB monthly calendar, 2026-09-10)
    { date: "2026-09-25", game: "mtg", title: "Reality Fractured Pre-Release", time: "18:30", fee: "1,100 THB", major: true,
      detail: "First look at the new reality. Sealed from the Reality Fractured Prerelease Kit, which we open at the event and build a deck from. Prizes: 1 Reality Fractured Play Booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 15 players max. Register in the Anubis MTG LINE group.",
      img: "img/events/mtg-reality-fractured-prerelease.jpg" },
    { date: "2026-09-28", game: "pokemon", title: "Great Ball League", time: "", major: true,
      detail: "Bring your favorite deck and battle your way to victory. Details on Facebook.",
      img: "img/events/september-majors.jpg" }
  ]
};
