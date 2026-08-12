SESA | TOPGOLF BADMINTON CUP — HUT RI ke-81
Format: GROUP STAGE (2 grup x 3 tim) -> KNOCKOUT · Best of 3

=== FILES ===
index.html   -> website. Double-click to open in browser.
data.js      -> your data. THIS is the only file you edit.
README.txt   -> this file.

=== FORMAT ===
- 2 grup (A & B), masing-masing 3 tim, main round-robin (semua lawan semua).
- Juara & Runner-up tiap grup lolos ke semifinal.
- Semifinal SILANG:
    SF1 = Juara Grup A   vs  Runner-up Grup B
    SF2 = Runner-up Grup A vs Juara Grup B
- Yang KALAH semifinal -> Perebutan Juara 3.
- Yang MENANG semifinal -> Final.
- Semua laga best-of-3 (menang 2 match; jika 1-1 tambah match ke-3).

=== HOW TO USE ===
1. Double-click index.html (offline, no internet).
2. Isi hasil undian di data.js -> bagian "groups":
      groups: { A: ["T1","T2","T3"], B: ["T4","T5","T6"] }
   (ganti kode tim sesuai hasil drawing)
3. Isi skor tiap match di "matches":
      matches: [ { a: 21, b: 15 }, { a: 18, b: 21 }, { a: 21, b: 19 } ]
      "a" = tim ATAS pada laga itu, "b" = tim BAWAH.
      Belum main -> { a: null, b: null }
4. Save data.js, refresh browser (F5). Klasemen, semifinal, final,
   juara 3, dan podium juara terisi OTOMATIS.

=== TIEBREAKER KLASEMEN GRUP (jika seri) ===
   1) jumlah laga menang
   2) head-to-head (hasil saling berhadapan antar tim yang seri)
   3) selisih game (match menang - match kalah)
   4) selisih poin (poin dibuat - poin kebobolan)

=== EDIT LAIN ===
- teams:    nama tim.
- schedule: tanggal/jam/court tiap laga.
Tip: simpan backup data.js sebelum edit besar.
