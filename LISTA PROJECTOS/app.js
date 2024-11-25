// select items
const form = document.querySelector('.gallery-form');
const alert = document.querySelector('.alert');
const gallery = document.getElementById('gallery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.gallery-container');
const list = document.querySelector('.gallery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = '';

// event listeners
// submit form
form.addEventListener('submit', addItem);
//  clear items
clearBtn.addEventListener('click', clearItems);
// load items
window.addEventListener('DOMContentLoaded', setupItems);


// functions
function addItem(e) {
    e.preventDefault();
    const value = gallery.value;
    const id = new Date().getTime().toString();

    if (value !== '' && !editFlag){
        const element = document.createElement('article');
        let attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add('gallery-item');
        element.innerHTML = `<p class = "title"> ${value} </p>
                <div class = "btn-container">
                 <button type = "button" class = "edit-btn">
                    <i class = "fas fa-edit"></i>
                 </button>
                 <button type = "button" class = "delete-btn">
                    <i class = "fas fa-trash"></i>
                    </button>
                </div>`;

    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);
        
    const editBtn = element.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);

    // append child
    list.appendChild(element);

    // display alert
    displayAlert('Ya se agrego a la lista',  'success');

    // show container
    container.classList.add('show-container'); 
        
    // set local storage
    addToLocalStorage(id, value);

    // set back to default
    setBackToDefault();
    } else if (value !== ''  && editFlag) {
      editElement.innerHTML = value;
      displayAlert('value changed', 'success');

    // edit local storage
    editLocalStorage(editID, value);
    setBackToDefault();
    } else {
      displayAlert('Ingrese un valor porfavor', 'danger');
  }
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

// remove alert
  setTimeout(function() {
  alert.textContent = '';
  alert.classList.remove(`alert-${action}`);
  }, 1000);
}
// clear items
function clearItems () {
  const items =  document.querySelectorAll('.gallery-item');
  if(items.length > 0){
    items.forEach(function (item) {
        list.removeChild(item);
    });
  } 
  container.classList.remove('show-container');
  displayAlert('empty List', 'danger');
  setBackToDefault();
  localStorage.removeItem('list');
}

// delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);

  if(list.children.length === 0) {
    container.classList.remove('show-container');
  }
  displayAlert('item removed', 'danger');

  setBackToDefault();
// remove from local storage
  removeFromLocalStorage(id);
}
// edit function
function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibiling;
    // set from value
    gallery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;

    submitBtn.textContent = 'edit';
}

// set back to default 
function setBackToDefault() {
   gallery.value = '';
   editFlag = false;
   editID = '';
   submitBtn.textContent = 'Agregar';
}

// LOCAL STORAGE

// add local storage
function addToLocalStorage(id, value) {
  const gallery = {id, value};
  let items = getLocalStorage();
  items.push(gallery);
  localStorage.setItem('list', JSON.stringify (items));
}

function getLocalStorage() {
  return localStorage.getItem ('list') 
    ? JSON.parse(localStorage.getItem ('list')) 
    : [];
}

function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function (item) {
    if(item.id !== id) {
      return item;
    }
  });

  localStorage.setItem('List', JSON.stringify (items));
}
function editLocalStorage (id, value) {
  let items = getLocalStorage();

  items = items.map(function (item) {
    if(item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('List', JSON.stringify (items));
}

// SETUP LOCALSTORAGE

// SETUP ITEMS

function setupItems () {
  let items = getLocalStorage();

  if(items.length > 0) {
    items.forEach(function (item) {
      createListItem(item.id, item.value);
    });
    container.classList.add('show-container');
  }
}

function createListItem(id, value){
  const element = document.createElement('article');
        let attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.classList.add('gallery-item');
        element.innerHTML = `<p class = "title"> ${value} </p>
                <div class = "btn-container">
                 <button type = "button" class = "edit-btn">
                    <i class = "fas fa-edit"></i>
                 </button>
                 <button type = "button" class = "delete-btn">
                    <i class = "fas fa-trash"></i>
                    </button>
                </div>`;


    const deleteBtn = document.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);
        
    const editBtn = document.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);
        
    // append child
    list.appendChild(element);
}