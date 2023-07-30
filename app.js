
import { Array_Cart,DisplayCartItems, ShowPrices, CheckforPrices} from "./cart.js";

const profile_img = document.querySelector(".prof_img_container");
const shop_wrapper = document.querySelector(".shop_wrapper");
const index_wrapper = document.querySelector(".index_wrapper");
profile_img.addEventListener('click',()=>
{

//First Check if Values in Array exist then add Cart Item . then Checkprices .then showprices


CheckforPrices().then( (su, s, t) => {

    console.log("success");
    ShowPrices(su, s, t);

}).catch(
    (err) =>{
        console.error("ERROR " + err);
    }
);
   




    document.head.innerHTML = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="shop.css">
    <script src="cart.js" type="module" defer></script>
    <script src="app.js" type="module" defer></script>
    <link rel="stylesheet" href="cart.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=PT+Serif&family=Poppins:wght@300;400;500&display=swap');
      </style>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />`;
    index_wrapper.style.display = "none";
    shop_wrapper.style.display = "block";
})





function Navbar()
{
    const revive_icon = document.querySelector(".revive_icon");
    const user_icon = document.querySelector(".user_icon");
    const input_div = document.querySelector(".input_div");
    const go_back_icon = document.querySelector(".go_back_icon");
    const navbar = document.querySelector(".navbar");

    function navbar_remove()
    {
        input_div.classList.remove('visible');
        user_icon.classList.remove('blur');
        revive_icon.classList.remove('blur');
        go_back_icon.classList.remove('blur');
    }
    
    revive_icon.addEventListener('click',(e) => 
    {
        e.stopPropagation()
        input_div.classList.toggle('visible');
        user_icon.classList.toggle('blur');
        revive_icon.classList.toggle('blur');
        go_back_icon.classList.toggle('blur');
    })

    navbar.addEventListener('click',navbar_remove)

    window.addEventListener('click',navbar_remove )

}

function songs()
{
    const audio_play = document.querySelectorAll(".audio_play");
    const pause_btn = document.querySelectorAll(".pause_btn");
    const slider = document.querySelectorAll(".slider");
    const audio = document.querySelectorAll(".audio");
    const movies_container = document.querySelector(".movies_container");
    

    audio_play.forEach((audio_play) => 
    {
        pause_btn.forEach((pause_btn) => 
        {
            
            slider.forEach((slider) =>
            {
                audio.forEach((audio) => 
                {
                    audio_play.addEventListener("click",()=>
                    { 
                        audio.pause() // quando premiamo un play pausiamo tutti gli audio
                        cxd() // e mettiamo che tutti i play btn siano visibile e rimuoviamo il pause_btn
                        audio_play.nextElementSibling.play(); // dopo mettiamo che solo l' audio che abbiamo premuto playa
                        audio_play.style.display = "none"; // dopo mettiamo che solo il playBtn che abbiamo premuto scompare
                        audio_play.nextElementSibling.nextElementSibling.style.display = "block"; // e mettiamo che solo il pauseBtn relativo al playBtn che abbiamo premuto sia visibile
                    })

                    pause_btn.addEventListener("click",()=>
                    {
                        pause_btn.previousElementSibling.pause(); // pausiamo l' audio
                        pause_btn.previousElementSibling.previousElementSibling.style.display = "block"; // il playBtn relativo al pauseBtn che abbiamo premuto diventera' visibile
                        pause_btn.style.display = "none"; // e solo il pauseBtn che abbiamo premuto scompare
                    })

                    audio_play.nextElementSibling.addEventListener("timeupdate",()=>
                    {
                        audio_play.nextElementSibling.nextElementSibling.nextElementSibling.value = audio_play.nextElementSibling.currentTime;
                        audio_play.nextElementSibling.nextElementSibling.nextElementSibling.max = audio_play.nextElementSibling.duration
                    })
                    
                })
            })

        })
    })

    function cxd()
    {
        audio_play.forEach(audio_play =>
        {
            audio_play.style.display = "block";
        })
        pause_btn.forEach(pause_btn =>
        {
            pause_btn.style.display = "none";
        })
        audio.forEach((audio) => 
        {
            audio.currentTime = 0;
        })
    }
}

function slider()
    {
        const img = document.querySelector(".img");
        const next = document.querySelector(".next");
        const previuos = document.querySelector(".previuos");
        let value = 1;
        let img_div = document.querySelector(".img_div");
        const img_object = {
            img_1 : `<a draggable="false" href="/kakashi-1"><img draggable="false" class="img" src="img/kakashi-04.PNG" alt=""></a>`,
            img_2 : `<a draggable="false" href="/kakashi_2"><img draggable="false" class="img" src="img/kakashi-02.jpg" alt=""></a>`,
            img_3 : `<a draggable="false" href="/kakashi_3"><img draggable="false" class="img" src="img/kakashi_slider_team_7_lofi.jpg" alt=""></a>`,
            img_4 : `<a draggable="false" href="/kakashi_4"><img draggable="false" class="img" src="img/naruto_img_4.jpg" alt=""></a>`,
            img_5 : `<a draggable="false" href="/kakashi_5"><img draggable="false" class="img" src="img/Kakashi_anbu.png" alt=""></a>`,
            img_6 : `<a draggable="false" href="/kakashi_6"><img draggable="false" class="img" src="img/Anbu_kakashi.jpg" alt=""></a>`,
            img_7 : `<a draggable="false" href="/kakashi_7"><img draggable="false" class="img" src="img/Kakashi_07.jpg" alt=""></a>`,
        }
    
        let total_properties = Object.keys(img_object).length;
    
        if(value == 1)
        {
            img_div.innerHTML = img_object[`img_${value}`]
        }
    
        next.onclick = function()
        {
            if(value < total_properties)
            {
            value ++
            console.log(value);
            img_div.innerHTML = img_object[`img_${value}`]
            remove_color(); // rimuove a tutti la classe 'balls_shining'
            balls_div.children[value-1].classList.add('balls_shining'); // e aggiunge al children position[value-1] quella classe;
            }
            
        }
    
        previuos.onclick = function()
        {
            if(value > 1)
            {
                value--
                console.log(value);
                img_div.innerHTML = img_object[`img_${value}`]
                remove_color();
                balls_div.children[value-1].classList.add('balls_shining');
            }
    
            if(value == 0)
        {
            value++;
            balls_div.children[value].classList.add('balls_shining');
            img_div.innerHTML = `<a href="#"><img class="img" src="img/Anbu_kakashi.jpg" alt=""></a>`
        }  
    
    
            
        }
    
        const balls_div = document.querySelector(".balls_div");
    
        balls_div.innerHTML = `<div class="balls"></div>`.repeat(total_properties);
        const balls = document.querySelectorAll(".balls");
    
        function remove_color ()
        {
            balls.forEach((balls) => {
                balls.classList.remove('balls_shining');
            })
            
        }
    
        if(value == 1)
        {
            (balls_div.children[value-1].classList.add('balls_shining'));
        }
        console.log(value);
}

function objects_shop()
{
    const action_figures = document.querySelector(".action_figures");
    const movies_container = document.querySelector(".movies_container");
    const songs_container = document.querySelector(".songs_container");

    const Array =
    [
        {id:'', type:'action figure', name:'Pain (nagato)', price:82.99, shipping: 2.99, quantitiy: 1, img : 'pain.PNG', desc : 'the leader of the Akatsuki who wishes to capture the tailed beasts sealed into the jinchurikis and unite the world trough pain',},
        {id:'', type:'action figure', name:'Uchiha Obito', price:99.99, shipping: 5.99, quantitiy: 1, img : 'obito.PNG', desc : 'Obito Uchiha, the fallen angel of the hiddean leaf village, the Naruto that lost hope. Despite tragedy & villainy, remains complex & intriguing..',},
        {id:'', type:'action figure', name:'Uchiha Madara', price:110.99,shipping: 3.99, quantitiy: 1, img : 'madara.jpg', desc : 'Madara Uchiha is one of the main antagonists of the Naruto franchise. He is the co-founder of the Hidden leaf village and its first Rogue Ninja. Though thought to have died, Madara survived and planned to rule the Ninja World as a god, making Obito Uchiha into his apprentice.',},
        {id:'', type:'action figure', name:'Naruto uzumaki', price:129.99,shipping: 1.99, quantitiy: 1, img : 'naruto.PNG', desc : "Naruto Uzumaki is a the main character and he's a ninja from the Hidden Leaf Village, determined to become Hokage to prove to the people of the hidden leaf that he is not a monster",},
        {id:'', type:'action figure', name:'hashirama Senju', price:112.99, shipping: 4.99,quantitiy: 1, img : 'hashirama.PNG', desc : 'Hashirama Senju, etern rival of Madara Uchiha, Legendary Hokage also referred to as the God of Shinobi, co-founder of the hidden lead vilage, and master of Wood Style jutsu.',},
        {id:'', type:'action figure', name:'Kakashi Hatake', price:90.99, shipping: 2.99,quantitiy: 1, img : 'movie-8.jpg', desc : 'Hatake Kakashi, is a skilled and mysterious ninja from the village of Konoha. With his trademark mask covering half of his face and his calm attitude, he has gained a reputation as one of the strongest and most respected members of the village.',},
        {id:'', type:'action figure', name:'Sasuke Uchiha', price:120.99, shipping: 2.99,quantitiy: 1, img : 'sasuke.jpg', desc : 'Sasuke Uchiha is a skilled and powerful ninja from the Uchiha clan, known for his exceptional fighting skills and intelligence. He is driven by a desire for revenge against his older brother, Itachi, who killed their entire clan and left Sasuke as the sole survivor. Sasuke is often cold and aloof, but he also deeply cares for his comrades and will do anything to protect them.',},
        {id:'', type:'action figure', name:'Minato namikaze', price:104.99,shipping: 3.99,quantitiy: 1, img : 'minato.PNG', desc : "Minato Namikaze, father of Naruto and 4th Hokage, was a genius shinobi with incredible speed and amazing combat skills. He single-handedly ended the Third Great Ninja War and saved the entire alliance in the Fourth Great Ninja War. Widely regarded as one of the strongest shinobi in Naruto's world, he ranks among the greatest in history.",},
        {id:'', type:'action figure', name:'Gaara', price:80.99, quantitiy: 1,shipping: 2.99,img : 'gaara.PNG', desc : "Gaara is a complex character in Naruto with a tragic backstory. He is the jinchuriki of the One-Tailed Shukaku, which causes him to be feared and isolated from others in his village. Gaara's harsh upbringing leads him to believe that the only way to protect himself is through violence. However, through his interactions with Naruto, he learns the value of friendship and eventually becomes the Kazekage of his village. Gaara's sand powers make him a formidable opponent in battle, and his growth as a character is inspiring.",},
        {id:'', type:'action figure', name:'Jiraya', price:78.99, quantitiy: 1, shipping: 7.99,img : 'jiraya.PNG', desc : 'Jiraya, one of the 3 legendary sannins, sensei of the strongest shinobi ever, Naruto, aswell as the 4th hokage Minato, also teached Pain, Konan, Yahiko and.',},
        {id:'', type:'action figure', name:'Shikamaru Nara', price:70.99, quantitiy: 1,shipping: 1.99,img : 'shikamaru.PNG', desc : 'Shikamaru Nara is a genius ninja from the hidden leaf village. He is a lazy and calm character who is often seen playing shogi. However, he possesses an IQ of over 200 and is a master strategist. He is skilled in shadow manipulation and uses his abilities to control and restrain his enemies. Despite his reluctance to engage in battles, he is fiercely loyal to his friends and will do whatever it takes to protect them.',},
        {id:'', type:'action figure', name:'Itachi Uchiha', price:89.99, quantitiy: 1, shipping: 2.99,img : 'itachi.PNG', desc : "as a shinobi of Konohagakure's Uchiha clan who served as an Anbu Captain. He later became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organisation known as Akatsuki",},

        {id:'', type:'movies', name:'Naruto: The Last', price:82.99, quantitiy: 1, shipping: 1.99,img : 'movie_1.jpg', desc : "Naruto film abt ......",},
        {id:'', type:'movies', name:'Naruto: The Last', price:82.99, quantitiy: 1, shipping: 2.99,img : 'movie-6.png', desc : "Naruto film abt ......",},
        {id:'', type:'movies', name:'Naruto: The Last', price:82.99, quantitiy: 1, shipping: 2.49,img : 'movie-4.jpg', desc : "Naruto film abt ......",},
        {id:'', type:'movies', name:'Naruto: The Last', price:82.99, quantitiy: 1, shipping: 2.99,img : 'movie_2.jpg', desc : "Naruto film abt ......",},
        {id:'', type:'movies', name:'Naruto: The Last', price:82.99, quantitiy: 1, shipping: 2.79,img : 'movie-3.png', desc : "Naruto film abt ......",},
        {id:'', type:'movies', name:'Naruto: The Last', price:82.99, quantitiy: 1, shipping: 2.29,img : 'song_8.PNG', desc : "Naruto film abt ......",},

        {id:'', type:'songs', name:'Ost 1', song:'e829545714efa52591e584984c9f7a28.mp3', shipping: 0.99,price:9.99, quantitiy: 1, img : 'song-5.jpg', desc : "Naruto song abt ......",},
        {id:'', type:'songs', name:'Ost 2', song:'c63a519c1543ec035838f51966797c2d.mp3', shipping: 1.99,price:9.99, quantitiy: 1, img : 'song_1.jpg', desc : "Naruto song abt ......",},
        {id:'', type:'songs', name:'Ost 3', song:'e829545714efa52591e584984c9f7a28.mp3', shipping: 2.99,price:9.99, quantitiy: 1, img : 'song_2.jpg', desc : "Naruto song abt ......",},
        {id:'', type:'songs', name:'Ost 3', song:'e829545714efa52591e584984c9f7a28.mp3', shipping: 5.99,price:9.99, quantitiy: 1, img : 'song_3.jpg', desc : "Naruto song abt ......",},
        {id:'', type:'songs', name:'Ost 3', song:'e829545714efa52591e584984c9f7a28.mp3', shipping: 1.99,price:9.99, quantitiy: 1, img : 'song_4.jpg', desc : "Naruto song abt ......",},

    ]// remember to run for loop for add id[i];

    for(let i=0;i<Array.length;i++)
    {
        Array[i].id = i;
    }

    for(let i=0;i<Array.length;i++)
    {
        if(Array[i].type === 'action figure')
        {
            action_figures.insertAdjacentHTML('beforeend',
        `
        <div class="jinx_card">
        <!--massimo 11 characters nel nome-->
        <div class="jinx_name-hover-div">${Array[i].name}</div> 
        <h2 class="jinx_price">${Array[i].price}$</h2>
        <button class="btn_cart btn" id = "${Array[i].id}">add</button>
        <div class="jinx_description-hover-div">
            <h3 class="jinx_description-hover">${Array[i].desc}</h3>
        </div>
        <!--end-overlay-divs-->
        <div class="jinx_img-div">
            <img draggable="false" src=img/${Array[i].img} alt="">
        </div>
        <div class="jinx_text-div">
            <h2 id="jinx_name-normal">${Array[i].name}</h2>
            
            
            <i class="fa-solid fa-circle jinx_dot"></i>
        </div>
    </div>
            `)
        }
        else if(Array[i].type === 'movies')
        {
            movies_container.insertAdjacentHTML('beforeend',
            `
            <div class="movies_card">
            <div class="movies_img_div">
                <img draggable="false" class="movies_img" src=img/${Array[i].img} alt="">
                <img draggable="false" class="movies_play"  src="img/play.png" alt="">
            </div>
            <h2 class="movies_title">Naruto: The Last</h2>
            <button class="movies_cartBtn btn" id = "${Array[i].id}">add</button>
            <h2 class="movies_price">82.99$</h2>
            <div class="jinx_text-div">
                <h2 id="movies_boolean">Available to buy</h2>
                
                
                <i class="fa-solid fa-circle jinx_dot movies_dot"></i>
            </div>
        </div>
            `)
        }
        else if(Array[i].type === 'songs')
        {
            songs_container.insertAdjacentHTML('beforeend',
            `
            <div class="movies_card">
            <div class="movies_img_div">
                <img draggable="false" class="movies_img" src=img/${Array[i].img} alt="">
            </div>
            <h2 class="movies_title">${Array[i].name}</h2>
            <button class="movies_cartBtn btn" id = "${Array[i].id}">add</button>
            <h2 class="movies_price">${Array[i].price}$</h2>
            <div class="jinx_text-div">
                <i class="fa-solid fa-play audio_play 2"></i>
                <audio class="audio" src=img/${Array[i].song}></audio>
                <i style="display: none;" class="fa-solid fa-pause pause_btn"></i>
                <input type="range" class="slider">
                <i class="fa-solid fa-circle jinx_dot movies_dot"></i>
            </div>
        </div>
            `
            )
        }
    }

    const row = document.querySelector(".row");
  
    const btn = document.querySelectorAll(".btn");


    let count = 0;
    btn.forEach(btn =>
        {




            btn.addEventListener('click', (e) =>{

                row.innerHTML = "";
                let test = false;

              console.clear()

              console.log("TEST "+ test);
                //Default
              if(Array_Cart.length == 0){
               
                console.log("FIRST ARRAY ITEM ADDED")
                    Array_Cart.push(Array[btn.id]);
              }else{

for(let i = 0; i < Array_Cart.length; i++){

    console.log("I: " + i);
        if(Array_Cart[i].id == e.target.id){
            console.log("Item with the id " + Array_Cart[i].id + " already exists : " + Array_Cart[i].name);          
           Array_Cart[i].quantitiy += 1;
         console.log("Quantity " + Array_Cart[i].quantitiy);
            console.log("ITEM FOUND STOP LOOP");
            test = true;

            console.log("Updated TEST "+ test);
            break;
            
        }
    
}

if(test != true){
    console.log("ADDED ITEM TO ARRAY");
    Array_Cart.push(Array[btn.id]);
}

                //console.log(Array_Cart)
                // console.log("Count " + count)    

                console.log(Array_Cart)
            }
           
  for(let k=0;k<Array_Cart.length;k++)
                {
                //console.log("ARRAY CART " + Array_Cart[k]); 
console.log(Array_Cart[k].id)

                DisplayCartItems(`img/${Array_Cart[k].img}`, Array_Cart[k].name, Array[k].desc, Array[k].price, GetQuantity(Array_Cart[k].quantitiy), Array_Cart, k);
                }

               console.log("--------NEW--------");
              



            });
        })

}


export function GetQuantity(quantity){
    return quantity;
}









function execute_functions()
{
    Navbar();
    songs();
    slider();
    objects_shop();
}

execute_functions()



