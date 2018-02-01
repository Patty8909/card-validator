'use strict';

var expNum = /[^0-9]/g;
var expLet = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;

var tempNumCard = false;
var tempExp = false;
var tempYear = false;
var tempMonth = false;
var tempCvv = false;
var tempName = false;

/* Función validaciones número de tarjeta */
var validateCardDetails = function validateCardDetails(cardNumber) {
  typeInputNum(cardNumber);
  if (countDigit(cardNumber, 16)) algorithmtValidateCard(cardNumber);
};

/* Función para validar número de tarjeta con algoritmo de Luhn*/
var algorithmtValidateCard = function algorithmtValidateCard(cardNumber) {
  var array = [];
  var size = cardNumber.length;
  var digit = void 0;
  var result = 0;
  for (var i = 0; i < size; i++) {
    array.push(parseInt(cardNumber[i]));
  }
  array.reverse();

  for (var _i = 0; _i < size; _i++) {
    if (_i % 2 !== 0) {
      if (array[_i] * 2 >= 10) {
        var divider = parseInt(array[_i] * 2 / 10);
        var residue = array[_i] * 2 % 10;
        digit = divider + residue;
      } else digit = array[_i] * 2;
    } else digit = array[_i];
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
var countDigit = function countDigit(input, length) {
  var value = input.value;
  if (value.length > length) input.value = input.value.slice(0, length);
  if (value.length === length) {
    return true;
  } else return false;
};

/* Función aceptar solo números */
var typeInputNum = function typeInputNum(input) {
  input.value = input.value.replace(expNum, '');
};

/* Función aceptar solo números */
var typeInputString = function typeInputString(input) {
  input.value = input.value.replace(expLet, '');
};

// FUNCIONES PARA AÑO Y MES
/* Función validaciones fecha de expiración */
var validateDateExpiration = function validateDateExpiration(dateExp) {
  typeInputNum(dateExp);
  countDigit(dateExp, 7);
  formatDateExp(dateExp);
};

var formatDateExp = function formatDateExp(input) {
  if (input.value == 2) {
    input.value = input.value + '/';
  }
};

letValidateDateYear = function letValidateDateYear(year) {
  var date = new Date();
  year.value = year.value.replace(expNum, '');
  var thisYear = date.getFullYear();
  if (year.value >= thisYear && year.value <= thisYear + 5 && year.value.length === 4) {
    tempYear = true;
    year.setAttribute('class', 'success');
  } else {
    year.setAttribute('class', 'error');
  }
};

letValidateDateMoth = function letValidateDateMoth(moth) {

  month.value = month.value.replace(expNum, '');
  if (month.value > 0 && month.value < 13 && month.value.length === 2 && tempYear) {
    tempMonth = true;
    month.setAttribute('class', 'success');
  } else {
    month.setAttribute('class', 'error');
  }
};

/* Función validaciones CVV */
var validateCVV = function validateCVV(cvv) {
  if (countDigit(cvv, 3)) {
    tempCvv = true;
    activeButton();
  } else desactiveButton();
  typeInputNum(cvv);
};

/* Función cantidad de digitos */
var countDigitName = function countDigitName(input, length) {
  var value = input.value;
  if (value.length >= length) {
    return true;
  } else return false;
};

/* Función validaciones nombres */
var validateName = function validateName(name) {
  typeInputString(name);
  if (countDigitName(name, 5)) {
    tempName = true;
    activeButton();
  } else desactiveButton();
};
/* Validar para habilitar boton */
var activeButton = function activeButton() {
  if (tempnumCard && tempCvv && tempName) {
    // button.disabled = false;
  };
};
/* Validar para no habilitar boton */
var desactiveButton = function desactiveButton() {
  // button.disabled = true;
};

var validateData = function validateData(numCard, cvv, name) {
  numCardValue = parseInt(numCard.value);
  cvvValue = parseInt(cvv.value);
  nameValue = name.value;
  var valdUser = data.filter(function (user) {
    return user.number === numCardValue;
  });
  if (valdUser.length) {
    if (valdUser[0].cvv === cvvValue && valdUser[0].name === nameValue) {
      alert('Tarjeta Valida y usuario correcto');
    } else alert('No coinciden los datos');
  } else alert('Tarjeta no Valida');
  cleanInput();
};

var cleanInput = function cleanInput() {};