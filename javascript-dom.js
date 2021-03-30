
//MODIFYING THE UI

// GETELEMENTBYID //

// To change the background of the main header to red and add border bottom
const changeBackground = document.getElementById('main-header');

changeBackground.style.backgroundColor = '#660000';
changeBackground.style.borderBottom = '2px solid #333';
// console.log(changeBackground);

// To change the title of the header from item lister to To-do List
const changeTitle = document.getElementById('header-title');

changeTitle.innerText = 'To-do List';
changeTitle.style.fontWeight = '600';// makes it bolder
changeTitle.style.textAlign = 'center';// centers the header title
// console.log(changeTitle);

//Change the background of the card and add some box shadow
const cardBackground = document.getElementById('main');

cardBackground.style.backgroundColor = '#ccc';
cardBackground.style.boxShadow = '2px 5px 15px 2px #555';

// QUERYSELECTOR //

// To change add items to add list
const changeCardTitle = document.querySelector('.title');
changeCardTitle.textContent = 'Add List';

//change submit button to Poulate and change its background color
const changebtn = document.querySelector('.btn');
changebtn.innerText = 'Populate';
changebtn.style.backgroundColor = '#660000';

//change clear task button to send and change its background color
const clearList = document.querySelector('.clear');
clearList.value = 'Clear Task';
clearList.style.backgroundColor = '#660000';

// ADD SOME FUNCTIONALITIES

// DYNAMICALLY ADD ITEMS
// Get a reference to the input, submit and the list
const inputField = document.getElementById('inputItem');
const submitButton = document.querySelector('button');
const unorderedList = document.querySelector('ul');

// Add eventListener
submitButton.addEventListener('click', (e) => {
	let myItem = inputField.value;
	inputField.value = '';

	const listItem = document.createElement('li');
	const deleteBtn = document.createElement('button');

	deleteBtn.style.backgroundColor = '#660000';

	listItem.className = 'list-group-item'
	deleteBtn.className = 'btn btn-danger float-right '
	listItem.textContent = myItem;
	deleteBtn.textContent = 'X'

	listItem.appendChild(deleteBtn);
	unorderedList.appendChild(listItem);

	deleteBtn.addEventListener('click', (e) => {
		unorderedList.removeChild(listItem)
	})

	const clearTask = document.getElementById('clearTask');

clearTask.addEventListener('click', (e) => {
	unorderedList.removeChild(listItem);
	
} )

	inputField.focus();
	e.preventDefault();
});
