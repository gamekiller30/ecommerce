import { Array_Cart, DisplayCart, ShowPrices, CheckforPrices } from "./cart.js";

const profile_img = document.querySelector(".prof_img_container");
const shop_wrapper = document.querySelector(".shop_wrapper");
const index_wrapper = document.querySelector(".index_wrapper");

const cart_back = document.querySelector("#cart-back");

function BackToMain() {
  shop_wrapper.style.display = "none";
  index_wrapper.style.display = "flex";
}

//cart_back.addEventListener("click", BackToMain);

function createEl(tag, class_name = "", id = "", text = "") {
  const clas = class_name;
  class_name = document.createElement(tag);
  class_name.className = clas;
  class_name.id = id;
  class_name.innerText = text;
  return class_name;
}

profile_img.addEventListener("click", () => {
  //First Check if Values in Array exist then add Cart Item . then Checkprices .then showprices

  CheckforPrices()
    .then((su, s, t) => {
      console.log("success");
      ShowPrices(su, s, t);
    })
    .catch((err) => {
      console.error("ERROR " + err);
    });

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
});

function Navbar() {
  const revive_icon = document.querySelector(".revive_icon");
  const user_icon = document.querySelector(".user_icon");
  const input_div = document.querySelector(".input_div");
  const go_back_icon = document.querySelector(".go_back_icon");
  const navbar = document.querySelector(".navbar");

  function navbar_remove() {
    input_div.classList.remove("visible");
    user_icon.classList.remove("blur");
    revive_icon.classList.remove("blur");
    go_back_icon.classList.remove("blur");
  }

  revive_icon.addEventListener("click", (e) => {
    e.stopPropagation();
    input_div.classList.toggle("visible");
    user_icon.classList.toggle("blur");
    revive_icon.classList.toggle("blur");
    go_back_icon.classList.toggle("blur");
  });

  navbar.addEventListener("click", navbar_remove);

  window.addEventListener("click", navbar_remove);
}

function songs() {
  const audio_play = document.querySelectorAll(".audio_play");
  const pause_btn = document.querySelectorAll(".pause_btn");
  const slider = document.querySelectorAll(".slider");
  const audio = document.querySelectorAll(".audio");
  const movies_container = document.querySelector(".movies_container");

  audio_play.forEach((audio_play) => {
    pause_btn.forEach((pause_btn) => {
      slider.forEach((slider) => {
        audio.forEach((audio) => {
          audio_play.addEventListener("click", () => {
            audio.pause(); // quando premiamo un play pausiamo tutti gli audio
            cxd(); // e mettiamo che tutti i play btn siano visibile e rimuoviamo il pause_btn
            audio_play.nextElementSibling.play(); // dopo mettiamo che solo l' audio che abbiamo premuto playa
            audio_play.style.display = "none"; // dopo mettiamo che solo il playBtn che abbiamo premuto scompare
            audio_play.nextElementSibling.nextElementSibling.style.display =
              "block"; // e mettiamo che solo il pauseBtn relativo al playBtn che abbiamo premuto sia visibile
          });

          pause_btn.addEventListener("click", () => {
            pause_btn.previousElementSibling.pause(); // pausiamo l' audio
            pause_btn.previousElementSibling.previousElementSibling.style.display =
              "block"; // il playBtn relativo al pauseBtn che abbiamo premuto diventera' visibile
            pause_btn.style.display = "none"; // e solo il pauseBtn che abbiamo premuto scompare
          });

          audio_play.nextElementSibling.addEventListener("timeupdate", () => {
            audio_play.nextElementSibling.nextElementSibling.nextElementSibling.value =
              audio_play.nextElementSibling.currentTime;
            audio_play.nextElementSibling.nextElementSibling.nextElementSibling.max =
              audio_play.nextElementSibling.duration;
          });
        });
      });
    });
  });

  function cxd() {
    audio_play.forEach((audio_play) => {
      audio_play.style.display = "block";
    });
    pause_btn.forEach((pause_btn) => {
      pause_btn.style.display = "none";
    });
    audio.forEach((audio) => {
      audio.currentTime = 0;
    });
  }
}

