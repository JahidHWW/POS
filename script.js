const screens = document.getElementById('screen');
const price = document.getElementById('price');
let total = 0.00;
let Dep = 0.05;
price.innerText = '$ ' + total;

//product database
let DrinkProducts = [
    { item: 'Aquafina-small', price: 2.49, id: 'Bottle', qnt: 1 },
    { item: 'Fiji-small', price: 2.89, id: 'Bottle', qnt: 1 },
    { item: 'Pepsi-can', price: 1.99, id: 'Bottle', qnt: 1 },
    { item: 'Canada Dry-can', price: 1.99, id: 'Bottle', qnt: 1 },
    { item: 'Gatorade-Cool Blue', price: 3.49, id: 'Bottle', qnt: 1 },
    { item: 'Gatorade-Lemon Lime', price: 3.49, id: 'Bottle', qnt: 1 },
    { item: 'Naked-Mighty Mango', price: 3.99, id: 'Bottle', qnt: 1 },
    { item: 'Naked-Green Machine', price: 3.99, id: 'Bottle', qnt: 1 },
    { item: 'Arizona-Lemon Ice Tea', price: 0.99, id: 'Bottle', qnt: 1 },
    { item: 'Pure Leaf-Respberry Tea', price: 3.49, id: 'Bottle', qnt: 1 },
];
let snackProducts = [
    { item: 'M&Ms-Peanut Butter', price: 2.99, qnt: 1 },
    { item: 'M&Ms-Milk Chocolate', price: 2.99, qnt: 1 },
    { item: 'Hersheys-Cookies n Creme', price: 1.99, qnt: 1 },
    { item: 'Hersheys-Whole almonds', price: 1.99, qnt: 1 },
    { item: 'Welchs-Mixed Fruit', price: 2.49, qnt: 1 },
    { item: 'Welchs-Island Fruit', price: 2.49, qnt: 1 },
    { item: 'Haribo-Gold Bear', price: 2.79, qnt: 1 },
    { item: 'Haribo-Happy Cola', price: 2.79, qnt: 1 },
    { item: 'Skittels-sour', price: 1.79, qnt: 1 },
    { item: 'SourPatchKids-exteme', price: 1.79, qnt: 1 }
];

let miscellaneousProducts = [
    { item: 'Bag', price: 0.05, qnt: 1 }
];

function create(product) {
    //item render
    const createItem = document.createElement('div');
    createItem.className = 'item-box';
    createItem.innerText = product.item + " $ " + product.price;
    screens.appendChild(createItem);

    //quantity generate
    const quantity = document.createElement('div');
    quantity.className = 'qnt';
    quantity.type = 'number';
    quantity.innerText = product.qnt;

    //quantity + & - generate
    const qntPlus = document.createElement('button');
    qntPlus.innerText = '+';
    const qntMinus = document.createElement('button');
    qntMinus.innerText = '-';
    qntPlus.className = 'qntPlus-button';
    qntMinus.className = 'qntMinus-button';
    qntPlus.onclick = plus;
    qntMinus.onclick = minus;

    //full render
    const qntDiv = document.createElement('div');
    qntDiv.className = 'qntDiv';
    createItem.appendChild(qntDiv);
    qntDiv.appendChild(qntMinus);
    qntDiv.appendChild(quantity);
    qntDiv.appendChild(qntPlus);

    //delete button render
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button'
    deleteButton.innerText = 'X';
    deleteButton.onclick = deleteItem;
    createItem.appendChild(deleteButton);

    //bottle charge ($.05) check/render/update total
    if (product.id === 'Bottle') {
        const bottleDep = document.createElement('div');
        bottleDep.innerText = '+ $ ' + Dep;
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
        total = total - (product.price * qntAmnt);
        //bottle deposit update
        if (product.id === 'Bottle') {
            total = total - Dep;
        }
        total = Math.round(total * 100) / 100;
        price.innerText = '$ ' + total;
    }

    // quanitity plus $ minus function
    let qntAmnt = product.qnt;
    function plus() {
        qntAmnt = qntAmnt + 1;
        quantity.innerText = qntAmnt;
        total = total + product.price;
        total = Math.round(total * 100) / 100;
        price.innerText = '$ ' + total;
    }
    function minus() {
        if (qntAmnt === 1) {
            quantity.innerText = qntAmnt;
            return;
        }
        qntAmnt = qntAmnt - 1;
        quantity.innerText = qntAmnt;
        total = total - product.price;
        total = Math.round(total * 100) / 100;
        price.innerText = '$ ' + total;
    }
}
//cart clear/reset total function
function clearCart() {
    screens.innerHTML = "";
    total = 0.00;
    price.innerText = '$ ' + total;
}