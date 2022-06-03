const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];


// mencari angka >= 3
// for
// const angkaBaru = [];
// for(let i=0; i<=angka.length; i++) {
//   if(angka[i] >= 3) {
//     angkaBaru.push(angka[i]);
//   }
// }
// console.log(angkaBaru);

// filter
// const angkaBaru = angka.filter(a => a >= 3);
// console.log(angkaBaru);


// map
// kalikan semua angka dengan 2
// const angkaBaru = angka.map(a => a *2);
// console.log(angkaBaru);


// reduce
// const angkaBaru = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(angkaBaru);


// method chaining
// cari angka > 5
// kalikan 3
// jumlahkan

const hasil = angka.filter(a => a > 5)
  .map(a => a * 3)
  .reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(hasil);
