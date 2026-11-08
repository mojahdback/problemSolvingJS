// Exercice 1 — Product List Manager

let products = [
    "Laptop",
    "Phone",
    "Keyboard",
    "Mouse"
];


const box = document.getElementById('listProducts');
const input = document.querySelector('input');
const addbtn = document.getElementById('addbtn');
const removebtn = document.getElementById('removebtn');
const count = document.getElementById('count');


function display() {
    box.textContent = "";

    const list = document.createElement('ol');
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = product;
        list.appendChild(li);

    });

    box.appendChild(list);
    count.textContent = products.length;



}


function addProduct() {
    const newProduct = input.value.trim();

    if(newProduct === ''){
        return
    }
    products.push(newProduct);
    input.value = ''
    display()   

}

function removeProduct(){
      products.pop();
        display()
}

addbtn.addEventListener('click' , addProduct)

removebtn.addEventListener('click', removeProduct);

display()
