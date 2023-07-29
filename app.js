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

Navbar()

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

songs()

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
    
slider()