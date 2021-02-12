function imc() {
  var textnam = document.getElementById('textnam').value;
  document.getElementById('resimc').innerHTML = textnam;
  var textpes = window.document.querySelector('input#textpes');
  var pes = Number(textpes.value);
  var textalt = window.document.querySelector('input#textalt');
  var alt = Number(textalt.value);
  var agora = new Date();
  var hora = agora.getHours();
  var res = window.document.querySelector('div#resimc');

  res.innerHTML = `<p>Olá <strong>${textnam}</strong>. Boa madrugada.
  A sua altura atual é ${alt} metros e o seu peso atual é ${pes} kg.</p>`;

  var calc = pes / (alt * alt);
  var num = calc.toFixed(2);
  res.innerHTML = `<p>Olá ${textnam}. O seu <strong>IMC</strong> está em ${num}</p>`;

  if (num < 18.5) {
    res.innerHTML += `<p>CLASSIFICAÇÃO MAGREZA. GRAU 0.</p>`;
  } else {
    if (num >= 18.5 && num <= 24.9) {
      res.innerHTML += `<p>CLASSIFICAÇÃO NORMAL. GRAU 0.</p>`;
    } else {
      if (num >= 25 && num <= 29.9) {
        res.innerHTML += `<p>CLASSIFICAÇÃO SOBREPESO. GRAU I.</p>`;
      } else {
        if (num >= 30 && num <= 39.9) {
          res.innerHTML += `<p>CLASSIFICAÇÃO OBESIDADE. GRAU II.</p>`;
        } else {
          if (num >= 40) {
            res.innerHTML += `<p>CLASSIFICAÇÃO OBESIDADE GRAVE. GRAU III. </p>`;
          }
        }
      }
    }
  }
}
