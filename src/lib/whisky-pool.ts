import { Whisky } from "./data";

export const whiskyPool: Partial<Whisky>[] = [
    // --- Islay (Peaty) ---
    { id: "p1", name: "Lagavulin 12 Year Old Special Release", type: "Single Malt", region: "Islay", basePrice: 150, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "green" }, imageUrl: "", availableDate: "2026-01-29" },
    { id: "p2", name: "Ardbeg Corryvreckan", type: "Single Malt", region: "Islay", basePrice: 120, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "green" }, imageUrl: "", availableDate: "2026-01-29" },
    { id: "p3", name: "Laphroaig Quarter Cask", type: "Single Malt", region: "Islay", basePrice: 60, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "green" }, imageUrl: "", availableDate: "2026-01-29" },
    { id: "p4", name: "Bowmore 15 Year Old", type: "Single Malt", region: "Islay", basePrice: 90, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" }, imageUrl: "", availableDate: "2026-01-30" },
    { id: "p5", name: "Caol Ila Moch", type: "Single Malt", region: "Islay", basePrice: 65, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "straw", glassColor: "brown" }, imageUrl: "", availableDate: "2026-01-30" },

    // --- Speyside / Highland (Sherry/Sweet) ---
    { id: "p6", name: "Aberlour A'bunadh Batch 75", type: "Single Malt", region: "Speyside", basePrice: 115, currency: "USD", visualProfile: { bottleShape: "stout", liquidColor: "mahogany", glassColor: "clear" }, imageUrl: "", availableDate: "2026-01-30" },
    { id: "p7", name: "GlenDronach 15 Year Old Revival", type: "Single Malt", region: "Highland", basePrice: 100, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "brown" }, imageUrl: "", availableDate: "2026-01-31" },
    { id: "p8", name: "The Balvenie 14 Year Old Caribbean Cask", type: "Single Malt", region: "Speyside", basePrice: 85, currency: "USD", visualProfile: { bottleShape: "stout", liquidColor: "gold", glassColor: "clear" }, imageUrl: "", availableDate: "2026-01-31" },
    { id: "p9", name: "Glenmorangie 18 Year Old", type: "Single Malt", region: "Highland", basePrice: 140, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" }, imageUrl: "", availableDate: "2026-01-31" },
    { id: "p10", name: "Dalmore King Alexander III", type: "Single Malt", region: "Highland", basePrice: 280, currency: "USD", visualProfile: { bottleShape: "stout", liquidColor: "amber", glassColor: "clear" }, imageUrl: "", availableDate: "2026-01-31" },

    // --- Japanese (Faceted/Elegant) ---
    { id: "p11", name: "Hibiki 21 Year Old", type: "Blended", region: "Japan", basePrice: 1200, currency: "USD", visualProfile: { bottleShape: "faceted", liquidColor: "mahogany", glassColor: "clear" }, availableDate: "2026-02-01" },
    { id: "p11-v2", name: "Hibiki Japanese Harmony", type: "Blended", region: "Japan", basePrice: 110, currency: "USD", visualProfile: { bottleShape: "faceted", liquidColor: "gold", glassColor: "clear" }, imageUrl: "", availableDate: "2026-01-29" },
    { id: "p12", name: "Yamazaki 18 Year Old", type: "Single Malt", region: "Japan", basePrice: 1500, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" }, availableDate: "2026-02-01" },
    { id: "p13", name: "Hakushu 18 Year Old", type: "Single Malt", region: "Japan", basePrice: 1300, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "green" }, availableDate: "2026-02-01" },

    // --- Bourbon (Square/Stout) ---
    { id: "p14", name: "Old Rip Van Winkle 10 Year", type: "Bourbon", region: "Kentucky", basePrice: 1000, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" }, availableDate: "2026-02-01" },
    { id: "p15", name: "Pappy Van Winkle 23 Year", type: "Bourbon", region: "Kentucky", basePrice: 5000, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" }, availableDate: "2026-02-02" },
    { id: "p16", name: "Michter's 10 Year Single Barrel Bourbon", type: "Bourbon", region: "Kentucky", basePrice: 250, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" }, availableDate: "2026-02-02" },
    { id: "p17", name: "E.H. Taylor Small Batch", type: "Bourbon", region: "Kentucky", basePrice: 120, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" }, availableDate: "2026-02-02" },

    // ... (Adding more for variety to reach 100+ items)
    { id: "p18", name: "Port Charlotte OLC:01", type: "Single Malt", region: "Islay", basePrice: 110, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "brown" }, availableDate: "2026-01-29" },
    { id: "p19", name: "Octomore 14.1", type: "Single Malt", region: "Islay", basePrice: 220, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "brown" }, availableDate: "2026-01-29" },
    { id: "p20", name: "Springbank 15 Year Old", type: "Single Malt", region: "Campbeltown", basePrice: 160, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" }, availableDate: "2026-01-30" },
    { id: "p21", name: "Longrow Peated", type: "Single Malt", region: "Campbeltown", basePrice: 85, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "brown" }, availableDate: "2026-01-30" },
    { id: "p22", name: "Kilkerran 12 Year Old", type: "Single Malt", region: "Campbeltown", basePrice: 75, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" }, availableDate: "2026-02-03" },
    { id: "p23", name: "Glenfarclas 25 Year Old", type: "Single Malt", region: "Speyside", basePrice: 250, currency: "USD", visualProfile: { bottleShape: "stout", liquidColor: "amber", glassColor: "clear" }, availableDate: "2026-02-03" },
    { id: "p24", name: "Glengoyne 21 Year Old", type: "Single Malt", region: "Highland", basePrice: 220, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" }, availableDate: "2026-02-03" },
    { id: "p25", name: "Macallan 18 Year Old Sherry Oak", type: "Single Malt", region: "Speyside", basePrice: 450, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" }, availableDate: "2026-02-03" },
    { id: "p26", name: "Talisker 18 Year Old", type: "Single Malt", region: "Islands", basePrice: 180, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" }, availableDate: "2026-02-04" },
    { id: "p27", name: "Highland Park 18 Year Old", type: "Single Malt", region: "Islands", basePrice: 160, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" }, availableDate: "2026-02-04" },
    { id: "p28", name: "Glenmorangie Signet", type: "Single Malt", region: "Highland", basePrice: 250, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "opaque" }, availableDate: "2026-02-04" },
    { id: "p29", name: "Oban Little Bay", type: "Single Malt", region: "Highland", basePrice: 80, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" }, availableDate: "2026-02-04" },
    { id: "p30", name: "Royal Salute 21 Year Old Richard Quinn Edition", type: "Blended", region: "Scotland", basePrice: 200, currency: "USD", visualProfile: { bottleShape: "ceramic", liquidColor: "amber", glassColor: "opaque" }, availableDate: "2026-02-05" },
    { id: "p31", name: "Chivas Regal Ultis", type: "Blended Malt", region: "Scotland", basePrice: 220, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" }, availableDate: "2026-02-05" },
    { id: "p32", name: "Ballantine's 30 Year Old", type: "Blended", region: "Scotland", basePrice: 350, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "brown" }, availableDate: "2026-02-05" },
    { id: "p33", name: "Compass Box The Peat Monster", type: "Blended Malt", region: "Scotland", basePrice: 65, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "straw", glassColor: "clear" }, availableDate: "2026-02-05" },
    { id: "p34", name: "Nikka Yoichi 10 Year Old", type: "Single Malt", region: "Japan", basePrice: 150, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" }, availableDate: "2026-02-06" },
    { id: "p35", name: "Kavalan Solist Vinho Barrique", type: "Single Malt", region: "Taiwan", basePrice: 250, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "mahogany", glassColor: "clear" }, availableDate: "2026-02-06" },
    { id: "p36", name: "Amrut Intermediate Sherry", type: "Single Malt", region: "India", basePrice: 140, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "amber", glassColor: "clear" }, availableDate: "2026-02-06" },
    { id: "p37", name: "Monkey Shoulder", type: "Blended Malt", region: "Scotland", basePrice: 45, currency: "USD", visualProfile: { bottleShape: "stout", liquidColor: "gold", glassColor: "clear" }, imageUrl: "", availableDate: "2026-01-29" },
    { id: "p38", name: "Oban 14 Year Old", type: "Single Malt", region: "Highland", basePrice: 95, currency: "USD", visualProfile: { bottleShape: "tall", liquidColor: "gold", glassColor: "clear" }, imageUrl: "", availableDate: "2026-01-29" },
];
