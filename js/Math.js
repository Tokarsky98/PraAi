/*
 var pi = Math.PI;
console.log(pi);
*/

/*var x = prompt("podaj wartosc z klawiatury");
console.log(Math.sqrt(x)); */


var a = 13.2;
var b = 28.5;
var c = 1;

var minimalna = Math.min(a,b,c);
console.log(minimalna);

var max = Math.max(a,b,c);
console.log(max);

var zaokraglenie = Math.round(a,b);
console.log(zaokraglenie);

//abs ->wartość bezwzględna, round-> zaokrąglenie, floor->podłoga

var x = -56;
var y = -13.1;
var z = 14.9;

document.write('<br>' + Math.abs(x) + '<br>');
document.write('<br>' + Math.abs(y) + '<br>');
document.write('<br>' + Math.abs(z) + '<br>');

document.write('<br>' + Math.round(x) + '<br>');
document.write('<br>' + Math.round(y) + '<br>');
document.write('<br>' + Math.round(z) + '<br>');

document.write('<br>' + Math.floor(x) + '<br>');
document.write('<br>' + Math.floor(y) + '<br>');
document.write('<br>' + Math.floor(z) + '<br>');

//potęgowanie

var p = Math.pow(2,10);
console.log(p);

//losowanie

var losuje = Math.random();
console.log(losuje);

var k = 3.88454875684;
k = k.toFixed(2);
document.write('<br>' + k + '<br>');


var q = 4.98324847;
q = q.toPrecision(2);
document.write('<br>' + q + '<br>');

console.log(typeof(q)); //string -> zamienia na tekst, nie użyjesz do jakichkolwiek obliczeń.


// losowanie cd
//losuj z przedziału od 0:10;

var l = Math.floor(Math.random() * 11);
console.log(l);

//losuj liczbę z przedziału od 90 do 100;

var xd = Math.floor(Math.random() * 11 + 90);
console.log(xd);


var elPi = document.getElementById('pi');
var elNic = document.getElementById('nic');
var elPrzycisk = document.getElementById('przycisk');
var elWynik = document.getElementById('wynik');

elPrzycisk.onclick = function (){
    if(elPi.checked == true) {
        elWynik.textContent = Math.PI;
    }else if(elNic.checked == true){
        elWynik.textContent = document.write('Wybrałeś radio button nic');
    }else{
        elWynik.textContent = document.write("Nic nie wybrałeś");
    }
}







































