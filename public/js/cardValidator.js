window.addEventListener('load', () => {
  const form = document.querySelector('form');
  let numCard = document.getElementById('cn');
  let exp = document.getElementById('exp');
  let cvv = document.getElementById('cvv');
  let button = document.querySelector('input[type="submit"]');
  let name = document.getElementById('name');

  const expNum = /[^0-9]/g;
  const expLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;

  let validatenumCard = false;
  let validateExp = false;
  let validateCvv = false;
  let validateName = false;

  /** Validaciones por cada elemento de formulario **/

  numCard.addEventListener('input', () => {
    numCard.value = numCard.value.replace(expNum, '');
    if (numCard.value) {
      validatenumCard = true;
      activeButton();
    } else desactiveButton();
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

  exp.addEventListener('input', () => {
    if (exp.value) {
      validateExp = true;
      activeButton();
    } else desactiveButton();
  });

  cvv.addEventListener('input', () => {
    cvv.value = cvv.value.replace(expNum, '');
    if (cvv.value && cvv.value.length === 3) {
      validateCvv = true;
      activeButton();
    } else desactiveButton();
  });

  // Validar Nombre con mínimo 5 caracteres
  name.addEventListener('input', () => {
    name.value = name.value.replace(expLet, '');
    if (name.value && name.value.length > 5) {
      validateName = true;
      activeButton();
    } else desactiveButton();
  });

  /* Validar para habilitar boton */
  const activeButton = () => {
    if (validatenumCard && validateExp && validateCvv && validateName)
      button.disabled = false;
  }
  
  const desactiveButton = () => {
    button.disabled = true;
  }
});
