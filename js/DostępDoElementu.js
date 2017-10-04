//Metoda getElementById ->zwraca 1 element


/*
var elPierwszy = document.getElementById('pierwszy');
elPierwszy.className = 'niebieski';
*/

//Metoda getElementsByTagName -> zwraca całą tablicę

/*var elNaglowek = document.getElementsByTagName('h1');
if (elNaglowek.length > 0) {
    //console.log(elNaglowek.length);
    console.log(elNaglowek);
    elNaglowek[0].className = 'czerwony';
}*/

//Metoda getElementsByClassName

/*
var czerwony = document.getElementsByClassName('czerwony');
if (czerwony.length > 0){
    console.log(czerwony.length);
    console.log(czerwony);
    var ostatni = czerwony[czerwony.length - 1];
    ostatni.className = 'niebieski';
}
*/

//Metoda querySelector -> zwraca pierwsze dopasowanie


/*
var elTv = document.querySelector('li.grey'); //wyszuka pierwszy element Samsung
elTv.className = "niebieski"; //zastepuje go niebieskim
*/

//metoda querySelectorAll

/*
var elTvAll = document.querySelectorAll('li.grey');
console.log(elTvAll.length);
elTvAll[2].className = 'niebieski';
*/



//Metoda getElementsByName, zmień wszysko na niebiesko z telewizorem
/*

var elPrzycisk = document.getElementById('przycisk');

elPrzycisk.onclick = function(){
    var zmiana = document.getElementsByName('tv');
    for (var i=0;i<zmiana.length;i++)
        zmiana[i].className = 'niebieski';

}
*/
//metoda taka sama jak wyzej tylko z forEach'em
/*var elPrzycisk = document.getElementById('przycisk');
var elTvZmien = document.getElementsByName('tv');

function zmien(element,index){
    elTvZmien[index].className = 'niebieski';
}
elPrzycisk.onclick = function(){
    elTvZmien.forEach(zmien);

}

//*/

//Napisz program,który wyświetla liczby od 1 do 100. Dla liczb podzielnych przez 3 niech wyświetli "Fizz", dla liczb podzielnych przez 5 niech wyswietli "Buzz" a dla liczb podzielnych przez 15 wyświetli 'FizzBuzz'

/*
var i;
for (i=1;i<=100;i++){
    if (i % 15 == 0){
        document.write('FizzBuzz' + '<br>');
    }else if (i % 5 == 0){
        document.write('Buzz' + '<br>');
    }else if (i % 3 == 0){
        document.write('Fizz'+'<br>');
    }else {
        document.write(i + '<br>');
    }
}
*/

//previousElementSibling, nextElementSibling
var elPoczatek = document.getElementById('s2');
elPoczatek.className='niebieski';

var elPoprzedni = elPoczatek.previousElementSibling;
elPoprzedni.className='niebieski';

var elNastepny = elPoczatek.nextElementSibling;
elNastepny.className='niebieski';


//firstChild i lastChild

/*
var lista = document.getElementsByTagName('ul');
console.log(lista);

var pierwszy = lista.firstElementChild;
var ostatni = lista.lastElementChild;

pierwszy.setAttribute('class','grey');
ostatni.setAttribute('class','grey');
*/

//***************************************************************
//Zmień pierwszy element input na button i przypisz wartość wyślij.

var text = document.getElementsByTagName('input')[0];
text.setAttribute('type','button');
text.setAttribute('value','Wyślij');

//Tekst www łączy ze stroną zsk.pl

var text1 = document.getElementsByTagName('a')[0];
text1.setAttribute('href','http://zsk.poznan.pl');



































