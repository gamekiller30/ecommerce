const box = document.querySelector(".box");
box.style.marginTop = '0px';
const quantity = document.querySelectorAll(".quantity");
const container = document.querySelector(".container");
const can = document.querySelectorAll(".can");
const del = document.querySelector(".del");
const dev_condt = document.querySelector(".dev_condt");
const delivery_go_back_icon = document.querySelector(".delivery_go_back_icon");
const row = document.querySelector(".row");



function cart()
{
    const minus = document.querySelectorAll(".minus");
    const plus = document.querySelectorAll(".plus");
    plus.forEach((plus) => {
        plus.addEventListener('click', () => {
            
            plus.previousElementSibling.innerHTML++
        })
    })
    minus.forEach((minus) => {
        minus.addEventListener('click', () => {
            minus.nextElementSibling.innerHTML--
            if(minus.nextElementSibling.innerHTML == 0)
            {
                if(document.querySelector(".box").nextElementSibling != null)
                {
                    document.querySelector(".box").nextElementSibling.style.marginTop = '0px';
                }
                const parent = minus.parentElement.parentElement
                parent.remove()
            }
            
        })
    })
    del.addEventListener('click',()=>
    {
        container.style.marginTop = '-401%';
        dev_condt.style.marginLeft = '0%';    
    })

    delivery_go_back_icon.addEventListener('click',()=>
    {
        container.style.marginTop = '1.5%';
        dev_condt.style.marginLeft = '-200%'; 
        dev_condt.style.transition = 'All 0s';
        container.style.transition = 'All .25s ease-out';
    })

    

    
}


 export function DisplayCartItems (imgsrc, name, desc, price, quantity) {

let box = document.createElement("div");
box.classList.add("box");
row.appendChild(box);

let img = document.createElement("img");
img.classList.add("img");
img.src = imgsrc;
img.alt = "Image";
box.appendChild(img);

let text = document.createElement("div");
text.classList.add("text");
box.appendChild(text);

let h3 = document.createElement("h3");
h3.classList.add("name");
h3.textContent = name;
text.appendChild(h3);

let h4 = document.createElement("h4");
h4.classList.add("desc");
h4.textContent = desc;
text.appendChild(h4);

let p = document.createElement("h4");
p.classList.add("price");
p.textContent = price;
text.appendChild(p);


let bottom = document.createElement("div");
bottom.classList.add("bottom");
text.appendChild(bottom);

let bottom_left = document.createElement("div");
bottom_left.classList.add("bottom-left");
bottom.appendChild(bottom_left);

let bottom_right = document.createElement("div");
bottom_right.classList.add("bottom-right");
bottom.appendChild(bottom_right);




let minus = document.createElement("div");
minus.classList.add("minus-add");
minus.innerHTML = '<i class="fa-solid fa-minus minus"></i>';
bottom_left.appendChild(minus);


let q = document.createElement("h3");
q.classList.add("quantity");
q.textContent = quantity;
bottom_left.appendChild(q);

let plus = document.createElement("div");
plus.classList.add("plus-add");
plus.innerHTML = '<i class="fa-solid fa-plus plus"></i>';
bottom_left.appendChild(plus);

let trash = document.createElement("div");
trash.classList.add("can-add");
trash.innerHTML = '<i class="fa-solid fa-trash-can can"></i>';
bottom_right.appendChild(trash);

}


export let Array_Cart = [];
console.log(Array_Cart);








cart()