window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

function QS(elem) {
    return document.getElementsByTagName(elem);
}

var txt = "";
var muvjel = "";
var valtozo = "";


function init() {
    for (let index = 0; index < 10; index++) {
        txt += `<button id="${index}">${index}</button>`;
        
    }
    CLASS("szamok")[0].innerHTML = txt;

    for (let index = 0; index < 10; index++) {
        ID(index).addEventListener("click", megjelenit)
        
    }

    muvjelek();
}

function megjelenit() {
    var szam = event.target.innerHTML;
    CLASS("kifejezes")[0].innerHTML += szam;
    valtozo += szam;
    console.log(szam);
    
}

function jelMegjelenit() {
    var jel = event.target.innerHTML;
    /*var txt = `<span class="kifejezes"></span><span class="eredmeny"></span>`;
    console.log(txt)
    console.log(CLASS("kifejezes")[0].innerHTML)*/
    if (!CLASS("kifejezes")[0].innerHTML == "") {
        CLASS("kifejezes")[0].innerHTML += jel;
        valtozo += jel;
    }
}


function muvjelek() {
    ID("osszeadas").addEventListener("click", jelMegjelenit);
    ID("kivonas").addEventListener("click", jelMegjelenit);
    ID("szorzas").addEventListener("click", jelMegjelenit);
    ID("osztas").addEventListener("click", jelMegjelenit);
    ID(".").addEventListener("click", jelMegjelenit);
    ID("egyenlo").addEventListener("click", jelMegjelenit);
    ID("egyenlo").addEventListener("click", szamol);
    ID("torles").addEventListener("click", torles);
    
}

function torles() {
    CLASS("kijelzo")[0].innerHTML = 
    `<span class="kifejezes"></span>
    <span class="eredmeny"></span>`;
    valtozo = "";
}

function szamol() {
    tomb=valtozo.split(muvjel);
    console.log(tomb);
    console.log(muvjel);
}
