// Membuat fungsi untuk menyeleksi nilai.
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataNilai) => {
    // Memfilter nilai-nilai yang ada diantara nilaiAwal dan nilaiAkhir.
    const nilaiFilter = dataNilai.filter(nilai => nilai > nilaiAwal && nilai < nilaiAkhir);

    // Pengkondisian untuk validasi bahwa nilaiAwal harus lebih besar dari nilaiAkhir, banyaknya elemen pada dataNilai harus lebih dari 5 dan hasil filter harus lebih dari nol, serta hasilnya akan ditampilkan dari nilai terkecil ke nilai terbesar.
    if (nilaiAwal > nilaiAkhir) {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else if (dataNilai.length < 5) {
        console.log('Jumlah angka dalam dataNilai harus lebih dari 5') 
    } else if (nilaiFilter.length == 0) {
        console.log('Nilai tidak ditemukan');
    } else {
        console.log(nilaiFilter.sort((a, b) => a - b));
    }
}

// Memanggil fungsi.
seleksiNilai(5, 120, [10, 20, 100, 150, 80, 70, 30]); // Expected output: [10, 20, 100, 150, 80, 70, 30]
seleksiNilai(5, 4, [10, 20, 100, 150, 80, 70, 30]); // Expected output: Nilai akhir harus lebih besar dari nilai awal
seleksiNilai(5, 120, [10, 20]); // Expected output: Jumlah angka dalam dataNilai harus lebih dari 5
seleksiNilai(5, 10, [10, 20, 100, 150, 80, 70, 30]); // Expected output: Nilai tidak ditemukan