function slider() {
  const img = document.querySelector(".img");
  const next = document.querySelector(".next");
  const previuos = document.querySelector(".previuos");
  let value = 1;
  let img_div = document.querySelector(".img_div");
  const img_object = {
    img_1: `<a draggable="false" href="/kakashi-1"><img draggable="false" class="img" src="img/kakashi-04.PNG" alt=""></a>`,
    img_2: `<a draggable="false" href="/kakashi_2"><img draggable="false" class="img" src="img/kakashi-02.jpg" alt=""></a>`,
    img_3: `<a draggable="false" href="/kakashi_3"><img draggable="false" class="img" src="img/kakashi_slider_team_7_lofi.jpg" alt=""></a>`,
    img_4: `<a draggable="false" href="/kakashi_4"><img draggable="false" class="img" src="img/naruto_img_4.jpg" alt=""></a>`,
    img_5: `<a draggable="false" href="/kakashi_5"><img draggable="false" class="img" src="img/Kakashi_anbu.png" alt=""></a>`,
    img_6: `<a draggable="false" href="/kakashi_6"><img draggable="false" class="img" src="img/Anbu_kakashi.jpg" alt=""></a>`,
    img_7: `<a draggable="false" href="/kakashi_7"><img draggable="false" class="img" src="img/Kakashi_07.jpg" alt=""></a>`,
  };

  let total_properties = Object.keys(img_object).length;

  if (value == 1) {
    img_div.innerHTML = img_object[`img_${value}`];
  }

  next.onclick = function () {
    if (value < total_properties) {
      value++;
      console.log(value);
      img_div.innerHTML = img_object[`img_${value}`];
      remove_color(); // rimuove a tutti la classe 'balls_shining'
      balls_div.children[value - 1].classList.add("balls_shining"); // e aggiunge al children position[value-1] quella classe;
    }
  };

  previuos.onclick = function () {
    if (value > 1) {
      value--;
      console.log(value);
      img_div.innerHTML = img_object[`img_${value}`];
      remove_color();
      balls_div.children[value - 1].classList.add("balls_shining");
    }

    if (value == 0) {
      value++;
      balls_div.children[value].classList.add("balls_shining");
      img_div.innerHTML = `<a href="#"><img class="img" src="img/Anbu_kakashi.jpg" alt=""></a>`;
    }
  };

  const balls_div = document.querySelector(".balls_div");

  balls_div.innerHTML = `<div class="balls"></div>`.repeat(total_properties);
  const balls = document.querySelectorAll(".balls");

  function remove_color() {
    balls.forEach((balls) => {
      balls.classList.remove("balls_shining");
    });
  }

  if (value == 1) {
    balls_div.children[value - 1].classList.add("balls_shining");
  }
  console.log(value);
}

