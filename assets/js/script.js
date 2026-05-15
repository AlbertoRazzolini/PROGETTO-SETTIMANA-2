/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questo blocco.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- Workflow consigliato: prima costruisci la Versione Base in HTML/CSS,
  poi torna qui per la Versione Intermedia (generazione griglia da array di prodotti)
  e per la Versione Avanzata (filtri, ordinamento, carrello dinamico, localStorage).
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato in settimana.
*/

/* VERSIONE INTERMEDIA — array prodotti
   Crea l'array "prodotti" con almeno 12 oggetti.
   Ogni oggetto: nome, categoria, prezzo, rating (1-5), immagine, disponibile.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = [
  {
    nome: "Cuffie wireless",
    categoria: "elettronica",
    prezzo: 90,
    rating: 4.2,
    immagine: "Cuffie",
    disponibile: true,
  },
  {
    nome: "Tablet 32gb",
    categoria: "elettronica",
    prezzo: 200,
    rating: 4.7,
    immagine: "Tablet",
    disponibile: true,
  },
  {
    nome: "Libri liberi",
    categoria: "libri",
    prezzo: 15,
    rating: 4.0,
    immagine: "Libro",
    disponibile: true,
  },
  {
    nome: "Zaino da trekking",
    categoria: "abbigliamento",
    prezzo: 50,
    rating: 4.3,
    immagine: "Zaino",
    disponibile: false,
  },
  {
    nome: "Lampada LED",
    categoria: "casa",
    prezzo: 29,
    rating: 3.8,
    immagine: "Lampada",
    disponibile: false,
  },
  {
    nome: "Smartwatch GPS",
    categoria: "elettronica",
    prezzo: 119,
    rating: 4.4,
    immagine: "Smartwatch",
    disponibile: true,
  },
  {
    nome: "Mouse wireless",
    categoria: "elettronica",
    prezzo: 25,
    rating: 4.1,
    immagine: "Mouse",
    disponibile: true,
  },
  {
    nome: "Moka",
    categoria: "casa",
    prezzo: 22,
    rating: 4.6,
    immagine: "Caffettiera",
    disponibile: true,
  },
  {
    nome: "Romanzo storico",
    categoria: "libri",
    prezzo: 13,
    rating: 4.5,
    immagine: "Romanzo",
    disponibile: false,
  },
  {
    nome: "Giacca invernale",
    categoria: "abbigliamento",
    prezzo: 89,
    rating: 4.2,
    immagine: "Giacca",
    disponibile: false,
  },
  {
    nome: "Aspirapolvere Dayson",
    categoria: "casa",
    prezzo: 249,
    rating: 4.8,
    immagine: "Aspirapolvere",
    disponibile: true,
  },
  {
    nome: "Tastiera meccanica",
    categoria: "elettronica",
    prezzo: 79,
    rating: 4.3,
    immagine: "Tastiera",
    disponibile: false,
  },
];
/* VERSIONE INTERMEDIA — formattaPrezzo(prezzo)
   Funzione che ritorna una stringa tipo "€ 19,99".
   Esempio in console.log: Monitor: € 150,00
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function formattaPrezzo(prezzo) {
  return prezzo + "€";
}
console.log(formattaPrezzo(150));
/* VERSIONE INTERMEDIA — stelline(rating)
   Funzione che ritorna una stringa di stelline piene/vuote.
   Esempio: rating 3 → "★★★☆☆"
   Esempio in console.log: Monitor: rating 3 → "★★★☆☆"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function stelline(rating) {
  let stelle = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stelle = stelle + "★";
    } else {
      stelle = stelle + "☆";
    }
  }
  return stelle;
}
console.log(stelline(3));
/* VERSIONE INTERMEDIA — Filtro per categoria
   Funzione che riceve il parametro categoria e filtra l'array prodotti mostrando solo i prodotti della categoria ricevuta
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtroProdotti(categoria) {
  let prodottiMostrati = [];
  for (let i = 0; i < prodotti.length; i++) {
    if (prodotti[i].categoria === categoria) {
      prodottiMostrati.push(prodotti[i]);
    }
  }
  return prodottiMostrati;
}
console.log(filtroProdotti("casa"));
/* VERSIONE INTERMEDIA — Filtro disponibilità e rating
   Funzione che genera un array filtrato dall'array prodotti, mostrando soltanto i prodotti disponibili con rating >= 3
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* --------------------------------------------------------------

/* VERSIONE AVANZATA — renderProdotti(lista)
   Funzione che, dato un array di prodotti, genera la griglia nel DOM.
   Niente HTML hard-coded per i prodotti: tutto generato dal JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Aggiungi al carrello
   Quando si clicca il bottone "Aggiungi al carrello", incrementa il contatore
   nell'header (Carrello (0) → Carrello (1) → ...).
   Per i prodotti esauriti: bottone disabilitato e testo "Esaurito".
   Suggerimento: usa una closure come visto in aula
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Ordinamento
   Menu a tendina con: Nome prodotto, Prezzo crescente, Prezzo decrescente, Rating.
   Suggerimento: per rendere più leggibile la select puoi usare optgroup
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — Riepilogo carrello
   Pagina carrello con elenco prodotti aggiunti, totale, bottone "Svuota".
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* VERSIONE AVANZATA — localStorage
   Il carrello sopravvive al refresh della pagina.
   Concetto da scoprire: localStorage.setItem / localStorage.getItem.
*/
