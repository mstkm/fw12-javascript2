let data = {
    id : 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address:
    {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org'
}

// Mengubah data dengan spread operator.
data = {...data, name: 'Mugi Mustakim', email: 'mustakimmugi@gmail.com', hobby: 'Futsal'};

console.log(data); // Expected output: menampilkan isi variabel data dengan properti name dan email yang sudah diubah value nya, dan menambahkan properti baru yaitu hobby.

// Mengambil data dengan destructuring objek.
const {address: {street, city}} = data;

console.log(street); // Expected output: Kulas Light
console.log(city); // Expected output: Gwenborough
