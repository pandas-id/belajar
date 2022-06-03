// function expression
// const tampilNama = function(nama) {
//   return 'Halo '+nama;
// }

// console.log(tampilNama('Akmal'));

// const tampilNama = (nama) => { return 'Halo '+nama; }
// console.log(tampilNama('Akmal'));

// const tampilNama = (nama, waktu) => {
//   return 'Halo '+nama+',selamat '+waktu;
// }

// console.log(tampilNama('Akmal', 'Siang'));


// let mahasiswa = ['Akmal', 'Landung', 'Peterson'];

// let jumlahHuruf = mahasiswa.map(function(nama) {
//   return nama.length;
// });

// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf : nama.length}) );
// console.table(jumlahHuruf);


// konsep this pada arrow function

// constructor function

// const Mahasiswa = function() {
//   this.nama = 'Akmal';
//   this.umur = 16;
//   this.sayHello = function() {
//     console.log(`Halo saya ${this.nama} dan saya ${this.umur} tahun.`)
//   }
// }

// const akmal = new Mahasiswa();


// arrow function
// const Mahasiswa = function() {
//   this.nama = 'Akmal';
//   this.umur = 16;
//   this.sayHello = () => {
//     console.log(`Halo saya ${this.nama} dan saya ${this.umur} tahun.`);
//   }
// }

// const akmal = new Mahasiswa();


// object literal
// const mhs1 = {
//   nama: 'Akmal',
//   umur: 16,
//   sayHello: () => {
//     // console.log(`Halo saya ${this.nama} dan saya ${this.umur} tahun.`);
//     console.log(this);
//   }
// }




// const Mahasiswa = function() {
//   this.nama = 'Akmal';
//   this.umur = 16;
//   this.sayHello = function() {
//     console.log(`Halo saya ${this.nama} dan saya ${this.umur} tahun.`)
//   }

//   setInterval(() => {
//     console.log(this.umur++);
//   }, 500);
// }

// const akmal = new Mahasiswa();


const box = document.querySelector('.box');
box.addEventListener('click', function() {
  let satu = 'size', dua = 'caption';

  if(this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }

  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
