
function kod(e) {
    // noinspection SpellCheckingInspection
    let znak, znaki, msg, licznik;

    msg = document.getElementById("msg").value;
        licznik = (180 - msg.length); // jshint ignore:line
        znaki = document.getElementById("znaki");
        znaki.textContent = licznik;
        znak = document.getElementById("kodznaku");
        znak.textContent = "ostatni znak to " + e.keyCode;
}

const el = document.getElementById("msg");

el.addEventListener("keypress", kod, false);


// noinspection JSLint
let elLista, linkDodaj, licznik, licznikElementow;


elLista = document.getElementById("lista");
linkDodaj = document.getElementById("dodaj");
licznik = document.getElementById("licznik");

// noinspection JSUnusedGlobalSymbols
// noinspection JSLint
function dodajElement(e) {
let nowyEl, nowyText;
    e.preventDefault();

    nowyEl = document.createElement("li");
    nowyText = document.createTextNode("kolejna linia");

    nowyEl.appendChild(nowyText);
    elLista.appendChild(nowyEl);
}

// noinspection JSUnusedGlobalSymbols
// noinspection JSLint
function liczElementy() {

    licznikElementow = document.getElementsByTagName("li").length;
    licznik.innerHTML = licznikElementow;

}



// todo zrobic cos w JS

