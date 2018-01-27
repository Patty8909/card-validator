window.addEventListener('load', () => {
  const form = document.querySelector('form');
  let numCard = document.getElementById('cn');
  let exp = document.getElementById('exp');
  let cvv = document.getElementById('cvv');
  let submit = document.getElementById('submit');
  let name = document.getElementById('name');
  let validatenumCard = false;
  let validateExp = false;
  let validateCvv = false;
  let validateName = false;

  numCard.addEventListener('input', () => {
    numCard.value = numCard.value.replace(/[^0-9]/g, '');
    if (numCard.value) validatenumCard = true;
    else validatenumCard = false;
  });

  exp.addEventListener('input', () => {
    if (exp.value) validateExp = true;
    else validateExp = false;
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

  /* Función para validar número de tarjeta */
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

  cvv.addEventListener('input', function () {
    var cvv3 = cvv.value.length;
    if (cvv3 !== 3) {
      submit.disabled = true;
    } else {
      submit.disabled = false;
    }
  });

  // Validar Nombre con mínimo 5 caracteres
  name.addEventListener('input', function () {
    var nameval = name.value.length;
    if (nameval < 5) {
      submit.disabled = true;
    } else {
      submit.disabled = false;
    }
  });
});
