function update() {
  let bill = parseFloat(document.getElementById('yourBill').value);
  let tipPercent = parseFloat(document.getElementById('tipInput').value);
  let split = parseInt(document.getElementById('splitInput').value);

  let tipValue = bill * (tipPercent / 100);
  let billTotal = bill + tipValue;
  let billEach = billTotal / split;

 document.getElementById('tipPercent').innerHTML = tipPercent + '%';
 document.getElementById('tipValue').innerHTML = '$' + tipValue.toFixed(2);
 document.getElementById('totalWithTip').innerHTML = '$' + billTotal.toFixed(2);
  document.getElementById('splitNumber').innerHTML = split; 
  document.getElementById('billEach').innerHTML = '$' + billEach.toFixed(2);
}

function splitNumber() {
  let split = document.getElementById('splitInput').value;
  let splitSpan = document.getElementById('splitNumber');
  splitSpan.innerHTML = split;
}