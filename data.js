/* =====================================================================
   TOURNAMENT DATA — THIS IS THE ONLY FILE YOU NEED TO EDIT
   =====================================================================
   Format: GROUP STAGE (2 grup x 4 tim, round-robin) -> KNOCKOUT
     - Setiap grup main round-robin (semua lawan semua) = 6 laga/grup.
     - Peringkat grup: Juara & Runner-up lolos ke semifinal.
     - Semifinal SILANG:
         SF1 = Juara Grup A  vs  Runner-up Grup B
         SF2 = Runner-up Grup A  vs  Juara Grup B
     - Yang KALAH semifinal main perebutan JUARA 3.
     - Yang MENANG semifinal main FINAL.

   SEMUA laga = Best of 3 (menang 2 match; jika 1-1 tambah match ke-3).

   WHAT YOU EDIT:
   1) teams   -> nama tim
   2) groups  -> isi hasil undian: tim mana di Grup A dan Grup B
   3) battles[].schedule -> tanggal + jam
   4) battles[].matches  -> skor tiap match

   HOW TO RECORD A MATCH:
     { "a": 21, "b": 15 }   -> "a" = tim ATAS, "b" = tim BAWAH pada laga itu
     { "a": null, "b": null } -> belum dimainkan
   Peringkat grup, semifinal, final & juara 3 terisi OTOMATIS.

   PERINGKAT GRUP jika seri (urutan tiebreaker):
     1) jumlah laga menang
     2) head-to-head (hasil saling berhadapan antar tim yang seri)
     3) selisih game (match menang - match kalah)
     4) selisih poin (poin dibuat - poin kebobolan)
   ===================================================================== */

