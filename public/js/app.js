'use strict';

window.addEventListener('load', function () {
  var form = document.querySelector('form');
  var numCard = document.getElementById('cn');
  /* let exp = document.getElementById('exp'); */
  var month = document.getElementById('month');
  var year = document.getElementById('year');
  var cvv = document.getElementById('cvv');
  var button = document.querySelector('input[type="submit"]');
  var name = document.getElementById('name');

  numCard.addEventListener('input', function () {
    validateCardDetails(numCard);
  });

  /*
  exp.addEventListener('input', () => {
    validateDateExpiration(exp);
  });*/

  // Validar año de expiración long 4, sólo num, máx 5 años posteriores
  year.addEventListener('input', function () {
    letValidateDateYear(year);
  });

  // Validar mes de expiración long 2, sólo num
  month.addEventListener('input', function () {
    letValidateDateMoth(month);
  });

  cvv.addEventListener('input', function () {
    validateCVV(cvv);
  });

  name.addEventListener('input', function () {
    validateName(name);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    validateData(numCard, cvv, name);
  });
});