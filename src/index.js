window.addEventListener('load', () => {
  const form = document.querySelector('form');
  let numCard = document.getElementById('cn');
  let exp = document.getElementById('exp');
  let month = document.getElementById('month');
  let year = document.getElementById('year');
  let cvv = document.getElementById('cvv');
  let button = document.querySelector('input[type="submit"]');
  let name = document.getElementById('name');
  
  const expNum = /[^0-9]/g;
  const expLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;
  
  let validatenumCard = false;
  let validateExp = false;
  let validateYear = false;
  let validateMonth = false;
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

  year.addEventListener('input', () => {
    var date = new Date;
    console.log(date.getFullYear());
    var thisYear = date.getFullYear();
    if (year.value >= thisYear && year.value.length === 4) {
      validateYear = true;
      activeButton();
    } else desactiveButton();
  });

  month.addEventListener('input', () => {
    console.log(month.value);
    if (month.value > 0 && month.value < 13 && month.value.length === 2 && validateYear) {
      activeButton();
    } else desactiveButton();
  });

  
  cvv.addEventListener('input', () => {
    cvv.value = cvv.value.replace(expNum, '');
    console.log(cvv.value);
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
  function activeButton() {
    if (validateYear && validateCvv && validateName && validatenumCard) {
      button.disabled = false;
    };
  };
    
  const desactiveButton = () => {
    button.disabled = true;
  };
});
  