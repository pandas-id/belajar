// console.log(this);

// membuat object

// cara 1: function declaration
// function halo() {
//   console.log(this);
//   console.log('Halo');
// }
// halo();


// function Halo() {
//   console.log('Halo');
// }

// new Halo();
// this mengbalikan object global

// cara 2: object literal
// var obj = {a: 10};
// obj.halo = function() {
//   console.log(this);
//   console.log('Halo');
// }

// obj.halo();

// cara 3: constructor
function Halo() {
  console.log(this);
  console.log('Halo');
}

var obj1 = new Halo();
var obj2 = new Halo();
// this mengbalikan object yang baru dibuat
