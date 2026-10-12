/*
  Anubis event calendar data.
  Update this file when a new weekly post goes up on Facebook.

  dated:     confirmed events with a real date (from the FB weekly post / monthly calendar).
             When a date has a dated event for a game, the weekly recurring slot for that game is hidden that day.
  recurring: the usual weekly rhythm (dow: 0 Sun, 1 Mon ... 6 Sat). Shown as "weekly" on days with no confirmed post yet.
  games:     label + accent color (CI v3.0 game accents).
*/
window.ANUBIS = {
  updated: "2026-10-12",
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
    // Week of Oct 12 to 18 (FB weekly post "NEW SET. NEW CARDS. NEW CHALLENGES!", 2026-10-12; Wed Riftbound link from Philly)
    { date: "2026-10-12", game: "pokemon", title: "Gym Battle", time: "19:00", fee: "150 THB",
      detail: "Standard Regulation, 60-card deck. Swiss 3 rounds, Best of 1, 25 minutes per round. 32 players. Door gift: 1 pack of 30th Celebration (TH) and a Pikachu GAME ON card. Prizes: 1 to 3 promo packs by match wins, plus extra 30th Celebration packs. Walk in." },
    { date: "2026-10-13", game: "lorcana", title: "Casual On-Demand", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13), Coconut, or Pack Rush (450 THB). New players at 19:00 for Learn to Play. No sign-up needed." },
    { date: "2026-10-14", game: "mtg", title: "Reality Fractured Commander Party", time: "19:00", fee: "Open 1 pack",
      detail: "Commander night with the new Reality Fractured set. Walk in." },
    { date: "2026-10-14", game: "riftbound", title: "Nexus Night 1v1 (Bo1)", time: "20:00", fee: "300 THB",
      detail: "Standard Constructed. Max 5 rounds. 32 players. Sign up on Playriftbound with your Riot ID.",
      link: "https://playriftbound.com/en-US/events/117416907515358603" },
    { date: "2026-10-15", game: "lorcana", title: "Casual Core Constructed", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13) or Coconut. Learn to Play at 19:00. Walk-ins welcome." },
    { date: "2026-10-16", game: "riftbound", title: "Radiance Pre-Rift POD 1", time: "19:00", fee: "1,200 THB", major: true,
      detail: "First games with the new Radiance set. Four pods this week (Fri 19:00, Sat 19:00, Sun 14:00, Sun 19:00), pick the one that suits you. Play from the Radiance Pre-Rift Kit, 3 rounds per pod. Prizes: 1 Radiance booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 32 players. Register in the Riftbound LINE group note.",
      link: "https://line.me/ti/g/c3nBGT9dUe", img: "img/events/radiance-pre-rift.jpg" },
    { date: "2026-10-17", game: "lorcana", title: "Hyperia City Prerelease Pack Rush", time: "14:00", fee: "450 THB", major: true,
      detail: "First look at Set 14, Hyperia City. Sealed Pack Rush, 2 packs per player: open, build on the spot and play. Door gift: 1 Set 14 booster pack. Top 8 each win 1 Set 14 booster pack. 32 players. Registration opens Wed Oct 14, 12:00 in the Lorcana OpenChat note.",
      link: "https://line.me/ti/g2/0ZzAtnVpBzwzbNoA7lRW3YPKL8xV7fzdire42g", img: "img/events/hyperia-city-prerelease.jpg" },
    { date: "2026-10-17", game: "riftbound", title: "Radiance Pre-Rift POD 2", time: "19:00", fee: "1,200 THB",
      detail: "Play from the Radiance Pre-Rift Kit, 3 rounds per pod. Prizes: 1 Radiance booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 32 players. Register in the Riftbound LINE group note.",
      link: "https://line.me/ti/g/c3nBGT9dUe" },
    { date: "2026-10-18", game: "riftbound", title: "Radiance Pre-Rift POD 3", time: "14:00", fee: "1,200 THB",
      detail: "Play from the Radiance Pre-Rift Kit, 3 rounds per pod. Prizes: 1 Radiance booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 32 players. Register in the Riftbound LINE group note.",
      link: "https://line.me/ti/g/c3nBGT9dUe" },
    { date: "2026-10-18", game: "riftbound", title: "Radiance Pre-Rift POD 4", time: "19:00", fee: "1,200 THB",
      detail: "Play from the Radiance Pre-Rift Kit, 3 rounds per pod. Prizes: 1 Radiance booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 32 players. Register in the Riftbound LINE group note.",
      link: "https://line.me/ti/g/c3nBGT9dUe" },

    // Radiance Rift Rumble at BetterTrade 2026 (FB posts 2026-10-02 and "TOP 8 PRIZE PICK POOL", 2026-10-10). Also has its own spotlight section in index.html.
    { date: "2026-10-31", game: "riftbound", title: "Radiance Rift Rumble", time: "10:00", fee: "490 THB", major: true,
      detail: "Our biggest Riftbound tournament, at BetterTrade 2026 by efin. Not at the shop: The Mitr Ting Room, 5th floor, Samyan Mitrtown Hall. Check in 10:00 to 10:30. Standard Constructed, 7 rounds of Best of 1 (10:30 to 16:40), then Top 8 Best of 3 single elimination (16:40 to 19:40). 100 seats. Every player gets 1 Radiance pack, 1 random pack (Origins, Spiritforged or Unleashed), 1 Radiance Nexus Night Promo Pack and 2 free Explorer Tickets from efin. Top 8 draft the prize pool, 1st picks first: Origins Booster Box, Gift of the Rift (claimed at Anubis after December 4), Radiance Vault, 2 Unleashed Vaults, 3 Vendetta Vaults. 1st also gets a Radiance Vault, playmat and sleeves. 2nd: playmat and sleeves. 3rd to 4th: playmat. 9th to 16th: 2 Radiance packs. 17th to 32nd: 1 Spiritforged pack (9th to 32nd may be adjusted by player count). Lucky Draws all day. Sign up at efin.finance.",
      link: "https://www.efin.finance/events/better-trade/better-trade2026/buy-ticket/master-class/1-day", img: "img/events/radiance-rift-rumble.jpg" }
  ]
};
