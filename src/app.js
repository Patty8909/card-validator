window.addEventListener('load', () => {
  const form = document.querySelector('form');
  let numCard = document.getElementById('cn');
  let exp = document.getElementById('exp');
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
  }); */

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