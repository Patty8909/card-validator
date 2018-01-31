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
		validateCardDetails();
	});

	form.addEventListener('submit', (e) => {
    	e.preventDefault();
	});

	cvv.addEventListener('input', () => { });

	name.addEventListener('input', () => { });

  });