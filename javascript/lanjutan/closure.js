// function init() {
//   // let nama = 'akmal';
//   return function(nama) {
//     console.log(nama);
//   }
// }

// let panggilNama = init();
// panggilNama('akmal');
// panggilNama('akmal2');


// function ucapkanSelamat(waktu) {
//   return function(nama) {
//     console.log('Halo '+nama+' selamat '+waktu);
//   }
// }

// let selamatPagi = ucapkanSelamat('pagi');
// let selamatSiang = ucapkanSelamat('siang');
// let selamatMalam = ucapkanSelamat('malam');

// selamatPagi('akmal');
// selamatSiang('landung');


let add = (function() {
  let counter = 0;
  return function() {
    return ++counter;
  }
})();

counter = 1000

console.log(add());
console.log(add());
console.log(add());
