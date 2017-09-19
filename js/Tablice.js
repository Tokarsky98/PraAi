/*document.write("test");
//Tworzenie tablicy za pomoca literału tablicy, TU MASZ NAWIAS TRÓJKĄTNY
var kolory = ['biały','zielony','czerwony'];
//odwoływanie się do kolory "el"
var elKolor = document.getElementById('kolor');
elKolor.textContent = kolory [0];

//tworzenie tablicy za pomocą konstruktora tablicy Array, TU MASZ KWADRATOWY

var samochody = new Array('BMW','Audi','Ferrari');
console.log(samochody[0]);
console.log(samochody[samochody.length - 1]);
console.log('Ilość elementów tablicy: ' +samochody.length);

//Użytkownik podaje nowe auto a my zamieniamy pierwszy element tablicy

var nowe = prompt('Nowe autko');
samochody[0] = nowe;
console.log(nowe);

//TABLICE WIELOWYMIAROWE, najpierw liczymy wiersze a potem kolumny
var tab = new Array(
    new Array ('Jan','Kowal','Poznań'),
    new Array ('Anna','Nowak','Gniezno'),
    new Array ('Anna','Kowal','Poznań'),
);

console.log(tab[1],[2]); //Gniezno


var imiona = ['Janusz','Adrian','Andrzejek','Zenon'];
console.log(imiona);

var posortowaneImiona = imiona.sort();
console.log(posortowaneImiona);
var odwrocImiona = posortowaneImiona.reverse();
//odwrocImiona.pop();

odwrocImiona.unshift('Paweł');

odwrocImiona.push('Krystian');

console.log(odwrocImiona);

//Sprawdzenie czy istnieje element w tablicy

console.log(odwrocImiona.indexOf('Józek')); //-1 bo nie istnieje
console.log(odwrocImiona.indexOf('Paweł')); //różna od -1 to jest w tablicy

//Tablica z liczbami

var cyfry = [1,2,20,190,-1,1000000];
console.log(cyfry);

var posortowaneCyfry = cyfry.sort();
console.log(posortowaneCyfry);

var sortujCyfryPrawidlowo = cyfry.sort(function(a,b){
    return (a-b); //sprawdza czy liczba jest dodatnia czy ujemna
                                      
});
//Bombelkowe
console.log(sortujCyfryPrawidlowo);

//ZADANIE DOMOWE
Utwórz formularz z loginem (text) i hasłem (password) Zapisz dane w talicy, zapisz wymik w nagłówku (h2) użytkownik podaje również kolor w jakim ma być wszystko wyświetlone
*/


var zadaniev1 = prompt("Podaj text");
var cosv1 = document.getElementById("zadanie1");
cosv1.innerHTML = zadaniev1;

var zadaniev2 = prompt("Podaj password");
var cosv1 = document.getElementById("zadanie2");
cosv1.innerHTML = zadaniev2;

var tablica = new Array('text','password');
console.log(tablica);





































