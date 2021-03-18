



// EXAMINE THE DOCUMENT OBJECT //

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //

// To change the background of the main header to red
const changeBackground = document.getElementById('main-header');

changeBackground.style.backgroundColor = '#660000';
changeBackground.style.borderBottom = '2px solid #333';
// console.log(changeBackground);

// To change the title of the header from item lister to To-do List
const changeTitle = document.getElementById('header-title');

changeTitle.innerText = 'To-do List';
changeTitle.style.fontWeight = '600';
changeTitle.style.textAlign = 'center';
// console.log(changeTitle);

const cardBackground = document.getElementById('main');

cardBackground.style.backgroundColor = '#ccc';
cardBackground.style.boxShadow = '2px 5px 15px 2px #555';

// GETELEMENTSBYCLASSNAME // WORKS AS SAME AS GETELEMENTSBYTAGNAME 

// Cnange card title from Add Items to Add List
const lists = document.getElementsByClassName('list-group-item');

//like arrays, use indexing to access items and change them to list
lists[0].textContent = 'List 1';
lists[1].textContent = 'List 2';
lists[2].textContent = 'List 3';
lists[3].textContent = 'List 4';

lists[0].style.color = '#660000';
lists[1].style.color = '#660000';
lists[2].style.color = '#660000';
lists[3].style.color = '#660000';


// QUERYSELECTOR //

// To change add items to add list
const changeCardTitle = document.querySelector('.title');
changeCardTitle.textContent = 'Add List';

//change submit button to send and change its background color
const changebtn = document.querySelector('.btn');
changebtn.value = 'Send';
changebtn.style.backgroundColor = '#660000';

const clearList = document.querySelector('.clear');
clearList.value = 'Clear Task';
clearList.style.backgroundColor = '#660000';

// QUERYSELECTORALL //

// Select all h2 elements with a class of title and change items to lists
const titles = document.querySelectorAll('.title');
titles[1].textContent = 'Lists';
titles.style.color = '#660000'

const oddlist = document.querySelectorAll('li:nth-child(odd)');
const evenlist = document.querySelectorAll('li:nth-child(even)');

for(let index = 0; index < oddlist.length; index++) {
  oddlist[index].style.backgroundColor = '#f4f4f4';
  evenlist[index].style.backgroundColor = '#eee';
}

//TRAVERSING THE DOM

//parent node

// const listItem = document.querySelector('#items');

// console.log(listItem.parentNode);
// listItems.parentNode.style.backgroundColor = '#f4f4f4';