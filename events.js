/*
  Anubis event calendar data.
  Update this file when a new weekly post goes up on Facebook.

  dated:     confirmed events with a real date (from the FB weekly post / monthly calendar).
             When a date has a dated event for a game, the weekly recurring slot for that game is hidden that day.
  recurring: the usual weekly rhythm (dow: 0 Sun, 1 Mon ... 6 Sat). Shown as "weekly" on days with no confirmed post yet.
  games:     label + accent color (CI v3.0 game accents).
*/
window.ANUBIS = {
  updated: "2026-10-27",
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

  // closed: days the shop itself is shut (off-site events). Shown in the calendar, the status pill and a notice bar.
  closed: [
    { date: "2026-10-25", en: "Siam@Siam Design Hotel for the Lorcana Prerelease", th: "งาน Lorcana Prerelease ที่ Siam@Siam Design Hotel", ja: "Siam@Siam Design Hotel(ロルカナのプレリリース)" },
    { date: "2026-10-31", en: "Radiance Rift Rumble at Samyan Mitrtown, Lorcana Challenge Bangkok at The Mall Bangkae", th: "ไปงาน Radiance Rift Rumble ที่สามย่านมิตรทาวน์ และ Lorcana Challenge Bangkok ที่เดอะมอลล์บางแค", ja: "サムヤーン・ミットタウンのRadiance Rift Rumbleと、ザ・モール・バンケーのLorcana Challenge Bangkokに出展" },
    { date: "2026-11-01", en: "Card and Collectibles Carnival at Samyan Mitrtown, Lorcana Challenge Bangkok at The Mall Bangkae", th: "ไปงาน Card and Collectibles Carnival ที่สามย่านมิตรทาวน์ และ Lorcana Challenge Bangkok ที่เดอะมอลล์บางแค", ja: "サムヤーン・ミットタウンのCard and Collectibles Carnivalと、ザ・モール・バンケーのLorcana Challenge Bangkokに出展" }
  ],

  // short: optional one-line summary for the Big nights cards (the full detail shows in the pop-up).
  // linkLabel: optional { en, th, ja } text for the link button (defaults to Sign up).
  // link: optional sign-up URL (https only). LINE links get a "Sign up in the LINE group" button, others "Sign up".
  dated: [
    // Week of Oct 19 to 25 (FB weekly post "THIS WEEK'S LINEUP IS STACKED!", 2026-10-19; Oct 2026 calendar post for closures; Fri 23 changed per FB "LAST DAY OF PRE-RIFT!" and Philly via Anubis Studio, 2026-10-23)
    { date: "2026-10-19", game: "pokemon", title: "Gym Battle", time: "19:00", fee: "150 THB",
      detail: "Standard, Swiss 3 rounds, 32 players. Entry includes 1 pack of 30th Celebration (TH). Free promo cards for everyone who shows up. Walk in." },
    { date: "2026-10-20", game: "lorcana", title: "Casual On-Demand", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13), Coconut, or Pack Rush (450 THB). New players at 19:00 for Learn to Play. No sign-up needed." },
    { date: "2026-10-21", game: "mtg", title: "Commander Night", time: "19:00", fee: "Open 1 pack",
      detail: "Bring your commander. Walk in." },
    { date: "2026-10-21", game: "riftbound", title: "Radiance Pre-Rift POD 5", time: "19:00", fee: "1,200 THB", major: true,
      short: "Open your Pre-Rift Kit, build and play 3 rounds.",
      detail: "Open your Pre-Rift Kit and build on site, 3 rounds. Prizes: 1 Radiance booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 32 players. Register in the Riftbound LINE group note.",
      link: "https://line.me/ti/g/m5Phn384nH", img: "img/events/radiance-pre-rift-pod5.jpg" },
    { date: "2026-10-22", game: "lorcana", title: "Casual Core Constructed", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13) or Coconut. New players at 19:00. No sign-up needed." },
    { date: "2026-10-23", game: "riftbound", title: "Radiance Pre-Rift POD 6", time: "14:00", fee: "1,200 THB", major: true,
      short: "One of the last two Pre-Rift pods. Open your kit, build and play 3 rounds.",
      detail: "Holiday special and the last two Pre-Rift pods: POD 6 at 14:00 and POD 7 at 19:00. Play from the Radiance Pre-Rift Kit, 3 rounds. Prizes: 1 Radiance booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 32 players per pod. Sign up on Playriftbound.",
      link: "https://playriftbound.com/events/117472057244097784" },
    { date: "2026-10-23", game: "riftbound", title: "Radiance Pre-Rift POD 7", time: "19:00", fee: "1,200 THB", major: true,
      short: "One of the last two Pre-Rift pods. Open your kit, build and play 3 rounds.",
      detail: "Holiday special and the last two Pre-Rift pods: POD 6 at 14:00 and POD 7 at 19:00. Play from the Radiance Pre-Rift Kit, 3 rounds. Prizes: 1 Radiance booster at 0 to 1 wins, 2 at 2 wins, 3 at 3 wins. 32 players per pod. Sign up on Playriftbound.",
      link: "https://playriftbound.com/events/117472064953926627" },
    { date: "2026-10-25", game: "lorcana", title: "Hyperia City Prerelease Party", time: "10:00", fee: "1,600 THB", major: true,
      short: "Lorcana Set 14 Prerelease at Siam@Siam Design Hotel. Morning and afternoon pods.",
      detail: "Not at the shop: Siam@Siam Design Hotel Bangkok (the shop is closed that day). Two slots, 10:00 and 14:30. Open your Prerelease Kit and build on site, Best of 1, Swiss 3 rounds of 30 minutes. Prizes: 2 booster packs for 3 wins, 1 pack for 2 wins, a random promo card for 0 to 1 wins. Registration is closed. Find your pod, player number and check in time on the pod finder page.",
      link: "https://anubiscardsandcraft.com/hyperiacity-prerelease-party/", linkLabel: { en: "Find your pod", th: "เช็กรอบของคุณ", ja: "自分の部を確認" }, img: "img/events/hyperia-city-prerelease-party.jpg" },

    // Week of Oct 26 to 30 (FB weekly post "THIS WEEK'S LINEUP IS STACKED!", 2026-10-26, plus the event graphics; post replaced 2026-10-28 without the Halloween Draft). Sat 31 and Sun 1 the shop is closed (see closed).
    { date: "2026-10-26", game: "pokemon", title: "Gym Battle", time: "19:00", fee: "150 THB",
      detail: "Standard, 60-card deck, Swiss 3 rounds. Entry includes 1 pack of 30th Celebration (TH). Promo: 1 to 3 packs by wins plus a Pikachu GAME ON card. Walk in." },
    { date: "2026-10-27", game: "lorcana", title: "Casual On-Demand", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 14) or Coconut, or Pack Rush for 450 THB. New players at 19:00 for Learn to Play. No sign-up needed." },
    { date: "2026-10-28", game: "mtg", title: "Reality Fractured Commander Party", time: "19:00", fee: "Open 1 pack",
      detail: "Commander Bracket 3. Everyone gets a Crystal Ball promo and takes home a pack. Walk in." },
    { date: "2026-10-28", game: "riftbound", title: "Nexus Night 1v1 (Bo1)", time: "20:00", fee: "300 THB",
      detail: "Standard Constructed, 4 rounds. Door gift: 1 booster pack. Prizes: 2 boosters for 1st and 2nd, 1 booster for 3rd and 4th. Radiance Nexus Night promo pack for the top half. Sign up on Playriftbound with your Riot ID.",
      link: "https://playriftbound.com/events/117506500060999829" },
    { date: "2026-10-29", game: "lorcana", title: "Casual Core Constructed", time: "19:30", fee: "250 THB",
      detail: "Core Constructed (Set 9 to 13) or Coconut. Every player takes home a pack. Learn to Play at 19:00. Walk in." },
    { date: "2026-10-30", game: "riftbound", title: "Casual Night 1v1 (Bo1)", time: "20:00", fee: "250 THB",
      detail: "Casual night for newer players and for testing new decks: Standard Constructed, 4 rounds, 24 players. Door gift: 1 booster pack. Prizes: 1 booster for 1st to 3rd. No Nexus Night promo pack. Sign up on Playriftbound with your Riot ID.",
      link: "https://playriftbound.com/events/117506507442342618" },

    // Radiance Rift Rumble at BetterTrade 2026 (FB posts 2026-10-02 and "TOP 8 PRIZE PICK POOL", 2026-10-10). Also has its own spotlight section in index.html.
    { date: "2026-10-31", game: "riftbound", title: "Radiance Rift Rumble", time: "09:45", fee: "490 THB", major: true,
      short: "Our biggest Riftbound tournament, at BetterTrade 2026, Samyan Mitrtown Hall.",
      detail: "Our biggest Riftbound tournament, at BetterTrade 2026 by efin. Not at the shop: The Mitr Ting Room, 5th floor, Samyan Mitrtown Hall. Check in 9:45 to 10:30, bring a printed or handwritten deck list (make one at anubiscardsandcraft.com/rrr-decklist). Standard Constructed, 7 rounds of Best of 1 from 10:40, then Top 8 Best of 3 single elimination (16:40 to 19:40). 100 seats. Every player gets 1 Radiance pack, 1 random pack (Origins, Spiritforged or Unleashed), 1 Radiance Nexus Night Promo Pack and 2 free Explorer Tickets from efin. Top 8 draft the prize pool, 1st picks first: Origins Booster Box, Gift of the Rift (claimed at Anubis after December 4), Radiance Vault, 2 Unleashed Vaults, 3 Vendetta Vaults. 1st also gets a Radiance Vault, playmat and sleeves. 2nd: playmat and sleeves. 3rd to 4th: playmat. 9th to 16th: 2 Radiance packs. 17th to 32nd: 1 Spiritforged pack (9th to 32nd may be adjusted by player count). Lucky Draws all day. RRR players can also buy 1 Riftbound booster box at MSRP (4,100 THB) from Sabai Cards in the Carnival zone. Sign up at efin.finance.",
      link: "https://www.efin.finance/events/better-trade/better-trade2026/buy-ticket/master-class/1-day", img: "img/events/radiance-rift-rumble.jpg" }
  ]
};
