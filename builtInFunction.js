// 1. concat() 
// Menggabungkan array dan mengembalikan array baru
// Contoh:
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// const array3 = array1.concat(array2);
// console.log(array3);

// 2. copyWithIn()
// Menyalin urutan elemen array dalam array tanpa mengubah panjangnya
// Contoh:
// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arrCopy = arr.copyWithin(0, 1);
// console.log(arrCopy);

// 3. every()
// Mengembalikan true jika setiap elemen dalam larik pemanggil memenuhi fungsi pengujian
// Contoh:
// const nilai = [70, 80, 90, 100];
// const batas = (elemen) => elemen > 60;
// console.log(nilai.every(batas));

// 4. fill()
// Mengisi semua elemen array dari indeks awal hingga indeks akhir dengan nilai statis
// Contoh:
// const animal = ['Tiger', 'Lion', 'Cheeta', 'Bear'];
// console.log(animal.fill('Penguin'));

// 5. filter()
// Mengembalikan array baru yang berisi setiap elemen bernilai true
// Contoh:
// const ipk = [1, 2, 3, 4];
// console.log(ipk.filter(elemen => elemen > 2));

// 6. find()
// Mengembalikan elemen pertama yang memenuhi syarat
// Contoh:
// const arrNum = [70, 80, 60, 80, 90, 100];
// const found = arrNum.find((element) => element > 70);
// console.log(found);

// 7. findIndex()
// Mengembalikan indeks elemen pertama yang memenuhi syarat
// Contoh:
// const arrNum = [70, 80, 60, 80, 90, 100];
// const found = arrNum.findIndex((element) => element > 70);
// console.log(found);

// 8. flat()
// Mengembalikan array baru dengan semua elemen sub-array yang digabungkan ke dalamnya secara rekursif hingga kedalaman yang ditentukan
// Contoh:
// const arr1 = [0, 1, 2, [3, 4]];
// console.log(arr1.flat());

// 9. forEach()
// Memanggil setiap elemen array
// Contoh:
// const fruits = ['Apple', 'Melon', 'Orange'];
// fruits.forEach(element => console.log(element));

// 10. includes()
// Menentukan apakah array berisi nilai yang ditentukan, mengembalikan nilai true atau false
// Contoh:
// const pets = ['cat', 'dog', 'bat'];
// console.log(pets.includes('cat'));

// 11. indexOf()
// Mengembalikan index di mana elemen tertentu dapat ditemukan dalam array
// Contoh:
// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// console.log(beasts.indexOf('bison'));

// 12. join()
// Menggabungkan semua elemen array menjadi string
// Contoh:
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join());

// 13. map()
// Mengembalikan array baru hasil dari pemanggilan fungsi pada setiap elemen dalam array
// Contoh:
// const array1 = [1, 4, 9, 16];
// const map1 = array1.map(x => x * 2);
// console.log(map1);

// 14. pop()
// Menghapus elemen terakhir dari array dan mengembalikan elemen itu
// Contoh:
// const cities = ['Jakarta', 'Bogor', 'Bekasi'];
// console.log(cities.pop());
// console.log(cities);

// 15. push()
// Menambahkan elemen baru ke akhir array dan mengembalikan length array yang baru
// Contoh:
// const province = ['Jawa Timur', 'Jawa Tengah', 'Jawa Barat'];
// const newProvince = province.push('Banten');
// console.log(newProvince);
// console.log(province);

// 16. reverse()
// Membalikkan urutan elemen pada array
// Contoh:
// const count = [1, 2, 3];
// const reverseCount = count.reverse();
// console.log(reverseCount);

// 17. shift()
// Menghapus elemen pertama dari array dan mengembalikan elemen tersebut
// Contoh:
// const collection = ['Honda', 'Yamaha', 'Suzuki'];
// const newCollection = collection.shift();
// console.log(newCollection);
// console.log(collection);

// 18. slice()
// Mengiris sebagian elemen array dan mengembalikan array yang baru
// Contoh:
// const islands = ['Jawa', 'Sumatera', 'Sulawesi', 'Kalimanta', 'Papua'];
// console.log(islands.slice(1));

// 19. some()
// Mengembalikan nilai true apabila salah satu elemen dalam array memenuhi syarat
// Contoh:
// const number = [1, 2, 3, 4, 5];
// const even = (element) => element % 2 === 0;
// console.log(number.some(even));

// 20. sort()
// Mengurutkan elemen pada array
// Contoh:
// const students = ['Joko', 'Bambang', 'Mega', 'Habibi', 'Abdurrahman'];
// console.log(students.sort());
