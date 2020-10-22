// Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no..I NUMERI INSERITI DALL'UTENTE SARANNO I FIORI
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.

var minesList = [];
var flowersList = [];
var numMines = 3;
var maxMines = 10;
var maxPoint = maxMines - numMines;

// genero da 1 a maxMines numeri
while ( minesList.length < numMines) {
    var randomMine = getRndInteger(1, maxMines);

    // verifico se la bomba è gia presente nell'array
    if (minesList.includes(randomMine) == false) {
    minesList.push(randomMine);
    }
}

console.log('lista mine :' + minesList);

var isMine = false;

do {
    // chiedo all'utente un numero alla volta
    var userChoise = parseInt(prompt('inserisci un numero'));

    // verifico che il numero dell'utente non sia presente tra le mine
    var isGameOver = isMineCheck(userChoise, minesList)

    // se presente il gioco finisce e si esce dal ciclo
    if (isGameOver == true) {

        isMine= true;
        alert('Hai beccato una mina e sei morto!\nIl tuo punteggio è : ' + flowersList.length);

    // se non è presente l'utente continua a inserire i numeri
    } else if (flowersList.includes(userChoise) == false) {

        flowersList.push(userChoise);

    } else {
        alert('duplicato');
    }


} while (isMine == false && flowersList.length < maxPoint); // se non rispettate(almeno una) finisce il gioco

if (flowersList.length == maxPoint) {
    alert('Hai vinto totalizzando ' + flowersList.length + ' punti!')
}


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function isMineCheck( choise, arrayMine ) {
    var mineCheck = false;

    if (arrayMine.includes(choise) == true){
        mineCheck = true;
    }
    return mineCheck;
}
