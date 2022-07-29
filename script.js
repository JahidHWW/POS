const screens = document.getElementById('screen');
const price = document.getElementById('price');
let total = 0;

let productOne = { item: 'Pepsi-can', price: 1.99, };
let productTwo = { item: 'snack', price: 2.99, };
let bag = { item: 'Bag', price: 0.05, };


function create(product) {
    //item generate
    const createItem = document.createElement('div');
    createItem.className = 'item-box';
    createItem.innerText = product.item + " " + product.price;
    screens.appendChild(createItem);

    //delete button generate
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button'
    deleteButton.innerText = 'X';
    deleteButton.onclick = deleteItem;
    createItem.appendChild(deleteButton);

    //update total price
    total = total + product.price;
    total = Math.round(total * 100) / 100;
    price.innerText = '$ ' + total;

    //delete function
    function deleteItem() {
        createItem.remove();
        createItem.style.backgroundColor = "none"
        total = total - product.price;
        total = Math.round(total * 100) / 100;
        price.innerText = '$ ' + total;
    }
}
