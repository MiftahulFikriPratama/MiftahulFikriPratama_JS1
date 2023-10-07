// Fungsi untuk menampilkan daftar tugas harian
function tampilkanDaftarTugas(daftarTugas) {
    console.log("Daftar Tugas Harian:");
    for (var i = 0; i < daftarTugas.length; i++) {
        console.log(i + 1 + ". " + daftarTugas[i]);
    }
}

// Daftar tugas harian
var daftarTugas = [
    "Mengerjakan Rapat",
    "Menyelesaikan Laporan",
    "Berolahraga",
    "Membaca Buku",
];

// Memanggil fungsi untuk menampilkan daftar tugas
tampilkanDaftarTugas(daftarTugas);
