// membuat object
// object literal
var mhs = {
  nama : 'akmal',
  nrp : '151706',
  email : 'akmal@gmail.com',
  jurusan : 'teknik informatika'
}

// function declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
  var mhs = {};
  mhs.nama = nama;
  mhs.nrp = nrp;
  mhs.email = email;
  mhs.jurusan = jurusan;
  return mhs;
}

var mhs2 = buatObjectMahasiswa('budi', '151706', 'budigaming@gmail.com', 'pergameman');

// constructor
function Mahasiswa(nama, nrp, email, jurusan) {
  this.nama = nama;
  this.nrp = nrp;
  this.email = email;
  this.jurusan = jurusan;
}

var mhs3 = new Mahasiswa('jamal', '151706', 'jamal@yahoo.com', 'teknik sipil');
