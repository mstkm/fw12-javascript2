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

// Mengubah data dengan spread operator
data = {...data, name: 'Mugi Mustakim', email: 'mustakimmugi@gmail.com', hobby: 'Futsal'};

console.log(data);

// Mengambil data dengan destructuring
const {address: {street, city}} = data;

console.log(street);
console.log(city);
