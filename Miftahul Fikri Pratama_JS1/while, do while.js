// Input daftar tugas harian
var daftarTugas = [
    "Mengerjakan Rapat",
    "Menyelesaikan Laporan",
    "Berolahraga",
    "Membaca Buku",
];

// Menggunakan pernyataan while untuk menampilkan daftar tugas harian
console.log("Daftar Tugas Harian (Menggunakan While):");
var i = 0;
while (i < daftarTugas.length) {
    console.log(i + 1 + ". " + daftarTugas[i]);
    i++;
}

// Menggunakan pernyataan do while untuk menampilkan daftar tugas harian
console.log("\nDaftar Tugas Harian (Menggunakan Do While):");
var j = 0;
do {
    console.log(j + 1 + ". " + daftarTugas[j]);
    j++;
} while (j < daftarTugas.length);
