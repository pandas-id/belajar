// 1. HTML Fragments

// const mhs = {
//   nama: 'Akmal',
//   umur: 16,
//   nrp: '1210034',
//   email: 'akmak@gmail.com'
// }

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nrp}</span>
// </div>`


// 2. Looping

// const mhs = [
//   {
//     nama: 'akmal',
//     email: 'akmal@gmail.com'
//   },
//   {
//     nama: 'landung',
//     email: 'landung@gmail.com'
//   },
//   {
//     nama: 'aco',
//     email: 'aco@gmail.com'
//   },
// ];

// const el = `<div class="mhs">
//   ${mhs.map(m => `<ul>
//     <li>${m.nama}</li>
//     <li>${m.email}</li>
//   </ul>`).join('')}
// </div>`


// 3. Conditional
// const lagu = {
//   judul: 'Maret dan April',
//   penyanyi: 'Lil $ilit',
//   feat: 'Lil salmonella'
// }

// const el = `<div class="div">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//   </ul>
// </div>`


// 4. Nested
// HTML Fragment bersarang

const mhs = {
  nama: 'Akmal',
  semester: 5,
  mataKuliah: [
    'OOP',
    'Rekayasa Web',
    'Dasar-Dasar Pemrograman'
  ]
}


function cetakMataKuliah(mataKuluah) {
  return `
  <ol>
    ${mataKuluah.map(mk => `<li>${mk}</li>`).join('')}
  </ol>
  `
}

const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="semester">${mhs.semester}</span>
  <h4>Mata Kuliah:</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;
