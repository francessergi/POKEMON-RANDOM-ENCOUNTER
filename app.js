var trainerNum = 2;
var img_container = document.getElementById("contenidor-pokemon");

var fons = document.getElementById("encuentro");
fons.style.height = (screen.height - 76) + "px";

/* var shine = document.createElement("img");
shine.src = "./img/shiny.gif";
shine.id = "shine-effect"; */

function ajusta() {

}


//Quan carreguem la pagina accedim a la BD i carreguem les opcions.
function genera_pokemon() {
    var r = Math.floor(Math.random() * (252 - 1) + 1);
    var img = document.createElement('img');
    var ruta = "./gif/Arxiu" + r + ".gif";
    //var ruta = "./img/" + r + ".png";
    if (shiny(10)) {
        ruta = "./gif/shiny/Arxiu" + r + ".gif"
        reverse_background();
        /* efecto_shiny(); */
    }

    img.src = ruta;
    img.alt = ruta;
    if (img_container.hasChildNodes()) {
        img_container.childNodes[0].src = ruta;
        img_container.childNodes[0].alt = ruta;
    } else {
        img_container.appendChild(img);
    }
}

function canvia_trainer() {
    var trainer = document.getElementById("trainer");
    trainer.src = "./img/trainers/trainer" + trainerNum + ".png";
    trainerNum == 59 ? trainerNum = 1 : trainerNum++;
}

function efecto_shiny() {
    img_container.appendChild(shine);
    window.setTimeout(function() {
        shine.classList.remove('shine-effect')
    }, 500)

}

function shiny(ratio) {
    var num = Math.floor(Math.random() * (ratio - 1) + 1);
    console.log(num);
    if (num == 1) {
        return true;
    }
}

function flashRed() {
    document.body.classList.add('red')
    window.setTimeout(function() {
        document.body.classList.remove('red')
    }, 100)
}

function reverse_background() {
    encuentro.style.backgroundImage = "url(./img/backgrounds/reverse.png)";
    setTimeout(() => { encuentro.style.backgroundImage = "url(./img/backgrounds/background.png)"; }, 250);
}

function myFunction(event) {
    //d = 100
    //a = 97
    var x = event.which;
    if (x == 100) {
        genera_pokemon();
    }
    if (x == 97) {
        canvia_trainer();
    }
}