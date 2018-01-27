window.addEventListener('load', function() {
  const form = document.querySelector('form');
  let numCard = document.getElementById('cn');

  numCard.addEventListener('input', function() {
    numCard.value = numCard.value.replace(/[^0-9]/g, '');
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateCardDetails(numCard.value);
    /*
    if (validateCardDetails(form)) {
      console.log('datos válido... enviar...');
    } else {
      console.log('datos inválidos');
    } */
  });

  /* */
  function validateCardDetails(cardNumber) {
    let array = [];
    let size = cardNumber.length;
    let digit;
    let result = 0;
    for (let i = 0; i < size; i++) {
      array.push(parseInt(cardNumber[i]));
    }
     array.reverse();
    /* Aplicar fórmula del algoritmo de Luhn */
    for (let i = 0; i < size; i++) {
    if (i % 2 !== 0) {
      if (array[i] * 2 >= 10) {
        let d = parseInt(array[i] * 2 / 10);
        let r = array[i] * 2 % 10;
        digit = d + r;
      } else
        digit = array[i] * 2;
    } else
      digit = array[i];
    result += digit;
  }
  if (result % 10 === 0) {
    return alert('Tarjeta válida');
  } else {
    return alert('Tarjeta inválida');
  }
  }

  // Validar CVV de 3 dígitos
  var cvv = document.getElementById('cvv');
  var submit = document.getElementById('submit');
  var name = document.getElementById('name');
  var validateCvv = false;
  var validateName = false;

  cvv.addEventListener('input', function() {
    var cvv3 = cvv.value.length;
    if (cvv3 !== 3) {
      submit.disabled = true;
    } else {
      submit.disabled = false; 
    }   
  });

  // Validar Nombre con mínimo 5 caracteres
  name.addEventListener('input', function() {
    var nameval = name.value.length;
    if (nameval < 5) {
      submit.disabled = true;
    } else {
      submit.disabled = false; 
    }   
  });
});
