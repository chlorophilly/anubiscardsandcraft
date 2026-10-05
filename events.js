/*
  Anubis event calendar data.
  Update this file when a new weekly post goes up on Facebook.

  dated:     confirmed events with a real date (from the FB weekly post / monthly calendar).
             When a date has a dated event for a game, the weekly recurring slot for that game is hidden that day.
  recurring: the usual weekly rhythm (dow: 0 Sun, 1 Mon ... 6 Sat). Shown as "weekly" on days with no confirmed post yet.
  games:     label + accent color (CI v3.0 game accents).
*/
window.ANUBIS = {
  updated: "2026-10-05",
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
    // Week of Oct 5 to 11 (FB weekly post "PACKED SCHEDULE THIS WEEK!", 2026-10-05; Riftbound links from Philly)
    { date: "2026-10-05", game: "pokemon", title: "Gym Battle", time: "19:00", fee: "150 THB",
      detail: "Entry includes 1 pack of 30th Celebration (TH). Swiss 3 rounds. 32 players. Free promo cards for everyone who shows up. Walk in." },
    { date: "2026-10-06", game: "lorcana", title: "Casual On-Demand", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13), Coconut, or Pack Rush (450 THB). New players at 19:00 for Learn to Play. No sign-up needed." },
    { date: "2026-10-07", game: "mtg", title: "Casual Commander", time: "19:00", fee: "Open 1 pack",
      detail: "Commander Bracket 3, come and have fun. Walk in.",
      img: "img/events/casual-commander.jpg" },
    { date: "2026-10-07", game: "riftbound", title: "Nexus Night 1v1 (Bo1)", time: "20:00", fee: "300 THB",
      detail: "Standard Constructed. Max 5 rounds. 32 players. Sign up on Playriftbound with your Riot ID.",
      link: "https://playriftbound.com/en-US/events/117364848626607688" },
    { date: "2026-10-08", game: "lorcana", title: "Casual Core Constructed", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13) or Coconut. Learn to Play at 19:00. Walk-ins welcome." },
    { date: "2026-10-09", game: "mtg", title: "Reality Fractured Store Championship", time: "19:00", fee: "300 THB", major: true,
      detail: "Standard Constructed, Swiss. Doorgift: 1 Reality Fractured Play Booster and a Thought Scour promo. Top 8 get a Mastermind's Acquisition promo. 1st: 2 Play Boosters, the Jace Reawakened promo and 1 foil promo pack. 2nd to 3rd: 1 Play Booster and 1 non-foil promo pack. 4th: 1 non-foil promo pack. Minimum 8 players. Registration opens Mon Oct 5, 14:00 in the MTG LINE group.",
      link: "https://line.me/ti/g/RfqEewSVSC", img: "img/events/mtg-store-championship.jpg" },
    { date: "2026-10-09", game: "riftbound", title: "Casual Best-of-1", time: "20:00", fee: "250 THB",
      detail: "Casual Night for newbies and for testing new decks. 4 rounds. 24 players. No Nexus Night promo pack. Sign up on Playriftbound with your Riot ID.",
      link: "https://playriftbound.com/en-US/events/117364866640292072" },
    { date: "2026-10-10", game: "lorcana", title: "Last Core before Set 14", time: "14:00", fee: "300 THB", major: true,
      detail: "One last serious run at the Set 13 meta. Core Constructed (Set 9 to 13), Best of 1, 5 rounds. 32 players. Doorgift: 1 booster pack. Prizes: 1st 5 packs, 2nd 3 packs, 3rd to 4th 2 packs, 5th to 8th 1 pack (may be adjusted under 32 players). Registration opens Tue Oct 6, 12:00 in the Lorcana OpenChat note.",
      link: "https://line.me/ti/g2/0ZzAtnVpBzwzbNoA7lRW3YPKL8xV7fzdire42g", img: "img/events/last-core-before-set-14.jpg" },
    { date: "2026-10-11", game: "riftbound", title: "Nexus Night 1v1 (Bo3)", time: "14:00", fee: "300 THB",
      detail: "Standard Constructed, Best of 3. 4 rounds. 32 players. Sign up on Playriftbound with your Riot ID.",
      link: "https://playriftbound.com/en-US/events/117364876978871913" },

    // Radiance Rift Rumble at BetterTrade 2026 (FB post "THE FULL DETAILS ARE HERE!", 2026-10-02). Also has its own spotlight section in index.html.
    { date: "2026-10-31", game: "riftbound", title: "Radiance Rift Rumble", time: "10:00", fee: "490 THB", major: true,
      detail: "Our biggest Riftbound tournament, at BetterTrade 2026 by efin. Not at the shop: Samyan Mitrtown Hall. Check in 10:00 to 10:30. Standard Constructed, 7 rounds of Best of 1 (10:30 to 16:40), then Top 8 Best of 3 single elimination (16:40 to 19:40). 100 seats. Every player gets 1 Radiance pack, 1 random pack (Origins, Spiritforged or Unleashed), 1 Radiance Nexus Night Promo Pack and 2 free Explorer Tickets from efin. Top 8 pick prizes in order: Origins Booster Box, Gift of the Rift, Radiance, Vendetta and Unleashed Vaults and more. Live Lucky Draws. Sign up at efin.finance.",
      link: "https://www.efin.finance/events/better-trade/better-trade2026/buy-ticket/master-class/1-day", img: "img/events/radiance-rift-rumble.jpg" }
  ]
};
