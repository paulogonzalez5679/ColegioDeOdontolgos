var firestore;
$(document).ready(function () {
  AOS.init({
    once: true
  });

  console.log('*** Cargando ***');
  var config = {
    apiKey: "AIzaSyBPqPck4HvVWkDcjn4aiPiEitqHVNUGNcA",
    authDomain: "paginaweb-5ab05.firebaseapp.com",
    projectId: "paginaweb-5ab05",
    storageBucket: "paginaweb-5ab05.appspot.com",
    messagingSenderId: "172608828499",
    appId: "1:172608828499:web:f179995a86cffa23df82a6"
  };

  firebase.initializeApp(config);
  firestore = firebase.firestore();
});

export function InitPaymentWhitPayphone(total, id, order_transaccion_id, user) {
  console.log(id.toString());
  console.log(total);
  console.log(total.toFixed(0));
  var totalAmount = total.toFixed(0);
  console.log(parseInt(totalAmount));
  payphone.Button({
      token: 'A1aBrrNGc1THO366NBPHRbBe-EXUDun8yx10teEjue_0pXqtl_sC8IOvXTDDPAzff0zCm4is3vm3NS_ghim_unz8EOjDl87lWSBMEuj1M2HOnyZvqur7BXI-cOxDUAo_1iJhqkOtaPjVqBHevpf_64as-lkRjrEZLum3IQWf10X6fcawC4W3BMwseYooynSroCYpfWZhfi-P3gWF0a1XglTP-3vYPKqkFdfb6OTvrUBGbkT0C1lPBCBYWM-tncRZGGMKo-SIbkzQjtDAJYNulWgUMNzQO3qb04zYR7SGaoaz_lZfrlbXiGqGO4WBU9x6hJv6Yg',
      btnHorizontal: true,
      btnCard: true,
      createOrder: function (actions) {
          return actions.prepare({
              amount: parseInt(totalAmount),
              amountWithoutTax: parseInt(totalAmount),
              currency: "USD",
              clientTransactionId: id
          });
      },
      onComplete: function (model, actions) {
          //Se confirma el pago realizado
          actions.confirm({
              id: model.id,
              clientTxId: model.clientTxId
          }).then(function (value) {
              console.log('*** Respuesta de payphone despues de pagar ***');
              console.log(value);
              // ***AQUI***
              var ref = firestore.collection("usuarios").doc(user['user_id']);
              ref.update(
                {
                  data_payment: value,
                }
              ).then(function () {
                  if (value.transactionStatus == "Approved") {
                      alert('Su pago ha sido procesado correctamente!');
                      window.location.assign("http://localhost:4200/");
                      // localStorage.removeItem("order");
                  } else {
                      alert('Se ha presentado un error: ' + value.transactionStatus + ': ' + value.message);
                  }
              }).catch(function (e) {
                  console.log(e);
              });
              return value;

          }).catch(function (err) {
              console.log('*** Respuesta ERROR de payphone despues de pagar ***');
              console.log(err);
              return '*** Respuesta de payphoone ***' + err;

          });
      }
  }).render('#pp-button');
}