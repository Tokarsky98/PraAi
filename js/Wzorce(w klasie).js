//Wyrazenia regolarne
/*var text = 'Zespół Komunikacji';
var regEx = /Szkół/;*/
// var regEx = /Szkół/i; // -> nie zwraca uwagę na wielkosc liter
//var regEx = /^szkół/i; //->
//var regEx = /Szkół$/;
//var regEx = /^szkół$/i //false od poczatku do konca wyrazenia ma byc szkół
//var regEx = /[A-Z]/; //true
//var regEx = /[A-z]/; //true
//var regEx = /[ą,ę,ń,ć,ó]/; //true
//var regEx = /[ąęńćó][A-z]/; 
//var regEx = /[a-z]\s/; //-> s to spacja
//var regEx = /[A-z]+@/; //musi byc z @
//var regEx = /mąka?/;  //true sprawdza czy jest a
//var regEx = /mąk[a]?/; 
//var regEx = /mąk[a]?@/ //znak zapytania sprawdza czy znak przed znakiem zapytania
//var regEx = /[a]/;
//var regEx = /^[a]{1}$/; //sprawdza czy jest a w ciągu i dokładnie 1
//var regEx = /^[a]{2,4}$/; //czy jest litera a i moze ich byc 2 3 lub 4
//var regEx = /\//; //witam sprawdza czy jest '/', przy kazdym znaku specjalnym \.
//var regEx = /./ //kropka zastępuje 1 literke
//var regEx = /^\.pl{2}/ //do .pl
//var regEx = /^\.[a-z]{2}$/; //do .pl tez
//var regEx = /[ąęńćó]|[a-z]/;  // znak | czyli LUB
//var regEx = /\w/; //true  w = duze male litery (bez polskich) cyfry znak podkreslenia.
//var regEx = /\W/; //negacja małego w.
//var regEx = /\d/; //cyfry
//var regEx = /\D/; //oprócz cyfr
//var regEx = /\s/; //moga byc spacje
//var regEx = /(test){2}/; //dziala jestli mamy 2x test obok siebie, testaaaatest już nie działa.

//ZADANIE DOMOWE
//Użytkownik podaje z klawiatury kod pocztowy i nazwę miasta, sprawdź czy kod jest prawidłowy, jeśli tak to na ekranie w bloku wyświetl :Kod pocztowy: ......, miasto: ....... (z formularza)


/*var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('sprawdz');

elPrzycisk.onclick = function(){
    var regExKod = /^[0-9]{2}-[0-9]{3}$/;
    var regExMiasto = /\D{3,}/;
    var elKod = document.getElementById('kodPocztowy');
    var elMiasto = document.getElementById('miasto');
    var sprawdzenie1 = regExKod.test(elKod.value);
    var sprawdzenie2 = regExMiasto.test(elMiasto.value);

if(sprawdzenie1 == false){
    elWynik.textContent = 'cos nie tak przy kodzie';
}else if(sprawdzenie2 == false){
    elWynik.textContent = 'cos nie tak przy mieście';
}else{
     elWynik.textContent = 'Kod pocztowy: ' + elKod.value + ' , ' + 'Miasto: ' + elMiasto.value;
}
}
    */


/*/[A-Z]{1}\D/*/ //cos fajnego do miasta

/*var sprawdz = regEx.test(text); //true ->znajduje sie
console.log(sprawdz);*/

var text1 = 'plik@mp3 arkusz.csv szkola.mp3 tekst.mp3';
//var sprawdz1 = regEx.test(text1);
var regEx = /\w{1,}\.mp3/g; // global czyli w całym pliku, kropka zastepuje 1 znak przed, chcemy wyświetlić tylko te pliki z .mp3
//var regEx = /\w+\.mp3/g; to samo co wyzej + zastępuje nam przedział, tylko tyle że przedział jest dokładniejszy
var sprawdz1 = text1.match(regEx); //najpierw text1 a potem regEx wyświetla mp3
//var sprawdz1 = regEx.test(text1); -> zwraca true, sprawdza czy pasuje do wzoru
document.write(sprawdz1);









































