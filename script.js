// ================================
// STATIC DOCUMENT LIST
// ================================


const files = [
{ name: 'icj.pdf', path: 'documents/icj.pdf' },
{ name: 'Proforma Invoice Weekday Rate.pdf', path: 'documents/Proforma Invoice Weekday Rate.pdf' },
{ name: 'Room Reservation Check In.pdf', path: 'documents/Room Reservation Check In.pdf' },
{ name: 'Summary Proformat Invoice.pdf', path: 'documents/Summary Proformat Invoice.pdf' }
];


const filesExl = [
{ name: 'Sample Excel 1.xlsx', path: 'documents/sample1.xlsx' },
{ name: 'Sample Excel 2.xlsx', path: 'documents/sample2.xlsx' }
];


function render(listId, data) {
const list = document.getElementById(listId);
list.innerHTML = '';


data.forEach(file => {
const li = document.createElement('li');
const link = document.createElement('a');


link.href = file.path;
link.textContent = file.name;
link.target = '_blank';
link.download = file.name;


li.appendChild(link);
list.appendChild(li);
});
}


document.addEventListener('DOMContentLoaded', () => {
render('fileList', files);
render('fileExl', filesExl);
});