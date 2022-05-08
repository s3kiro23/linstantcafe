// // Link CV

// function monBoutonClic() {
//     alert("Attention, vous allez être renvoyé vers une autre page !");
//     console.log("redirection réussi !");
//   }

// // Link bouton pulse assistance

// function buttonPulse(){
//     window.location="contact.html"
//     console.log("redirection page contact réussi");
// }

$('.form-js-label').find('input').on('input', function (e) {
    $(e.currentTarget).attr('data-empty', !e.currentTarget.value);
  });