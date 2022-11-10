// 1. concat() 
// Menggabungkan array dan mengembalikan array baru, bisa digunakan pada tipe data string juga
// Contoh:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// console.log(array3); // expected output: [ 1, 2, 3, 4, 5, 6 ]
// const str1 = 'Man';
// const str2 = 'United';
// const str3 = str1.concat(str2);
// console.log(str3); // expected output: ManUnited

// 2. copyWithIn()
// Menyalin urutan elemen array dalam array tanpa mengubah panjangnya
// Sintaks: copyWithin(target) atau copyWithin(target, start) atau copyWithin(target, start, end)
// Contoh:
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arrCopy = arr.copyWithin(0, 1, 3);
// console.log(arrCopy); // expected output: [ 'b', 'c', 'c', 'd', 'e' ]

// 3. every()
// Mengembalikan true jika setiap elemen dalam array memenuhi fungsi pengujian
// Sintaks: every(callbackFn)
// Contoh:
// const nilai = [10, 80, 90, 100];
// const batas = (elemen) => elemen > 60;
// console.log(nilai.every(batas)); // expected output: false

// 4. fill()
// Mengisi semua elemen array dari indeks awal hingga indeks akhir dengan nilai statis
// Sintaks: fill(value) atau fill(value, start) atau fill(value, start, end)
// Contoh:
// const animal = ['Tiger', 'Lion', 'Cheeta', 'Bear'];
// console.log(animal.fill('Penguin')); // expected output: [ 'Penguin', 'Penguin', 'Penguin', 'Penguin' ]
// console.log(animal.fill('Penguin', 1)); // expected output: [ 'Tiger', 'Penguin', 'Penguin', 'Penguin' ]
// console.log(animal.fill('Penguin', 1, 3)); // expected output: [ 'Tiger', 'Penguin', 'Penguin', 'Bear' ]


// 5. filter()
// Mengembalikan array baru yang berisi setiap elemen bernilai true
// Sintaks : filter(callbackFn)
// Contoh:
// const ipk = [1, 2, 3, 4];
// console.log(ipk.filter(elemen => elemen > 2)); // expected output: [ 3, 4 ]

// 6. find()
// Mengembalikan elemen pertama yang memenuhi syarat
// Sintaks: find(callbackFn)
// Contoh:
// const arrNum = [70, 80, 60, 80, 90, 100];
// const found = arrNum.find((element) => element > 70);
// console.log(found); // expected output: 80

// 7. findIndex()
// Mengembalikan indeks elemen pertama yang memenuhi syarat
// Sintaks: findIndex(callbackFn)
// Contoh:
// const arrNum = [70, 80, 60, 80, 90, 100];
// const found = arrNum.findIndex((element) => element > 70);
// console.log(found); // expected output: 1

// 8. flat()
// Mengembalikan array baru dengan semua elemen sub-array yang digabungkan ke dalamnya secara rekursif hingga kedalaman yang ditentukan
// Sintaks: flat(depth)
// Contoh:
// const arr1 = [0, 1, 2, [3, 4, [5, 6]]];
// console.log(arr1.flat(2)); // expected output: [ 0, 1, 2, 3, 4, 5, 6 ]

// 9. forEach()
// Memanggil setiap elemen array
// Sintaks: forEach(callbackFn)
// Contoh:
// const fruits = ['Apple', 'Melon', 'Orange'];
// fruits.forEach(element => console.log(element)); 
/* 
expected output: 
Apple
Melon
Orange
*/

// 10. includes()
// Menentukan apakah array berisi nilai yang ditentukan, mengembalikan nilai true atau false, bisa diterapkan juga pada string
// Sintaks: includes(searchElement)
// Contoh:
// const arr = ['cat', 'dog', 'bat'];
// console.log(arr.includes('cat')); // expected output: true
// const str = 'Indonesia'
// console.log(str.includes('one')); // expected output: true
