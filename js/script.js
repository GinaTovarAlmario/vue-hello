/**
 * Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */


// controllo che veda il mio script.js
console.log('Js ok');
// ho fatto un file a parte per le mie funzioni faccio il controllo
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
  });

  const {createApp} = Vue;

  createApp({
    data(){
        return {
            message : 'Hello Vue!'
        }
    }
  }).mount('#app')