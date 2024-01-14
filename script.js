window.onload = () =>
	{
		document.querySelector('#calculate').onclick = calculateGrams;
    document.querySelector('#calculate').onclick = calculateMl;
	}
  e= document.querySelector('#amount').value;
  let papertype = document.querySelector('#papertype').value;
  let service = document.querySelector('#services').value;

	console.log(service);
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}
