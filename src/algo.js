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

  numCard.addEventListener('input', () => {
    algorithmtValidateCard(numCard); // Función con argumento input 
    completeInput(numCard);
  });

  /* Algoritmo para verificar si es número de tarjeta valida */
  const algorithmtValidateCard = (inputnumCard) => {
    let cardNumber = inputnumCard.value;
    if (cardNumber.length === 16) {
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

  exp.addEventListener('input', () => {
    if (exp.value) {
      validateExp = true;
      activeButton();
    } else desactiveButton();
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    validateCardDetails();
    /*
    if (validateCardDetails(form)) {
      console.log('datos válido... enviar...');
    } else {
      console.log('datos inválidos');
    } */
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
  const validateCardDetails = () => {

  }
});