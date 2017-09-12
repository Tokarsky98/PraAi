var imie;
imie = "Mateusz";
var nazwisko = 'Kowal';
var wiek = 19;
console.log("Wiek: " + wiek);
document.write("Twoje imię to: " + imie + "<br>");
document.write("Twoje nazwisko to: " + nazwisko);

var x, y;
x = 10;
y = 5;
var wynik = x + y;
alert("Wynik= " + wynik);

x = 20;
y = 5;
var suma = x + y; //22
var odejmowanie = x - y; //18
var mnożenie = x * y;
var dzielenie = x / y;
var modulo = x % y;
//alert(modulo);

var a = 10, b = "3a";
alert(a + b); //103a

console.log(typeof(a)); //number
console.log(typeof(b)); //string
console.log(a + (a % 3) - 10); //1

//systemy liczbowe

var c = 10; //l w systemie 10
var d = 0100; //oktalny
var e = 0x10; //hexadecymalny

console.log(c); //10
console.log(d); //64
console.log(e); //16

console.trace(); //wskazuje źródło pliku

var _zmienna = 1; //podłoga na początku zmiennej może byc a cyfra nie, "syntax error", rozpoznaje wielkość liter
var _zmienna = 1;
console.log(_zmienna);
//console.log(_Zmienna); rozpoznaje wilekość liter "is not defined"

var f = 2.5; //zawsze kropka!@!
console.log(f);

//typy danych
var prawda = true;
console.log(typeof(prawda)); //boolean

var tekst = "tekst";
console.log(typeof(tekst)); //string

var inna = null;
console.log(typeof(inna)); //obiekt


var tab = ["jeden", "dwa"];
console.log(tab); //tablica, jak rozwiniesz to masz ściągę xde

//document.write("Tablica: " + tab);



/*var podajg = prompt("Podaj zmienną g");
console.log(typeof(podajg)); //zmienna podawana z klawiatury -> to jest string przy typeofie, nie podawać literek, WYSKOCZY NaN

podajg = parseInt(podajg); //zmienia typ zmiennej */

var podajLiczbeRzeczywistą = prompt("Podaj l. rzeczywistą", "np. 3.5"); //tak sie zapisuje pierwsza mała reszta duże

console.log(podajLiczbeRzeczywistą); //wyświetla 3.5, wyświetli 3,5, ale przy 3,5 => 3

var liczba = 5;
var tekst = "a";
var przerwa = " ";
var wynik = typeof(liczba +tekst);
console.log(wynik); //string a co tam 

var imie = "Karol";
var nazwisko = "Nowak";
//var dane = imie + " " + nazwisko;
//var blok = document.getElementById("wynik"); //obiekt o nazwie blok -> do diva z html
// blok.innerHTML = dane; pierwszy sposób
//blok.textContent = dane; //bardziej profesjonalny


/*var podajimie = prompt("Podaj imie");
var dane = podajimie;
var cos = document.getElementById("zadanie");
cos.innerHTML = dane; */

/*var herbata = prompt("Jaką herbatę najczęściej pijesz? ");
var cos = document.getElementById("herbatka");
cos.innerHTML = herbata; */





var imie = prompt("Podaj swoje imię: ");
var dane = document.getElementById("wdomu");
dane.innerHTML = imie;









































































































