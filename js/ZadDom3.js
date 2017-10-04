var elPodstawa = document.getElementById('podstawa');
var elPotega = document.getElementById('potega');
var elWynik = document.getElementById('wynik');
var elPrzycisk = document.getElementById('przycisk');

elPrzycisk.onclick = function(){

    if (elPodstawa.value == '' || elPotega.value == '') elWynik.textContent = "Podaj podstawę i potęgę";
    else if (elPotega.value<0) elWynik.textContent = "Potęga musi być dodatnia";
    else elWynik.textContent ="Wynik: " + Math.pow(elPodstawa.value,elPotega.value);

}
