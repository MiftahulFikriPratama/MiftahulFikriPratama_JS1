// Input tugas dan prioritas
var tugas = "Menyelesaikan Laporan";
var prioritas = "Tinggi";

// Inisialisasi variabel untuk pesan
var pesan = "";

// Memeriksa prioritas tugas menggunakan switch case
switch (prioritas) {
    case "Tinggi":
        pesan = "Tugas " + tugas + " memiliki prioritas tinggi. Harap selesaikan segera.";
        break;
    case "Sedang":
        pesan = "Tugas " + tugas + " memiliki prioritas sedang. Bisa menyelesaikannya dalam waktu dekat.";
        break;
    case "Rendah":
        pesan = "Tugas " + tugas + " memiliki prioritas rendah. Bisa menyelesaikannya nanti.";
        break;
    default:
        pesan = "Prioritas tugas tidak valid.";
}

// Menampilkan pesan prioritas tugas
console.log(pesan);
