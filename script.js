// ================================
// STATIC DOCUMENT LIST
// ================================


const files = [
  { name: 'Vrest Purchase.pdf', path: 'documents/pdf/Vrest Purchase.pdf' },
  { name: 'Vrest Hotel Otress register form.pdf', path: 'documents/pdf/Vrest Hotel Otress register form.pdf' },
  { name: 'OVER TIME REQUEST.pdf', path: 'documents/pdf/OVER TIME REQUEST.docx (1).pdf' },
  { name: 'TAKE AWAY & FRUIT CAKE REQUEST.pdf', path: 'documents/pdf/TAKE-AWAY-AND-FRUIT-CAKE-REQUEST-FORM.pdf' }
];

const filesExl = [
  { name: 'Rooming list.xlsx', path: 'documents/excel/Rooming list.xlsx' },
  { name: 'Visitor Declaration Form.xlsx', path: 'documents/excel/Visitor Declaration Form.xlsx' },
  { name: 'Copy of Cash Drop file.xlsx', path: 'documents/excel/Copy of Cash Drop file.xlsx' }
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