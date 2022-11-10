const names = ['Abigail', 'Alexandra', 'Alison', 'Amanda', 'Angela', 'Bella', 'Carol', 'Caroline', 'Carolyn', 'Deirdre', 'Diana', 'Elizabeth', 'Ella', 'Faith', 'Olivia', 'Penelope'];

// Membuat fungsi untuk mencari nama yang memiliki karakter tertentu.
function searchName (char, limit, callback) {
    // Memfilter elemen-elemen yang bernilai true saja, sehingga filter memerlukan fungsi yang mengembalikan nilai boolean dari includes. Semua elemen array dan parameter char dijadikan huruf kecil terlebih dahulu agar tidak sensitive, lalu outputnya dibatasi sesuai limit.
    const filteredName = names.filter(name =>  
        name.toLowerCase()
        .includes(char.toLowerCase()))
        .sort()
        .slice(0, limit);
    
    callback(filteredName);
};
// Membuat fungsi untuk menampilkan ke console.
function showResult (result) {
    console.log(result);
};
// Memanggil fungsi.
searchName('an', 3, showResult); // Expected output: [ 'Alexandra', 'Amanda', 'Angela' ]
searchName('AN', 4, showResult); // Expected output: [ 'Alexandra', 'Amanda', 'Angela', 'Diana']
