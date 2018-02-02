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
    tempnumCard = true;
    activeButton();
  } else {
    // return alert('Tarjeta inválida');
    desactiveButton();
  }
};

/* Función cantidad de digitos */
let countDigit = (input, length) => {
  let value = input.value;
  if (value.length > length) input.value = input.value.slice(0, length);
  if (value.length === length) {
    return true;
  } else return false;
};

/* Función aceptar solo números */
let typeInputNum = (input) => {
  input.value = input.value.replace(expNum, '');
};

/* Función aceptar solo números */
let typeInputString = (input) => {
  input.value = input.value.replace(expLet, '');
};

// FUNCIONES PARA AÑO Y MES
/* Función validaciones fecha de expiración */
let validateDateExpiration = (dateExp) => {
  typeInputNum(dateExp);
  countDigit(dateExp, 7);
  formatDateExp(dateExp);
};

let formatDateExp = (input) => {
  if (input.value == 2) { input.value = `${input.value}/`; }
};

let validateDateYear = (year) => {
  const date = new Date;
  year.value = year.value.replace(expNum, '');
  let thisYear = date.getFullYear();
  if (countDigit(year, 4) && year.value >= thisYear && year.value <= thisYear + 5) {
    tempYear = true;
    year.setAttribute('class', 'success');
  } else {
    year.setAttribute('class', 'error');
  }
};

let validateDateMonth = (month) => {
  const date = new Date;
  let thisMonth = date.getMonth();
  let thisYear = date.getFullYear();
  console.log(thisMonth);
  month.value = month.value.replace(expNum, '');
  if (countDigit(month, 2) && month.value > 0 && month.value < 13) {
    console.log('mes correcto');
    tempMonth = true;
    month.setAttribute('class', 'success');
  } else {
    console.log('mes incorrecto');
    month.setAttribute('class', 'error');
  }
  
};

/* Función validaciones CVV */
let validateCVV = (cvv) => {
  if (countDigit(cvv, 3)) {
    tempCvv = true;
    activeButton();
  } else desactiveButton();
  typeInputNum(cvv);
};

/* Función cantidad de digitos */
let countDigitName = (input, length) => {
  let value = input.value;
  if (value.length >= length) {
    return true;
  } else return false;
};

/* Función validaciones nombres */
let validateName = (name) => {
  typeInputString(name);
  if (countDigitName(name, 5)) {
    tempName = true;
    activeButton();
  } else desactiveButton();
};
/* Validar para habilitar boton */
let activeButton = () => {
  if (tempnumCard && tempCvv && tempName) {
    // button.disabled = false;
  };
};
/* Validar para no habilitar boton */
let desactiveButton = () => {
  // button.disabled = true;
};

let validateData = (numCard, cvv, name, year, month ) => {
  numCardValue = parseInt(numCard.value);
  cvvValue = parseInt(cvv.value);
  nameValue = name.value;
  let valdUser = data.filter((user) => user.number === numCardValue);
  if (valdUser.length) {
    if (valdUser[0].cvv === cvvValue && valdUser[0].name === nameValue) {
      alert('Tarjeta Valida y usuario correcto');
    }
    else alert('No coinciden los datos');
  } else alert('Tarjeta no Valida');
  cleanInput();
};

let cleanInput = () => {
  
}