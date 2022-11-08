const dataNilai = [10, 20, 40, 35, 30, 45, 100];
const nilaiAwal = 10;
const nilaiAkhir = 120;

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataNilai) => {
    const nilaiFilter = dataNilai.filter(nilai => nilai > nilaiAwal && nilai < nilaiAkhir);
    const compare = (a, b) => {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    }

    if (nilaiAwal > nilaiAkhir) {
        console.log('Nilai akhir harus lebih besar dari nilai awal')
    } else if (dataNilai.length < 5) {
        console.log('Jumlah angka dalam dataNilai harus lebih dari 5')
    } else if (nilaiFilter.toString() === "") {
        console.log('Nilai tidak ditemukan');
    } else {
        console.log(nilaiFilter.sort(compare));
    }
}

seleksiNilai(nilaiAwal, nilaiAkhir, dataNilai);