window.TOURNAMENT_DATA = {

  meta: {
    title: "SESA | TOPGOLF BADMINTON CUP",
    subtitle: "Turnamen HUT RI ke-81 · Merdeka!",
    org: "SESA | TOPGOLF",
    year: 2026,
    venue: "LEO HALL",
    format: "Group Stage · 2 Grup x 4 Tim · Best of 3",
    dates: ["2026-08-13", "2026-08-20"],

    /* ---- HADIAH / PRIZE POOL (edit di sini) ----
       "amount" = nilai dalam Rupiah (angka saja, tanpa titik).
       "note"   = keterangan tambahan (opsional, mis. bentuk hadiah).       */
    prizes: {
      first: { amount: 3000000, note: "2 x Air Fryer (seharga 1.5jt)" },
      second: { amount: 500000, note: "Uang tunai" },
      third: { amount: 300000, note: "Uang tunai" }
    }
  },

  /* ---- TEAMS (edit names here) ---- */
  teams: {
    T1: "FAHRUL & ALFRED",
    T2: "ALI FATAN & UDAY",
    T3: "ALI JOHAN & ANDY",
    T4: "SYAILENDRA & AMADI",
    T5: "AKMAL & AZMI",
    T6: "ERVIN & GOVAR",
    T7: "DDIK & FAJAR",
    T8: "FERRY & ZIKRULL"
  },

  /* ---- GROUPS (ISI SETELAH UNDIAN) ----
     Masukkan 4 kode tim (T1..T8) per grup. Urutan bebas.
     Contoh default di bawah — ganti sesuai hasil drawing.        */
  groups: {
    A: ["T1", "T6", "T5", "T7"],
    B: ["T2", "T3", "T4", "T8"]
  },

  /* ---- BATTLES ----
     Ref tim otomatis — kamu HANYA mengisi schedule & matches:
       { g:"A", i:0 }        -> tim urutan ke-1 di Grup A (index 0,1,2,3)
       { standing:["A",1] }  -> Juara Grup A (1) / Runner-up (2)  [otomatis]
       { winner:"SF1" }      -> pemenang SF1  [otomatis]
       { loser:"SF1" }       -> yang kalah SF1  [otomatis]                */
  battles: [

    /* ===== GROUP A (round-robin) ===== */
    {
      id: "A1", stage: "group", group: "A", round: "Grup A · Laga 1",
      a: { g: "A", i: 0 }, b: { g: "A", i: 1 },
      schedule: { date: "2026-08-13", time: "19:00", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "A2", stage: "group", group: "A", round: "Grup A · Laga 2",
      a: { g: "A", i: 0 }, b: { g: "A", i: 2 },
      schedule: { date: "2026-08-13", time: "19:30", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "A3", stage: "group", group: "A", round: "Grup A · Laga 3",
      a: { g: "A", i: 0 }, b: { g: "A", i: 3 },
      schedule: { date: "2026-08-13", time: "20:00", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "A4", stage: "group", group: "A", round: "Grup A · Laga 4",
      a: { g: "A", i: 1 }, b: { g: "A", i: 2 },
      schedule: { date: "2026-08-13", time: "20:30", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "A5", stage: "group", group: "A", round: "Grup A · Laga 5",
      a: { g: "A", i: 1 }, b: { g: "A", i: 3 },
      schedule: { date: "2026-08-13", time: "21:00", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "A6", stage: "group", group: "A", round: "Grup A · Laga 6",
      a: { g: "A", i: 2 }, b: { g: "A", i: 3 },
      schedule: { date: "2026-08-13", time: "21:30", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },

    /* ===== GROUP B (round-robin) ===== */
    {
      id: "B1", stage: "group", group: "B", round: "Grup B · Laga 1",
      a: { g: "B", i: 0 }, b: { g: "B", i: 1 },
      schedule: { date: "2026-08-13", time: "19:00", court: "Court 2" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "B2", stage: "group", group: "B", round: "Grup B · Laga 2",
      a: { g: "B", i: 0 }, b: { g: "B", i: 2 },
      schedule: { date: "2026-08-13", time: "19:30", court: "Court 2" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "B3", stage: "group", group: "B", round: "Grup B · Laga 3",
      a: { g: "B", i: 0 }, b: { g: "B", i: 3 },
      schedule: { date: "2026-08-13", time: "20:00", court: "Court 2" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "B4", stage: "group", group: "B", round: "Grup B · Laga 4",
      a: { g: "B", i: 1 }, b: { g: "B", i: 2 },
      schedule: { date: "2026-08-13", time: "20:30", court: "Court 2" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "B5", stage: "group", group: "B", round: "Grup B · Laga 5",
      a: { g: "B", i: 1 }, b: { g: "B", i: 3 },
      schedule: { date: "2026-08-13", time: "21:00", court: "Court 2" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "B6", stage: "group", group: "B", round: "Grup B · Laga 6",
      a: { g: "B", i: 2 }, b: { g: "B", i: 3 },
      schedule: { date: "2026-08-13", time: "21:30", court: "Court 2" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },

    /* ===== SEMIFINALS (silang) ===== */
    {
      id: "SF1", stage: "ko", round: "Semifinal 1",
      a: { standing: ["A", 1] }, b: { standing: ["B", 2] },
      schedule: { date: "2026-08-20", time: "19:00", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "SF2", stage: "ko", round: "Semifinal 2",
      a: { standing: ["A", 2] }, b: { standing: ["B", 1] },
      schedule: { date: "2026-08-20", time: "19:45", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },

    /* ===== 3RD PLACE & FINAL ===== */
    {
      id: "THIRD", stage: "ko", round: "Perebutan Juara 3",
      a: { loser: "SF1" }, b: { loser: "SF2" },
      schedule: { date: "2026-08-20", time: "20:30", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    },
    {
      id: "FINAL", stage: "ko", round: "Final",
      a: { winner: "SF1" }, b: { winner: "SF2" },
      schedule: { date: "2026-08-20", time: "21:00", court: "Court 1" },
      matches: [{ a: null, b: null }, { a: null, b: null }, { a: null, b: null }]
    }

  ]
};
