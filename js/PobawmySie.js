/*var kolory = ['zielony','niebieski','czerwony']; //tworze tablice
var elKolor = document.getElementById('kolor'); //tworze zmienna elKolor aby móc nawiazac polaczenie z div i moc to wyswietlic
elKolor.textContent = kolory; //przypisuje elKolor zawartosc tabelicy kolor
document.write(kolory[kolory.length - 1]); //czerwony
console.log(kolory[kolory.length - 1]); //w konsoli to samo
console.log(kolory.length); //dlugosc tablicy

//Użytkownik podaje nowy kolor a my zamieniamy pierwszy element tablicy


var nowy = prompt('podaj pan kolor: ');
kolory[3] = nowy;
console.log(kolory);
var elNowy = document.getElementById('kolor');
elNowy.textContent = kolory;


var cyfry = [1,2,4,6,10,3,8];
var posortowaneCyfry = cyfry.sort(function(a,b){
    return a-b;
});
console.log(posortowaneCyfry);*/
//Uzytkownik podaje swoje imie i nazwisko.Zapisz je w html. Zapisz dane w tabeli

var a = prompt("Podaj imie: ");
document.getElementById('imie').value=a;


var zmienna1 = prompt('Podaj nazwisko');
var zmienna2 = document.getElementById('wynik2');
zmienna2.textContent = zmienna1;

var tablica = new Array ('wynik1','wynik2');
document.write(tablica);

/*var a = 10;
var b = 15;
var c = 20;

var minimalna = Math.min(a,b,c);
console.log(minimalna);

var maksymalna = Math.max(a,b,c);
console.log(maksymalna);*/

/*var pierwiastek = prompt('Podaj liczbe');
console.log(Math.sqrt(pierwiastek));*/

/*
var losowa = Math.random();
console.log(losowa);

var k = 3.5555565;
k = k.toFixed(2);
console.log(k);

var q = 4.999999;
q = q.toPrecision(3);
console.log(q);


//losuj liczby z przedzialu od 10-20;

var l = Math.floor(Math.random()*11 + 10);
console.log(l);
*/


//Utwórz pola radio z zawartoscia psy i koty. Na kliknięcie przycisku ma sie pojawic napis "nic", jesli odznaczy sie psy to edzie sznaucer jesli koty to KOT.

/*
var elPsy = document.getElementById('psy');
var elKot = document.getElementByid('koty');
var elPrzycisk = document.getElementById('sprawdz');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function(){
    if(elPsy.checked == true){
        elWynik.textContent = document.write('sznaucer');
    }else if(elKot.checked == true){
        elWynik.textContent = document.write('kot');
    }else {
        elWynik.textContent = document.write('Nic nie zaznaczyłeś');
    }
}

*/

/*
var a = prompt("Podaj swoje imie");
document.getElementById('imie').value=a;




*/



























