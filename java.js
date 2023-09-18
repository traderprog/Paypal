
const gomb = document.getElementById('gomb');
let osszeg = 10000000;
let time = 0 ;
document.getElementById('toke').innerHTML=osszeg.toLocaleString("de-DE");
let x = 0;
gomb.onclick = kivonas;
document.getElementById("pipa").style.display = "none"

let inputField = document.getElementById('utalas');

inputField.onkeyup = function (){
    let removeChar = this.value.replace(/[^0-9\.]/g, '');
    this.value =removeChar;
    let formatedNumber = this.value.replace(/\B(?=(\d{3})+(?!\d))/g,",") ;
    this.value = "EUR  " + formatedNumber;
}

function kivonas(){
    document.getElementById('igazol').style.display ="block";
    document.getElementById('display').style.display ="block";
    document.getElementById('display').style.animation = "kesleltetes 0.3s 1 linear";
    document.getElementById("utalas-statusz").innerHTML = "Waiting for transaction..";
    time = 0;
    document.getElementById("pipa").style.display = "none";
    x = 1;
    let utalas = document.getElementById("utalas").value;
    document.getElementById('loader-amount').innerHTML = utalas.replace(/[^0-9\.]/g, '') + " EUR";
}
if (x=1){
    let igazol = document.getElementById('igazol');
    igazol.addEventListener("click", eltuntet)
    setInterval(() =>{time += 1;},1000);
   

}
setInterval(() =>{ 
    if (time == 4){
        document.getElementById("utalas-statusz").innerHTML = "Success";
        document.getElementById("pipa").style.display = "flex";
       
    };},100);
  

function eltuntet(){
    document.getElementById('igazol').style.display ="none";
    document.getElementById('display').style.display ="none";
    document.getElementById('display').style.animation = "none";
    x = 0;
    egyenleg = document.getElementById('toke');
    let utalas = document.getElementById('utalas');
    let vesszonelkul = utalas.value.replace(/\,/g,'');
    osszeg = osszeg-vesszonelkul.replace(/[^0-9\.]/g, '');
    egyenleg.innerText = osszeg.toLocaleString("de-DE");
    utalas.value = "";
    document.getElementById("name").value="";

};
