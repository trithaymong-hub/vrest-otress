// ================================
// STATIC DOCUMENT LIST
// ================================


const files = [
{ name: 'OVER TIME REQUEST.docx (1).pdf', path: 'OVER TIME REQUEST.docx (1).pdf' },
{ name: 'TAKE-AWAY-AND-FRUIT-CAKE-REQUEST-FORM.pdf', path: 'TAKE-AWAY-AND-FRUIT-CAKE-REQUEST-FORM.pdf' },
{ name: 'Vrest Hotel Otress register form.pdf', path: 'Vrest Hotel Otress register form.pdf' },
{ name: 'Vrest Purchase.pdf', path: 'Vrest Purchase.pdf' }
];


const filesExl = [
{ name: 'Copy of Cash Drop file.xlsx', path: 'Copy of Cash Drop file.xlsx' },
{ name: 'Rooming list.xlsx', path: 'Rooming list.xlsx' },
{ name: 'Visitor Declaration Form.xlsx', path: 'Visitor Declaration Form.xlsx' }
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