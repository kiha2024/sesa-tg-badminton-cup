SESA | TOPGOLF BADMINTON CUP — HUT RI ke-81
Format: GROUP STAGE (2 grup x 4 tim) -> KNOCKOUT · Best of 3

=== FILES ===
index.html   -> website. Double-click to open in browser.
data.js      -> your data. THIS is the only file you edit.
README.txt   -> this file.

=== FORMAT ===
- 2 grup (A & B), masing-masing 4 tim, main round-robin (semua lawan semua) = 6 laga/grup.
- Juara & Runner-up tiap grup lolos ke semifinal.
- Semifinal SILANG:
    SF1 = Juara Grup A   vs  Runner-up Grup B
    SF2 = Runner-up Grup A vs Juara Grup B
- Yang KALAH semifinal -> Perebutan Juara 3.
- Yang MENANG semifinal -> Final.
- Semua laga best-of-3 (menang 2 match; jika 1-1 tambah match ke-3).

=== JADWAL ===
- Setiap sesi: 19:00 - 22:00 WIB, 1 laga tiap 30 menit.
- 13 Agu 2026 -> SEMUA laga grup, 2 lapangan paralel:
    Court 1 = Grup A (6 laga)   |   Court 2 = Grup B (6 laga)
    19:00 · 19:30 · 20:00 · 20:30 · 21:00 · 21:30
- 20 Agu 2026 -> Knockout, Court 1:
    Semifinal 1 (19:00), Semifinal 2 (19:45), Juara 3 (20:30), Final (21:00)

=== HOW TO USE ===
1. Double-click index.html (offline, no internet).
2. Isi hasil undian di data.js -> bagian "groups":
      groups: { A: ["T1","T2","T3","T4"], B: ["T5","T6","T7","T8"] }
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
