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
            message : 'Hello Vue!',
            imageUrl: 'https://media.istockphoto.com/id/1292967541/it/foto/fioriere-da-balcone-lussureggianti-lungo-la-strada-che-guardano-verso-la-piazza-della-citt%C3%A0.jpg?s=612x612&w=0&k=20&c=sy9-weNYGfAMSpNrrHkpBFRpSEwWEP7wFVY_kFn7vUA=',
        }
    }
  }).mount('#app')