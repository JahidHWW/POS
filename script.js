const screens = document.getElementById('screen');
const price = document.getElementById('price');
let total = 0.00;
let Dep = 0.05;
price.innerText = '$ ' + total;


let DrinkProducts = [
    { item: 'Pepsi-can', price: 1.99, id: 'Bottle' },
    { item: 'Arizona-Lemon Ice Tea', price: 0.99, id: 'Bottle' },
    { item: 'Aquafina-small', price: 2.49, id: 'Bottle' }
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

    //bottle deposit check
    if (product.id === 'Bottle') {
        const bottleDep = document.createElement('div');
        bottleDep.innerText = '$ ' + Dep;
        createItem.appendChild(bottleDep);
        total = total + Dep;
    }

    //update total price
    total = total + product.price;
    total = Math.round(total * 100) / 100;
    price.innerText = '$ ' + total;

    //delete function
    function deleteItem() {
        createItem.remove();
        createItem.style.backgroundColor = "none"
        total = total - product.price;
        //bottle Deposit
        if (product.id === 'Bottle') {
            total = total - Dep;
        }
        total = Math.round(total * 100) / 100;
        price.innerText = '$ ' + total;
    }
}
