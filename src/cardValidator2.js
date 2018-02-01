window.addEventListener('load', () => {

  const expNum = /[^0-9]/g;
  const expLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;

  let validatenumCard = false;
  let validateExp = false;
  let validateYear = false;
  let validateMonth = false;
  let validateCvv = false;
  let validateName = false;

  /** Validaciones de cantidad de  **/
  function validateCount(count) {
  };

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
          let divider = parseInt(array[i] * 2 / 10);
          let residue = array[i] * 2 % 10;
          digit = divider + residue;
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
  };

  /*  */
  const completeInput = (input) => {
    let numCardValue = input.value;
    numCardValue = numCardValue.replace(expNum, '');
    if (numCardValue.length === 16) {
      validatenumCard = true;
      activeButton();
    } else desactiveButton();
  };

  numCard.addEventListener('input', () => {
    numCard.value = numCard.value.replace(expNum, '');
    if (numCard.value) {
      validatenumCard = true;
      activeButton();
      numCard.setAttribute('class', 'success');
    } else {
      desactiveButton();
      numCard.setAttribute('class', 'error');
    }
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



  // Validar año de expiración long 4, sólo num, máx 5 años posteriores
  year.addEventListener('input', () => {
    const date = new Date;
    console.log(date.getFullYear());
    year.value = year.value.replace(expNum, '');
    let thisYear = date.getFullYear();
    if (year.value >= thisYear && year.value <= thisYear + 5 && year.value.length === 4) {
      validateYear = true;
      activeButton();
      year.setAttribute('class', 'success');
    } else {
      desactiveButton();
      year.setAttribute('class', 'error');
    }
  });

  // Validar mes de expiración long 2, sólo num
  month.addEventListener('input', () => {
    month.value = month.value.replace(expNum, '');
    console.log(month.value);
    if (month.value > 0 && month.value < 13 && month.value.length === 2 && validateYear) {
      validateMonth = true;
      activeButton();
      month.setAttribute('class', 'success');
    } else {
      desactiveButton();
      month.setAttribute('class', 'error');
    }
  });

  // Validar cód de verificación sólo num y long 3 
  cvv.addEventListener('input', () => {
    cvv.value = cvv.value.replace(expNum, '');
    console.log(cvv.value);
    if (cvv.value && cvv.value.length === 3) {
      validateCvv = true;
      activeButton();
      cvv.setAttribute('class', 'success');
    } else {
      desactiveButton();
      cvv.setAttribute('class', 'error');
    }
  });

  // Validar Nombre con mínimo 5 caracteres
  name.addEventListener('input', () => {
    name.value = name.value.replace(expLet, '');
    if (name.value && name.value.length > 5) {
      validateName = true;
      activeButton();
      name.setAttribute('class', 'success');
    } else {
      desactiveButton();
      name.setAttribute('class', 'error');
    }
  });

  /* Validar para habilitar boton */
  const activeButton = () => {
    if (validateYear && validateCvv && validateName && validatenumCard && validateMonth) {
      button.disabled = false;
    };
  };

  const desactiveButton = () => {
    button.disabled = true;
  };
});
