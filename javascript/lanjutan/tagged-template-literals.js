// tagged template

// const nama = 'Akmal';
// const umur = 16;
//
// function coba(strings, ...values) {
//   // let result = '';
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`
//   // });
//   // return result;
//   
//
//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
// }
//
// const str = coba`Halo, saya ${nama} dan saya ${umur} tahun.`
// console.log(str);


// highlight
const nama = 'Akmal';
const umur = 16;

function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '');
}

const str = highlight`Halo, saya ${nama} dan saya ${umur} tahun.`

document.body.innerHTML = str;