function objects_shop() {
  const action_figures = document.querySelector(".action_figures");
  const movies_container = document.querySelector(".movies_container");
  const songs_container = document.querySelector(".songs_container");

  const Array = [
    {
      id: "",
      type: "action figure",
      name: "Pain (nagato)",
      price: 82.99,
      shipping: 2.99,
      quantitiy: 1,
      img: "pain.PNG",
      desc: "the leader of the Akatsuki who wishes to capture the tailed beasts sealed into the jinchurikis and unite the world trough pain",
    },
    {
      id: "",
      type: "action figure",
      name: "Uchiha Obito",
      price: 99.99,
      shipping: 5.99,
      quantitiy: 1,
      img: "obito.PNG",
      desc: "Obito Uchiha, the fallen angel of the hiddean leaf village, the Naruto that lost hope. Despite tragedy & villainy, remains complex & intriguing..",
    },
    {
      id: "",
      type: "action figure",
      name: "Uchiha Madara",
      price: 110.99,
      shipping: 3.99,
      quantitiy: 1,
      img: "madara.jpg",
      desc: "Madara Uchiha is one of the main antagonists of the Naruto franchise. He is the co-founder of the Hidden leaf village and its first Rogue Ninja. Though thought to have died, Madara survived and planned to rule the Ninja World as a god, making Obito Uchiha into his apprentice.",
    },
    {
      id: "",
      type: "action figure",
      name: "Naruto uzumaki",
      price: 129.99,
      shipping: 1.99,
      quantitiy: 1,
      img: "naruto.PNG",
      desc: "Naruto Uzumaki is a the main character and he's a ninja from the Hidden Leaf Village, determined to become Hokage to prove to the people of the hidden leaf that he is not a monster",
    },
    {
      id: "",
      type: "action figure",
      name: "hashirama Senju",
      price: 112.99,
      shipping: 4.99,
      quantitiy: 1,
      img: "hashirama.PNG",
      desc: "Hashirama Senju, etern rival of Madara Uchiha, Legendary Hokage also referred to as the God of Shinobi, co-founder of the hidden lead vilage, and master of Wood Style jutsu.",
    },
    {
      id: "",
      type: "action figure",
      name: "Kakashi Hatake",
      price: 90.99,
      shipping: 2.99,
      quantitiy: 1,
      img: "movie-8.jpg",
      desc: "Hatake Kakashi, is a skilled and mysterious ninja from the village of Konoha. With his trademark mask covering half of his face and his calm attitude, he has gained a reputation as one of the strongest and most respected members of the village.",
    },
    {
      id: "",
      type: "action figure",
      name: "Sasuke Uchiha",
      price: 120.99,
      shipping: 2.99,
      quantitiy: 1,
      img: "sasuke.jpg",
      desc: "Sasuke Uchiha is a skilled and powerful ninja from the Uchiha clan, known for his exceptional fighting skills and intelligence. He is driven by a desire for revenge against his older brother, Itachi, who killed their entire clan and left Sasuke as the sole survivor. Sasuke is often cold and aloof, but he also deeply cares for his comrades and will do anything to protect them.",
    },
    {
      id: "",
      type: "action figure",
      name: "Minato namikaze",
      price: 104.99,
      shipping: 3.99,
      quantitiy: 1,
      img: "minato.PNG",
      desc: "Minato Namikaze, father of Naruto and 4th Hokage, was a genius shinobi with incredible speed and amazing combat skills. He single-handedly ended the Third Great Ninja War and saved the entire alliance in the Fourth Great Ninja War. Widely regarded as one of the strongest shinobi in Naruto's world, he ranks among the greatest in history.",
    },
    {
      id: "",
      type: "action figure",
      name: "Gaara",
      price: 80.99,
      quantitiy: 1,
      shipping: 2.99,
      img: "jiraya.PNG",
      desc: "Gaara is a complex character in Naruto with a tragic backstory. He is the jinchuriki of the One-Tailed Shukaku, which causes him to be feared and isolated from others in his village. Gaara's harsh upbringing leads him to believe that the only way to protect himself is through violence. However, through his interactions with Naruto, he learns the value of friendship and eventually becomes the Kazekage of his village. Gaara's sand powers make him a formidable opponent in battle, and his growth as a character is inspiring.",
    },
    {
      id: "",
      type: "action figure",
      name: "Jiraya",
      price: 78.99,
      quantitiy: 1,
      shipping: 7.99,
      img: "jiraya.PNG",
      desc: "Jiraya, one of the 3 legendary sannins, sensei of the strongest shinobi ever, Naruto, aswell as the 4th hokage Minato, also teached Pain, Konan, Yahiko and.",
    },
    {
      id: "",
      type: "action figure",
      name: "Shikamaru Nara",
      price: 70.99,
      quantitiy: 1,
      shipping: 1.99,
      img: "shikamaru.PNG",
      desc: "Shikamaru Nara is a genius ninja from the hidden leaf village. He is a lazy and calm character who is often seen playing shogi. However, he possesses an IQ of over 200 and is a master strategist. He is skilled in shadow manipulation and uses his abilities to control and restrain his enemies. Despite his reluctance to engage in battles, he is fiercely loyal to his friends and will do whatever it takes to protect them.",
    },
    {
      id: "",
      type: "action figure",
      name: "Itachi Uchiha",
      price: 89.99,
      quantitiy: 1,
      shipping: 2.99,
      img: "itachi.PNG",
      desc: "as a shinobi of Konohagakure's Uchiha clan who served as an Anbu Captain. He later became an international criminal after murdering his entire clan, sparing only his younger brother, Sasuke. He afterwards joined the international criminal organisation known as Akatsuki",
    },

    {
      id: "",
      type: "movies",
      name: "Naruto: The Last",
      price: 82.99,
      quantitiy: 1,
      shipping: 1.99,
      img: "movie_1.jpg",
      desc: "Naruto film abt ......",
    },
    {
      id: "",
      type: "movies",
      name: "Naruto: The Last",
      price: 82.99,
      quantitiy: 1,
      shipping: 2.99,
      img: "movie-6.png",
      desc: "Naruto film abt ......",
    },
    {
      id: "",
      type: "movies",
      name: "Naruto: The Last",
      price: 82.99,
      quantitiy: 1,
      shipping: 2.49,
      img: "movie-4.jpg",
      desc: "Naruto film abt ......",
    },
    {
      id: "",
      type: "movies",
      name: "Naruto: The Last",
      price: 82.99,
      quantitiy: 1,
      shipping: 2.99,
      img: "movie_2.jpg",
      desc: "Naruto film abt ......",
    },
    {
      id: "",
      type: "movies",
      name: "Naruto: The Last",
      price: 82.99,
      quantitiy: 1,
      shipping: 2.79,
      img: "movie-3.png",
      desc: "Naruto film abt ......",
    },
    {
      id: "",
      type: "movies",
      name: "Naruto: The Last",
      price: 82.99,
      quantitiy: 1,
      shipping: 2.29,
      img: "song_8.PNG",
      desc: "Naruto film abt ......",
    },

    {
      id: "",
      type: "songs",
      name: "Ost 1",
      song: "e829545714efa52591e584984c9f7a28.mp3",
      shipping: 0.99,
      price: 9.99,
      quantitiy: 1,
      img: "song-5.jpg",
      desc: "Naruto song abt ......",
    },
    {
      id: "",
      type: "songs",
      name: "Ost 2",
      song: "c63a519c1543ec035838f51966797c2d.mp3",
      shipping: 1.99,
      price: 9.99,
      quantitiy: 1,
      img: "song_1.jpg",
      desc: "Naruto song abt ......",
    },
    {
      id: "",
      type: "songs",
      name: "Ost 3",
      song: "e829545714efa52591e584984c9f7a28.mp3",
      shipping: 2.99,
      price: 9.99,
      quantitiy: 1,
      img: "song_2.jpg",
      desc: "Naruto song abt ......",
    },
    {
      id: "",
      type: "songs",
      name: "Ost 3",
      song: "e829545714efa52591e584984c9f7a28.mp3",
      shipping: 5.99,
      price: 9.99,
      quantitiy: 1,
      img: "song_3.jpg",
      desc: "Naruto song abt ......",
    },
    {
      id: "",
      type: "songs",
      name: "Ost 3",
      song: "e829545714efa52591e584984c9f7a28.mp3",
      shipping: 1.99,
      price: 9.99,
      quantitiy: 1,
      img: "song_4.jpg",
      desc: "Naruto song abt ......",
    },
  ]; // remember to run for loop for add id[i];

  for (let i = 0; i < Array.length; i++) {
    Array[i].id = i;
  }

  for (let i = 0; i < Array.length; i++) {
    if (Array[i].type === "action figure") {
      //action_figures

      const jinx_card = createEl("div", "jinx_card", "", "");
      const jinx_name_hover_div = createEl(
        "div",
        "jinx_name-hover-div",
        "",
        `${Array[i].name}`
      );
      const jinx_price = createEl("h2", "jinx_price", "", `${Array[i].price}$`);
      const btn_cart_btn = createEl(
        "button",
        "btn_cart btn",
        `${Array[i].id}`,
        "add"
      );
      const jinx_description_hover_div = createEl(
        "div",
        "jinx_description-hover-div",
        "",
        ""
      );
      const jinx_description_hover = createEl(
        "h3",
        "jinx_description-hover",
        "",
        `${Array[i].desc}`
      );
      jinx_description_hover_div.append(jinx_description_hover);
      const jinx_img_div = createEl("div", "jinx_img-div", "", "");
      const img = createEl("img", "", "", "");
      img.src = `img/${Array[i].img}`;
      jinx_img_div.append(img);
      const jinx_text_div = createEl("div", "jinx_text-div", "", "");
      const h2 = createEl("h2", "", "jinx_name-normal", `${Array[i].name}`);
      const dot = createEl("i", "fa-solid fa-circle jinx_dot", "", "");
      jinx_text_div.append(h2, dot);
      jinx_card.append(
        jinx_name_hover_div,
        jinx_price,
        btn_cart_btn,
        jinx_description_hover_div,
        jinx_img_div,
        jinx_text_div
      );
      action_figures.append(jinx_card);
    } else if (Array[i].type === "movies") {
      //movies_container.insertAdjacentHTML

      const movies_card = createEl("div", "movies_card");
      const movies_img_div = createEl("div", "movies_img_div");
      const movies_img = createEl("img", "movies_img");
      movies_img.src = `img/${Array[i].img}`;
      const movies_play = createEl("img", "movies_play");
      movies_play.src = "img/play.png";
      const movies_title = createEl(
        "h2",
        "movies_title",
        "",
        `${Array[i].name}`
      );
      const movies_cartBtn_btn = createEl(
        "button",
        "movies_cartBtn btn",
        `${Array[i].id}`,
        "add"
      );
      const movies_price = createEl(
        "h2",
        "movies_price",
        "",
        `${Array[i].price}`
      );
      const jinx_text_div = createEl("div", "jinx_text-div");
      const movies_boolean = createEl(
        "h2",
        "",
        "movies_boolean",
        "Available to buy"
      );
      const dot = createEl("div", "fa-solid fa-circle jinx_dot movies_dot");

      /*append*/
      movies_img_div.append(movies_img, movies_play);
      jinx_text_div.append(movies_boolean, dot);
      movies_card.append(
        movies_img_div,
        movies_title,
        movies_cartBtn_btn,
        movies_price,
        jinx_text_div
      );
      movies_container.append(movies_card);
    } else if (Array[i].type === "songs") {
      //songs_container.insertAdjacentHTML

      const movies_card = createEl("div", "movies_card");
      const movies_img_div = createEl("div", "movies_img_div");
      const movies_img = createEl("img", "movies_img");
      movies_img.src = `img/${Array[i].img}`;
      const movies_title = createEl(
        "h2",
        "movies_title",
        "",
        `${Array[i].name}`
      );
      const movies_cartBtn_btn = createEl(
        "button",
        "movies_cartBtn btn",
        `${Array[i].id}`,
        "add"
      );
      const movies_price = createEl(
        "h2",
        "movies_price",
        "",
        `${Array[i].price}`
      );
      const jinx_text_div = createEl("div", "jinx_text-div");
      const idk = createEl("i", "fa-solid fa-play audio_play 2", "", "");
      const audio = createEl("audio", "audio");
      audio.src = `img/${Array[i].song}`;
      const btn = createEl("i", "fa-solid fa-pause pause_btn");
      btn.style.display = "none";
      const slider = createEl("input", "slider");
      slider.type = "range";
      const btn_2 = createEl("i", "fa-solid fa-circle jinx_dot movies_dot");

      /*append*/
      movies_img_div.append(movies_img);
      jinx_text_div.append(idk, audio, btn, slider, btn_2);
      movies_card.append(
        movies_img_div,
        movies_title,
        movies_cartBtn_btn,
        movies_price,
        jinx_text_div
      );
      songs_container.append(movies_card);
    }
  }

  const row = document.querySelector(".row");

  const btn = document.querySelectorAll(".btn");

  let count = 0;
  //Faster would be with two for loops (check each outer iteration if in inner iteration val found break and return true and if its true break out of outer aswell)
  btn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      row.innerHTML = "";
      let test = false;

      //Default
      if (Array_Cart.length == 0) {
        Array_Cart.push(Array[btn.id]);
      } else {
        for (let i = 0; i < Array_Cart.length; i++) {
          if (Array_Cart[i].id == e.target.id) {
            Array_Cart[i].quantitiy += 1;
            test = true;
            //stop loop when duplicate found
            break;
          }
        }

        if (test != true) {
          Array_Cart.push(Array[btn.id]);
        }
      }

      DisplayCart();
      console.log("--------NEW--------");
    });
  });
}

export function GetQuantity(quantity) {
  return quantity;
}

function execute_functions() {
  Navbar();
  songs();
  slider();
  objects_shop();
}

execute_functions();
