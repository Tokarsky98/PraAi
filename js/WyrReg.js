//wyrażenia regularne

/*var text = 'Zespół Szkół Komunikacji';
var regex = /Szkół/; //true
var sprawdz = regex.test(text);
console.log(sprawdz);

var text1 = 'Technik informatyk';
/*var regex1 = /informatyk/; //true
var regex1 = /^informatyk/; //false*/
//var regex1 = /Tech[a-z]?/;
//var regex1 = /Tech[a-z]{1,2}/;
//var regex1 = /Tech[a-z\s]{1,3}/;
//var regex1 = /[a-z]+/g;
//var regex1 = /[a-z]+/gi;
/*var sprawdz1 = regex1.test(text1);
console.log(sprawdz1);*/*/

//kod pocztowy


var elWynik = document.getElementById('wynik');
var elPrzycisk = document.getElementById('przycisk');

elPrzycisk.onclick = function(){
    var regex2 = /[0-9]{2}-[0-9]{3}/;
    var elKod = document.getElementById('kod');
    var sprawdzenie = regex2.test(elKod.value);
    if(sprawdzenie == true){
        elWynik.style.color = 'green';
        elWynik.textContent = 'Pasuje';

    }else{
        elWynik.style.color = 'red';
        elWynik.textContent = 'Nie jest ok';
    }
}

















