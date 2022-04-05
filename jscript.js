window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}
function QS(elem) {
    return document.querySelectorAll(elem);
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
    console.log(szam);
    
}

function jelMegjelenit() {
    var jel = event.target.innerHTML;
    muvjel = jel;
    /*var txt = `<span class="kifejezes"></span><span class="eredmeny"></span>`;
    console.log(txt)
    console.log(CLASS("kifejezes")[0].innerHTML)*/
    if (!CLASS("kifejezes")[0].innerHTML == "") {
        CLASS("kifejezes")[0].innerHTML += jel;
    }
}


function muvjelek() {
    ID("osszeadas").addEventListener("click", jelMegjelenit);
    ID("kivonas").addEventListener("click", jelMegjelenit);
    ID("szorzas").addEventListener("click", jelMegjelenit);
    ID("osztas").addEventListener("click", jelMegjelenit);
    ID(".").addEventListener("click", jelMegjelenit);
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
    var eredmeny = 0;
    var kif=CLASS("kifejezes")[0].innerHTML;
    console.log(kif);
    tomb=kif.split(muvjel);
    console.log(tomb);
    switch (muvjel) {
        case '+':
            eredmeny = Number(tomb[0]) + Number(tomb[1]);
            break;
        case '-':
            eredmeny = tomb[0] - tomb[1];
            break;
        case '*':
            eredmeny = tomb[0] * tomb[1];
            break;
        case '/':
            eredmeny = tomb[0] / tomb[1];
            break;    
        default:
            break;
    }
    CLASS("kifejezes")[0].innerHTML = eredmeny;

}
