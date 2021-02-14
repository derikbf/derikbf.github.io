function calcular1() {
  var num1 = window.document.getElementById('textn1');
  var num2 = window.document.getElementById('textn2');
  var res = window.document.getElementById('rescalc');
  var resdet1 = window.document.getElementById('resdet1');
  if (num1.value.length == 0) {
    res.innerHTML = 'Informe o <strong>primeiro</strong> valor.</br>';
  } else if (num2.value.length == 0) {
    res.innerHTML = 'Informe o <strong>segundo</strong> valor.</br>';
  } else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    res.innerHTML = ''; 
    var calc = n2 * (n1 / 100);
    var c1 = calc.toFixed(2);
    res.innerHTML += `<strong></strong> ${c1}`;
  }
}

function resdetalhado1() {
  var x = document.getElementById('exibir');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function calcular2() {
  var num1 = window.document.getElementById('textn3');
  var num2 = window.document.getElementById('textn4');
  var res = window.document.getElementById('rescalc2');
  if (num1.value.length == 0) {
    res.innerHTML = 'Informe o <strong>primeiro</strong> valor.</br>';
  } else if (num2.value.length == 0) {
    res.innerHTML = 'Informe o <strong>segundo</strong> valor.</br>';    
  } else if (num2.value == 0) {
    res.innerHTML = 'Não é possível achar o % de 0.</br>';    
  } else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    res.innerHTML = ''; 
    var calc = n1 / (n2 / 100);
    var c1 = calc.toFixed(2);
    res.innerHTML = `<strong></strong> ${c1}%`;
  }
}

function calcular3() {
  var num1 = window.document.getElementById('textn5');
  var num2 = window.document.getElementById('textn6');
  var res = window.document.getElementById('rescalc3');
  if (num1.value.length == 0) {
    res.innerHTML = 'Informe o <strong>primeiro</strong> valor.</br>';
  } else if (num2.value.length == 0) {
    res.innerHTML = 'Informe o <strong>segundo</strong> valor.</br>';
  } else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    res.innerHTML = ''; 
    var n3 = ((n2 - n1) / n1) * 100;
    var c1 = n3.toFixed(2);
    res.innerHTML = `<strong></strong> ${c1}%`;
  }
}

function calcular4() {
  var num1 = window.document.getElementById('textn7');
  var num2 = window.document.getElementById('textn8');
  var res = window.document.getElementById('rescalc4');
  if (num1.value.length == 0) {
    res.innerHTML = 'Informe o <strong>primeiro</strong> valor.</br>';
  } else if (num2.value.length == 0) {
    res.innerHTML = 'Informe o <strong>segundo</strong> valor.</br>';
  } else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    res.innerHTML = ''; 
    var n3 = ((n1 - n2) / n1) * 100;
    var c1 = n3.toFixed(2);
    res.innerHTML = `<strong></strong> ${c1}%`;
  }
}

function calcular5() {
  var num1 = document.getElementById('textn9');
  var num2 = document.getElementById('textn10');
  var res = document.getElementById('rescalc5');
  if (num1.value.length == 0) {
    res.innerHTML = 'Informe o <strong>primeiro</strong> valor.</br>';
  } else if (num2.value.length == 0) {
    res.innerHTML = 'Informe o <strong>segundo</strong> valor.</br>';
  } else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    res.innerHTML = ''; 
    var n3 = n1 * (n2 / 100) + n1;
    var c1 = n3.toFixed(2);
    res.innerHTML = `<strong></strong> ${c1}`;
  }
}

function calcular6() {
  var num1 = document.getElementById('textn11');
  var num2 = document.getElementById('textn12');
  var res = document.getElementById('rescalc6');
  if (num1.value.length == 0) {
    res.innerHTML = 'Informe o <strong>primeiro</strong> valor.</br>';
  } else if (num2.value.length == 0) {
    res.innerHTML = 'Informe o <strong>segundo</strong> valor.</br>';
  } else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    res.innerHTML = ''; 
    var n3 = n1 - n1 * (n2 / 100);
    var c1 = n3.toFixed(2);
    res.innerHTML = `<strong></strong> ${c1}`;
  }
}

function calcular7() {
  var num1 = document.getElementById('textn13');
  var num2 = document.getElementById('textn14');
  var res = document.getElementById('rescalc7');
  if (num1.value.length == 0) {
    res.innerHTML = 'Informe o <strong>primeiro</strong> valor.</br>';
  } else if (num2.value.length == 0) {
    res.innerHTML = 'Informe o <strong>segundo</strong> valor.</br>';
  } else {
    var n1 = Number(num1.value);
    var n2 = Number(num2.value);
    res.innerHTML = ''; 
    var n3 = n2 / (n1 / 100 + 1);
    var c1 = n3.toFixed(2);
    res.innerHTML = `<strong></strong> ${c1}`;
  }
}
