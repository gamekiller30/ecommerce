const box = document.querySelector(".box");
box.style.marginTop = '0px';
const quantity = document.querySelectorAll(".quantity");
const container = document.querySelector(".container");
const can = document.querySelectorAll(".can");
const del = document.querySelector(".del");
const dev_condt = document.querySelector(".dev_condt");
const delivery_go_back_icon = document.querySelector(".delivery_go_back_icon");

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


cart()