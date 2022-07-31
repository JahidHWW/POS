const screens = document.getElementById('screen');
const price = document.getElementById('price');
let total = 0.00;
price.innerText = '$ ' + total;


let DrinkProducts = [
    { item: 'Pepsi-can', price: 1.99, },
    { item: 'Arizona-Lemon Ice Tea', price: 0.99, },
    { item: 'Aquafina-small', price: 2.49, }
];
let snackProducts = [
    { item: 'snack', price: 2.99, }
];

let miscellaneousProducts = [
    { item: 'Bag', price: 0.05, }
];


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
