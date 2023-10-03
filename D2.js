/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let a = 20;
let b = 10;

if (a > b) {
  console.log(a + " è > di " + b); }
  else if  (b > a) {
    console.log(b + " è > di " + a);
  }


/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let c = 3;

if (c !== 5){
  console.log(c + " is not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let d = 25;

if(d % 5 === 0){
  console.log(d + " è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let e = 24
let f = 16

if(e === 8 || f === 8 || e + f === 8 || e - f === 8) {
  console.log("numeri validi")
} else {
  console.log("numeri non validi")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const cartTotal = 51;
const shippingCosts = cartTotal > 50 ? 0 : 10;

if (cartTotal > 50) {
  console.log("Spedizione gratuita");
} else {
  console.log("Spedizione a pagamento");
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const cartTotalDiscounted = 25;

if (cartTotal - cartTotalDiscounted > 50) {
  console.log("Spedizione gratuita");
} else {
  console.log("Spedizione a pagamento");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let x = 4;
let y = 2;
let z = 9;

/*if (x>y && x>z)
{
        if (y>z)
        {
            console.log(x + ", " + y + ", " +z);
        }
        else
        {
            console.log(x + ", " + z + ", " +y);
        }
}
else if (y>x && y >z)
{
        if (x>z)
        {
             console.log(y + ", " + x + ", " +z);
        }
        else
        {
             console.log(y + ", " + z + ", " +x);
        }
}
else if (z>x && z>y)
{
        if (x>y)
        {
            console.log(z + ", " + x + ", " +y);
        }
        else
        {
            console.log(z + ", " + y + ", " +x);
        }
}   */

//OPPURE

if (x>y && x>z && y>z){
  console.log(x + ", " + y + ", " +z);
}
else if (x>y && x>z && z>y){
  console.log(x + ", " + z + ", " +y);
}
else if (y>x && y>z && x>z){
  console.log(y + ", " + x + ", " +z);
}
else if (y>x && y>z && z>x){
  console.log(y + ", " + z + ", " +x);
}
else if (z>x && z>y && x>y){
  console.log(z + ", " + x + ", " +y);
}
else if (z>x && z>y && y>x){
  console.log(z + ", " + y + ", " +x);
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let g = 13;

if (typeof g === "number") {
  console.log("è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let v = 30;

if (v % 2 === 0) {
  console.log("è pari");
} else {
  console.log("è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7;

if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName;


/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const numbers = [];

numbers.unshift(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(numbers);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

numbers.pop();
numbers.push(100);
console.log(numbers);
