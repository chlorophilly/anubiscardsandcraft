/*
  Anubis event calendar data.
  Update this file when a new weekly post goes up on Facebook.

  dated:     confirmed events with a real date (from the FB weekly post / monthly calendar).
             When a date has a dated event for a game, the weekly recurring slot for that game is hidden that day.
  recurring: the usual weekly rhythm (dow: 0 Sun, 1 Mon ... 6 Sat). Shown as "weekly" on days with no confirmed post yet.
  games:     label + accent color (CI v3.0 game accents).
*/
window.ANUBIS = {
  updated: "2026-09-28",
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
    { dow: 3, game: "riftbound", title: "Nexus Night 1v1 (Bo1)",    time: "20:00", note: "Register ahead on Playriftbound with your Riot ID" },
    { dow: 4, game: "lorcana",   title: "Casual Core Constructed",  time: "19:30", note: "Learn to Play at 19:00" },
    { dow: 5, game: "mtg",       title: "Friday Night Modern",      time: "19:00" },
    { dow: 5, game: "riftbound", title: "Casual Best-of-1",         time: "20:00", note: "Register ahead on Playriftbound with your Riot ID" },
    { dow: 0, game: "riftbound", title: "Nexus Night 1v1 (Bo3)",    time: "14:00", note: "Register ahead on Playriftbound with your Riot ID" }
  ],

  // link: optional sign-up URL (https only). LINE links get a "Sign up in the LINE group" button, others "Sign up".
  dated: [
    // Pre-Release (graphic from Philly, 2026-09-19)
    { date: "2026-09-25", game: "mtg", title: "Reality Fractured Pre-Release", time: "18:30", fee: "1,100 THB", major: true,
      detail: "First look at the new reality. Sealed from the Reality Fractured Prerelease Kit, which we open at the event and build a deck from. Prizes: 1 Reality Fractured Play Booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 15 players max. Register in the Anubis MTG LINE group.",
      img: "img/events/mtg-reality-fractured-prerelease.jpg" },

    // Week of Sep 28 to Oct 4 (FB weekly post "PACKED SCHEDULE THIS WEEK!", 2026-09-28)
    { date: "2026-09-28", game: "pokemon", title: "Great Ball League", time: "19:00", fee: "200 THB", major: true,
      detail: "Standard, Best-of-1, Swiss 5 rounds, cut to Top 4. Everyone gets 3 packs of Pitch Black (TH) and a Brave Bangle (TH) promo. 1st: 20 League Points, a booster box, top promo and UBL priority. 2nd: 12 League Points, top promo and UBL priority. 3rd to 4th: 10 League Points. 5th to 8th: 8 League Points. 32 players max. Register in the Pokémon LINE group note.",
      link: "https://line.me/ti/g/XtyPKcvh2J", img: "img/events/great-ball-league.jpg" },
    { date: "2026-09-29", game: "lorcana", title: "Casual On-Demand", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13), Coconut, or Pack Rush (450 THB). New players at 19:00 for Learn to Play. No sign-up needed." },
    { date: "2026-09-30", game: "mtg", title: "Casual Commander", time: "19:00", fee: "Open 1 pack",
      detail: "Commander Bracket 3, come and have fun. Doorgift: a random Commander Night promo.",
      img: "img/events/casual-commander.jpg" },
    { date: "2026-09-30", game: "riftbound", title: "Nexus Night 1v1 (Bo1)", time: "20:00", fee: "300 THB",
      detail: "Max 5 rounds. 32 players. Sign up on the UVS event locator.",
      link: "https://locator.riftbound.uvsgames.com/events/897740" },
    { date: "2026-10-01", game: "lorcana", title: "Casual Core Constructed", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13) or Coconut. Learn to Play at 19:00. No sign-up needed." },
    { date: "2026-10-02", game: "mtg", title: "Reality Fractured Draft", time: "19:00", fee: "650 THB",
      detail: "Booster draft with the new Reality Fractured set." },
    { date: "2026-10-02", game: "riftbound", title: "Casual Best-of-1", time: "20:00", fee: "250 THB",
      detail: "Casual Night for newbies and for testing new decks. 4 rounds. 24 players. No Nexus Night promo pack. Sign up on Playriftbound with your Riot ID.",
      link: "https://playriftbound.com/en-US/events/117342936808815906" },
    { date: "2026-10-03", game: "lorcana", title: "The Great Hunny Rescue", time: "14:00", fee: "250 THB", major: true,
      detail: "Special Lorcana event, starts in the afternoon. Pick Core Constructed or Coconut, and everyone gets the \"If I Didn't Have You\" promo. Registration opens Wed Sep 30, 12:00 in the Lorcana OpenChat note. Full details coming soon on Facebook.",
      link: "https://line.me/ti/g2/0ZzAtnVpBzwzbNoA7lRW3YPKL8xV7fzdire42g" },
    { date: "2026-10-04", game: "riftbound", title: "Summoner Skirmish #2", time: "14:00", fee: "400 THB", major: true,
      detail: "Check-in 13:30. 5 rounds, cut to Top 8. 32 players. Register in the Riftbound LINE group note (opens Tue Sep 29, 18:00).",
      link: "https://line.me/ti/g/c3nBGT9dUe" }
  ]
};
