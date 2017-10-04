//******************************** FOR ***********************

/*
for (var i = 0; i<= 10; i++) {
    document.write(i);
    if (i == 5) break;
}
*/

//Losuj 100 liczb z przedziału od 50 do 200


/* for (var j=1; j<=100; j++){
    document.write(Math.floor(Math.random() * 151 + 50)+'<br>'); }
  */

/*for (var i = 1; i <= 10; i++){
    if (i != 10){
        document.write(i + ', ');
    }else{
        document.write(i + '.')
    }
}*/



//******************************** WHILE ********************

/*var i = 0;
while(i++ < 5){
    document.write(i + '<br>');
} */

//Użytkownik podaje z klawiatury 2 wartości, pętle będzie wykonywała dopóki x >= y;

/*
var x=0;
var y=0;
while (x >= y){
    x = Number(prompt('Podaj wartość x: '));
    y = prompt('Podaj wartość y: ');
}
document.write('x= ' + x ',y='+ y);
console.log(typeof(x));
console.log(typeof(y));
*/


//************************ DO WHILE ************************************

/*var wiek;
do {
    wiek = prompt("podaj wiek: ");
    if (wiek == 19) {
        document.write("Możesz grać w pegi 19");
    }
}while(wiek != 19) */

//Wykorzystaj pętle for i do while, podaj 5 liczb podzielnych przez 2 z klawiatury, zapisz je do tablicy i wyświetl w konsoli.


/*var liczby = [];
var x;
for (var i=0; i<=4; i++){
    do{
        x = prompt('Podaj 5 liczb które dzilą się przez 2: ');
        x = parseInt(x);

    }while(x % 2 != 0) //=> 0 false, dzieli się przez 2.
        liczby[i] = x;
}
console.log(liczby); */

//Użytkownik podaje z klawiatury liczbę. Zabezpiecz przed podaniem litery, znaku specjalnego.


/*document.write("<input type='text' id = 'liczba'>");
document.write("<button id = przycisk>Wyślij</button>");

var elPrzycisk = document.getElementById('przycisk');
var elLiczba = document.getElementById('liczba');

elPrzycisk.onclick = function(){
    if(!isNaN(elLiczba.value)){
        console.log(elLiczba.value)
    }
}*/



//ZAD DOM Użytkownik podaje z klawiatury login i hasło w formularzu. Jeśli login to filip a hasło to Okoń@1234 to na ekranie wyświetli w kolorze czerwonym poprawne hasło. Jeśli hasło będzie błędne to w kolorze zielonym wyświetli się błędne hasło. Użytkownik ma 3 próby.

//***************FOREACH***************************************************

/*var tab = ['Anna','Jacek','Janusz','Adrian'];
for (var i = 0; i < tab.length; i++){
    document.write(tab[i] + ' ');
}



function p(a,b) {
    document.write(a + b + '<br>');
}
tab.forEach(p);*/


/*
function pokaz (wartosc,indeks){
    document.write(indeks + 1 + '-element tablicy wynosi: ');
    document.write(wartosc + '<br>');
}

tab.forEach(pokaz);

*/

