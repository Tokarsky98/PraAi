//Arkusz E.14-01-15.01
var elPierwsza = document.getElementById('pierwsza');
var elDruga = document.getElementById('druga');
var elDodawanie = document.getElementById('p1');
var elOdejmowanie = document.getElementById('p2');
var elMnozenie = document.getElementById('p3');
var elDzielenie = document.getElementById('p4');
var elWynik = document.getElementById('wynik');

elDodawanie.onclick = function(){
    if(elPierwsza.value == '' || elDruga.value == ''){
        elWynik.innerHTML = "Proszę uzupełnić obie liczby";
    }else {
        elWynik = elPierwsza.value + elDruga.value;
        elWynik.innerHTML =
    }
}

