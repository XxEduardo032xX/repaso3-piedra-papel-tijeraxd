const imgPapel = document.querySelector(".ImgPapel");
const imgPiedra = document.querySelector(".ImgPiedra");
const imgTijera = document.querySelector(".ImgTijera");
const contenedorSecundario = document.querySelector(".contenedorSecundario");
const ganador = document.querySelector(".ganador");
const contImgsResultantes = document.querySelector(".contImgsResultantes");
const fragmento = document.createDocumentFragment();
const btnReiniciar = document.querySelector(".btn-Reiniciar")
const opciones = ["Piedra", "Papel", "Tijera"];

//comentario:v
btnReiniciar.style.display = "none";
contenedorSecundario.style.display = "none";
const imgsJuego = [
    {
        img: "Img/papel.png",
        element: imgPapel,
        nom: "Papel"
    },
    {
        img: "Img/piedra.png",
        element: imgPiedra,
        nom: "Piedra"
    },
    {
        img: "Img/tijera.png",
        element: imgTijera,
        nom: "Tijera"
    }
];

function funcionEscoger() {
    imgsJuego.forEach(({ element }) => {
        element.addEventListener("click", manejarClic);
    });
}

function manejarClic(event) {
    const opcionUsuario = event.target.dataset.option;
    const opcionPC = opciones[Math.floor(Math.random() * 3)];

    console.log("Usuario:", opcionUsuario);
    console.log("PC:", opcionPC);

    if (opcionUsuario === opcionPC) {
        console.log("Empate");
        mostrando(opcionUsuario, opcionPC);
        ganador.textContent = `Fue un empate`
        ganador.style.display = "block";
        btnReiniciar.style.display = "block";
        contenedorSecundario.style.display = "block";
    } else if (
        (opcionUsuario === "Piedra" && opcionPC === "Tijera") ||
        (opcionUsuario === "Papel" && opcionPC === "Piedra") ||
        (opcionUsuario === "Tijera" && opcionPC === "Papel")
    ) {
        console.log("Usuario gana");
        mostrando(opcionUsuario, opcionPC);
        ganador.textContent = `Gano el usuario`
        ganador.style.display = "block";
        btnReiniciar.style.display = "block";
        contenedorSecundario.style.display = "block";
    } else {
        console.log("PC gana");
        mostrando(opcionUsuario, opcionPC);
        ganador.textContent = `Gano la pc`
        ganador.style.display = "block";
        btnReiniciar.style.display = "block";
        contenedorSecundario.style.display = "block";
    }

    imgsJuego.forEach(({ element }) => {
        element.removeEventListener("click", manejarClic);
        element.style.opacity = 0.5;
    });
}

function mostrando(valor, valorPc) {
    const elementoUsuario = document.createElement("img");
    const elementoPC = document.createElement("img");

    recorriendoImgsElementos(valor, elementoUsuario);
    recorriendoImgsElementos(valorPc, elementoPC);

    fragmento.appendChild(elementoUsuario);
    fragmento.appendChild(elementoPC);

    contImgsResultantes.appendChild(fragmento);
}

function recorriendoImgsElementos(valor, elemento) {
    const imgElement = imgsJuego.find((element) => element.nom === valor);
    elemento.src = imgElement.img;
}


function reiniciarJuego() {
    imgsJuego.forEach(({ element }) => {
        element.style.opacity = 1;
    });

    imgsJuego.forEach(({ element }) => {
        element.addEventListener("click", manejarClic);
    });

    contImgsResultantes.innerHTML = "";
    
    contenedorSecundario.style.display = "block";
    ganador.style.display = "none";
    btnReiniciar.style.display = "none";
    contenedorSecundario.style.display = "none";

}



funcionEscoger();
