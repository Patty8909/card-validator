const expNum = /[^0-9]/g;
const expLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;

let tempNumCard = false;
let tempExp = false;
let tempYear = false;
let tempMonth = false;
let tempCvv = false;
let tempName = false;

/* Función validaciones número de tarjeta */
let validateCardDetails = (cardNumber) => {
  typeInputNum(cardNumber);
  if (countDigit(cardNumber, 16)) algorithmtValidateCard(cardNumber);
};

/* Función para validar número de tarjeta con algoritmo de Luhn*/
let algorithmtValidateCard = (cardNumber) => {
  let array = [];
  let size = cardNumber.length;
  let digit;
  let result = 0;
  for (let i = 0; i < size; i++) {
    array.push(parseInt(cardNumber[i]));
  }
  array.reverse();

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
    // return alert('Tarjeta válida');
    validatenumCard = true;
    activeButton();
  } else {
    // return alert('Tarjeta inválida');
    desactiveButton();
  }
};

/* Función cantidad de digitos */
let countDigit = (input, length) => {
  let value = input.value;
  if (value.length === length) return true;
  else return false;
};

/* Función aceptar solo números */
let typeInputNum = (input) => {
  input.value = input.value.replace(expNum, '');
};

/* Función aceptar solo números */
let typeInputString = (input) => {
  input.value = input.value.replace(expLet, '');
};

// FUNCIONES PARA AÑO Y MES O UNA SOLA
/* Función validaciones fecha de expiración */
let validateDateExpiration = (dateExp) => {
  typeInputNum(dateExp);
};

/* Función validaciones CVV */
let validateCVV = (cvv) => {
  countDigit(cvv, 3);
  typeInputNum(cvv);
};

/* Función validaciones nombres */
let validateName = (name) => {
  typeInputString(name);
  countDigit(name, 5);
};
/* Validar para habilitar boton */
let activeButton = () => {
  if (tempYear && tempCvv && tempName && tempnumCard && tempMonth) {
    button.disabled = false;
  };
};
/* Validar para no habilitar boton */
let desactiveButton = () => {
  button.disabled = true;
};

let validateData = (numCard, cvv, name) => {
  numCardValue = parseInt(numCard.value);
  cvvValue = parseInt(cvv.value);
  nameValue = name.value;
  let valdUser = data.filter((user) => user.number===numCardValue);
  console.log(valdUser);
};