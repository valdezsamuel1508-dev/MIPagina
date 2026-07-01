const elementos = document.querySelectorAll(
".presentacion, .card, .habilidades, .card-tres"
);

elementos.forEach((el, index) => {

    el.classList.add("oculto");

    setTimeout(() => {
        el.classList.add("mostrar");
    }, index * 200);

});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });

});

const boton = document.getElementById("modo-btn");

boton.addEventListener("click", () => {

    document.body.classList.toggle("oscuro");

});

const texto = "Samuel Valdéz";

let i = 0;

function escribir(){

    if(i < texto.length){

        document.getElementById("titulo").innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir, 120);

    }

}

escribir();


