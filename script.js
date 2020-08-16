
function update() {
  
  let bill = Number(document.getElementById('yourBill').value);
  let tipPercent = document.getElementById('tipInput').value;
  let split = document.getElementById('splitInput').value;
  // console.log({bill, tipPercent, split});

  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;
  // console.log(newBillEach);

  document.getElementById('tipPercent').innerHTML = tipPercent + '%';
  document.getElementById('tipValue').innerHTML = tipValue;
  document.getElementById('totalWithTip').innerHTML = bill + tipValue;
  document.getElementById('splitValue').innerHTML = split + ' person';
  document.getElementById('billEach').innerHTML = newBillEach;
  document.getElementById('tipEach').innerHTML = tipEach;
  

  


}

let container = document.getElementById('container');
container.addEventListener('input', update);