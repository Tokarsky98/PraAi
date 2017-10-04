var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elData = document.getElementById('data');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elKomunikat = document.getElementById('komunikaty');

elKomunikat.style.color = 'red';
var regImie = /^[a-ząęśćłóżź]{2,13}$/i; //dodajemy wyr dla imienia

function sprawdzImie(){ //wywołanie reg'u dla pola
     if (regImie.test(elImie.value)){
    elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent  ='Błędne imię';
        elImie.focus();
    }
}

var regNazwisko = /^[a-ząęśćóńł]{2,20}(\-[a-ząęćśłń]{2,20})?$/i; //to albo to, znak zapytania za nawiasem powoduje że to co przed nim w grupie "()" może być ale nie musi

function sprawdzNazwisko(){
     if (regNazwisko.test(elNazwisko.value)){
    elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent  ='Błędne nazwisko';
        elNazwisko.focus();
    }
}

var regLogin =/^([a-z0-9]{1}|\w|\.|\-){3,25}([a-z0-9]{1})$/i;

function sprawdzLogin(){
     if (regLogin.test(elLogin.value)){
    elKomunikat.textContent = '';
    }else{
        elKomunikat.textContent  ='Błędny login';
        elLogin.focus();
    }
}

/*var regEmail = /^[a-z0-9]{6,30}\.[a-z0-9@]{6,30}|([a-z.]{2,3})?\.[a-z]{2,3}|[a-z0-9]{6,30}[a-z0-9@.]{6,30}\.[a-z]{2,3}|([a-z.]{2,3})?/;*/
var regEmail = /^[a-z]$/; //Uzupełnij Maila!



function sprawdzMail(){
     if (elMail1.value != elMail2.value){
        elMail2.disabled = false;
        elMail1.focus();

    }else{
        this.disabled=true;
        elKomunikat.textContent = ''; //jeśli ok to mam blokadę tych 2 pól i pusty komunikat.


    }
}

function blokuj(){
   var sprawdz = regEmail.test(elMail1.value);
    if (sprawdz){
         elMail2.disabled = false; //drugie pole nie zablokowane
    this.disabled = true; //cos tam na drugim sie zatrzymuje do poprawienia.
    elMail2.focus();
        elKomunikat.textContent = "";
    }else{
        elKomunikat.textContent = "coś źle";
        elMail1.focus();
    }

}

//bezpieczne hasło, małe i duże litery cyfry znak specjalny

var regPass = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W\_]).{8,35})$/; //ten znak musi byc z tej grupy(to dziwne na początku).

function haslo(){
    if (elPass1.value != elPass2.value){
        elKomunikat.textContent = 'Hasła są rózne';
        elPass2.focus();
    }else {
        this.disabled=true;
        elKomunikat.textContent='';
    }
}


function blokujPass(){
  var sprawdz = regPass.test(elPass1.value);
      if(sprawdz){
      elPass2.disabled = false;
      elPass2.focus();
      this.disabled = true;
  }else {
      elKomunikat.textContent = 'Hasło nie spełnia wymagań';
  }
}

function sprawdzRegulamin(){
    if(elRegulamin.checked){
        elPrzycisk.disabled = false;
    }else {
        elPrzycisk.disabled = true;
    }

}

function odblokuj(){
    var zablokowane = document.getElementsByTagName('input');
    if (zablokowane.length > 0){
        for (var i=0;i<zablokowane.length;i++){
            if(zablokowane[i].disabled == true)
                zablokowane[i].disabled = false;

        }
        //console.log(zablokowane);
    }
}


function wyslij1(){
    var puste =0;
    var x = document.getElementsByTagName('input');
    for (var i=0;i<x.length;i++){
        if (x[i].value=='')
            puste++;
    }

    if (puste){
        elKomunikat.textContent = 'Masz puste pole';
    }
    else{

    document.write('<div>');
    document.write('Imię: '+ elImie.value+'<br>');
    document.write('Nazwisko: '+ elNazwisko.value+'<br>');
    document.write('Login: '+ elLogin.value+'<br>');
    document.write('Mail: '+ elMail1.value+'<br>');
    document.write('Data Urodzenia: '+ elData.value+'<br>');
    document.write('</div>');

    }
}


elImie.addEventListener('blur',sprawdzImie);
elNazwisko.addEventListener('blur',sprawdzNazwisko);
elLogin.addEventListener('blur',sprawdzLogin);
elMail2.addEventListener('blur',sprawdzMail);
elMail1.addEventListener('blur',blokuj);
elPass2.addEventListener('blur',haslo);
elPass1.addEventListener('blur',blokujPass);
elRegulamin.addEventListener('change',sprawdzRegulamin);
elPopraw.addEventListener('click',odblokuj);
elPrzycisk.addEventListener('click',wyslij1);

//ZAD DOM
//Przy haśle wyświetl czy hasło jest słabe, dobre czy silne. Wyświetlenie ma być obrazkiem. Kolor zielony - silne hasło, Kolor pomarańczowy - dobre hasło, czerwone - słabe hasło.

//Słabe hasło to male litery
//Średnie hasło male duże cyfry
//Silne haslo male duze cyfry znaki






























