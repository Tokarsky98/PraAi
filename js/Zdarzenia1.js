var elWynik = document.getElementById('wynik');
var elAuto = document.getElementById('auto');

function mojeAuto(){
    elWynik.textContent = elAuto.value;

}


elAuto.addEventListener('change',mojeAuto);
