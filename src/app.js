window.addEventListener('load', () => {
  const form = document.querySelector('form');
  let numCard = document.getElementById('cn');
  /* let exp = document.getElementById('exp'); */
  let month = document.getElementById('month');
  let year = document.getElementById('year');
  let cvv = document.getElementById('cvv');
  let button = document.querySelector('input[type="submit"]');
  let name = document.getElementById('name');

  numCard.addEventListener('input', () => {
    validateCardDetails(numCard);
  });

  /*
  exp.addEventListener('input', () => {
    validateDateExpiration(exp);
  });*/

  // Validar año de expiración long 4, sólo num, máx 5 años posteriores
  year.addEventListener('input', () => {
    letValidateDateYear(year);
  });

  // Validar mes de expiración long 2, sólo num
  month.addEventListener('input', () => {
    letValidateDateMoth(month);
  });

  cvv.addEventListener('input', () => {
    validateCVV(cvv);
  });

  name.addEventListener('input', () => {
    validateName(name);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateData(numCard, cvv, name);
  });

});