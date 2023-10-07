// Input waktu yang tersedia dalam jam
var waktuTersedia = 3;

// Input tugas dan estimasi waktu dalam jam
var tugas1 = { nama: "Mengerjakan Rapat", estimasi: 1 };
var tugas2 = { nama: "Menyelesaikan Laporan", estimasi: 2 };
var tugas3 = { nama: "Berolahraga", estimasi: 0.5 };

// Menghitung total estimasi waktu tugas
var totalEstimasi = tugas1.estimasi + tugas2.estimasi + tugas3.estimasi;

// Menentukan prioritas berdasarkan waktu tersedia
if (totalEstimasi <= waktuTersedia) {
    console.log("Cukup waktu untuk menyelesaikan semua tugas.");
} else if (tugas1.estimasi <= waktuTersedia) {
    console.log("Prioritas 1: " + tugas1.nama);
} else if (tugas2.estimasi <= waktuTersedia) {
    console.log("Prioritas 1: " + tugas2.nama);
} else if (tugas3.estimasi <= waktuTersedia) {
    console.log("Prioritas 1: " + tugas3.nama);
} else {
    console.log("Waktu tidak mencukupi untuk menyelesaikan tugas apa pun.");
}
