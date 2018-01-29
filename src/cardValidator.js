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

  /*** Validaciones por cada elemento de formulario ***/

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
  const validateCardDetails = (cardNumber) => {
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

  cvv.addEventListener('input', () => {
    cvv.value = cvv.value.replace(/[^0-9]/g, '');
    if (cvv.value && cvv.value.length === 3) validateCvv = true;
    else validateCvv = false;
  });

  // Validar Nombre con mínimo 5 caracteres
  name.addEventListener('input', () => {
    name.value = name.value.replace(/^[a-zA-Z\s]*$/);
    if (name.value && name.value.length > 5) {
      validateName = true;
      submit.disabled = false;
    }
    else {
      validateName = false;
      submit.disabled = true;
    }
  });
});
