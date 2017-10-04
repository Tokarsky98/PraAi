/*var ourTable = [];
ourTable[0] = ['Marcin','183'];
ourTable[1] = ['Ania','180'];

document.write('imię: ' + ourTable[0][0] + ', wzrost: ' + ourTable[1][1]);*/

var ourTable = ['Marcin','Mateusz','Tomek'];

for (var i=0;i<ourTable.length; i++) {
    document.write('Imię numer '+i+ ':'+ourTable[i]);
}
