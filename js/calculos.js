// CAPTURAR EVENTO DE SUBMIT
const form = document.querySelector('#calculo-1');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputNum1 = e.target.querySelector('#num1');
    const inputNum2 = e.target.querySelector('#num2');
    console.log(inputNum1, inputNum2);
    const num1 = Number(inputNum1.value);
    const num2 = Number(inputNum2.value);

    if (!num1) {
        setResultado('Favor informar o <strong>primeiro número</strong>.', false);
        return;
    }

    if (!num2) {
        setResultado('Ops. Favor informar o <strong>segundo número </strong>.', false);
        return;
    }

    const calc = getCalc(num1, num2);
    //const nivelCalc = getnivelCalc(calc);

    const msg = `O Resultado é <strong>${calc}</strong>.`
   // const msg = `O Resultado é ${calc} (${nivelCalc}).`
    setResultado(msg, true);

});


function getCalc (num1, num2) {
    const calc = num2 * (num1 / 100);
    return calc.toFixed(2);
}   

function criaP () {
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado-calc1');
    resultado.innerHTML = '';
    const p = criaP();
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('paragrafo-resultado-bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
}
/* FIM DO CALCULO 1 */

/* INICIO DO CALCULO 2 */

const form2 = document.querySelector('#calculo-2');
form2.addEventListener('submit', function (e2) {
    e2.preventDefault();
    const inputNum3 = e2.target.querySelector('#num3');
    const inputNum4 = e2.target.querySelector('#num4');
    console.log(inputNum3, inputNum4);
    const num3 = Number(inputNum3.value);
    const num4 = Number(inputNum4.value);

    if (!num3) {
        setResultado2('Favor informar o <strong>primeiro número</strong>.', false);
        return;
    }

    if (!num4) {
        setResultado2('Favor informar o <strong>segundo número</strong>.', false);
        return;
    }

    const calc2 = getCalc2(num3, num4);

    const msg2 = `O Resultado é <strong>${calc2}%</strong>.`
    setResultado2(msg2, true);

});

function getCalc2 (num3, num4) {
    const calc2 = num3 / (num4 / 100);
    return calc2.toFixed(2);
}   

function criaP2 () {
    const p2 = document.createElement('p2');
    return p2;
}

function setResultado2 (msg2, isValid2) {
    const resultado2 = document.querySelector('#resultado-calc2');
    resultado2.innerHTML = '';
    const p2 = criaP2();
    
    if (isValid2) {
        p2.classList.add('paragrafo-resultado');
    } else {
        p2.classList.add('paragrafo-resultado-bad');
    }
    p2.innerHTML = msg2;
    resultado2.appendChild(p2);
}
/* FIM DO CALCULO 2 */

/* INICIO DO CALCULO 3 */
const form3 = document.querySelector('#calculo-3');
form3.addEventListener('submit', function (e3) {
    e3.preventDefault();
    const inputNum5 = e3.target.querySelector('#num5');
    const inputNum6 = e3.target.querySelector('#num6');
    console.log(inputNum5, inputNum6);
    const num5 = Number(inputNum5.value);
    const num6 = Number(inputNum6.value);

    if (!num5) {
        setResultado3('Favor informar o <strong>primeiro número</strong>.', false);
        return;
    }

    if (!num6) {
        setResultado3('Favor informar o <strong>segundo número</strong>.', false);
        return;
    }

    const calc3 = getCalc3(num5, num6);

    const msg3 = `O Resultado é <strong>${calc3}%</strong>.`
    setResultado3(msg3, true);
});


function getCalc3 (num5, num6) {
    const calc3 = (num6 - num5) / num5 * 100;
    return calc3.toFixed(2);
}   

function criaP3 () {
    const p3 = document.createElement('p3');
    return p3;
}

function setResultado3 (msg3, isValid3) {
    const resultado3 = document.querySelector('#resultado-calc3');
    resultado3.innerHTML = '';
    const p3 = criaP3();
    
    if (isValid3) {
        p3.classList.add('paragrafo-resultado');
    } else {
        p3.classList.add('paragrafo-resultado-bad');
    }
    p3.innerHTML = msg3;
    resultado3.appendChild(p3);
}
/* FIM DO CALCULO 3 */

/* INICIO DO CALCULO 4 */
const form4 = document.querySelector('#calculo-4');
form4.addEventListener('submit', function (e4) {
    e4.preventDefault();
    const inputNum7 = e4.target.querySelector('#num7');
    const inputNum8 = e4.target.querySelector('#num8');
    console.log(inputNum7, inputNum8);
    const num7 = Number(inputNum7.value);
    const num8 = Number(inputNum8.value);

    if (!num7) {
        setResultado4('Favor informar o <strong>primeiro número</strong>.', false);
        return;
    }

    if (!num8) {
        setResultado4('Favor informar o <strong>segundo número</strong>.', false);
        return;
    }

    const calc4 = getCalc4(num7, num8);

    const msg4 = `O Resultado é <strong>${calc4}%</strong>.`
    setResultado4(msg4, true);
});

function getCalc4 (num7, num8) {
    const calc4 = ((num7 - num8) / num7) * 100; 
    return calc4.toFixed(2);
}   

function criaP4 () {
    const p4 = document.createElement('p4');
    return p4;
}

function setResultado4 (msg4, isValid4) {
    const resultado4 = document.querySelector('#resultado-calc4');
    resultado4.innerHTML = '';
    const p4 = criaP4();
    
    if (isValid4) {
        p4.classList.add('paragrafo-resultado');
    } else {
        p4.classList.add('paragrafo-resultado-bad');
    }
    p4.innerHTML = msg4;
    resultado4.appendChild(p4);
}
/* FIM DO CALCULO 4 */

/* INICIO DO CALCULO 5 */
const form5 = document.querySelector('#calculo-5');
form5.addEventListener('submit', function (e5) {
    e5.preventDefault();
    const inputNum9 = e5.target.querySelector('#num9');
    const inputNum10 = e5.target.querySelector('#num10');
    console.log(inputNum9, inputNum10);
    const num9 = Number(inputNum9.value);
    const num10 = Number(inputNum10.value);

    if (!num9) {
        setResultado5('Favor informar o <strong>primeiro número</strong>.', false);
        return;
    }

    if (!num10) {
        setResultado5('Favor informar o <strong>segundo número</strong>.', false);
        return;
    }

    const calc5 = getCalc5(num9, num10);

    const msg5 = `O Resultado é <strong>${calc5}</strong>.`
    setResultado5(msg5, true);
});

function getCalc5 (num9, num10) {
    const calc5 = num9 * (num10 / 100) + num9;
    return calc5.toFixed(2);
}   

function criaP5 () {
    const p5 = document.createElement('p5');
    return p5;
}

function setResultado5 (msg5, isValid5) {
    const resultado5 = document.querySelector('#resultado-calc5');
    resultado5.innerHTML = '';
    const p5 = criaP5();
    
    if (isValid5) {
        p5.classList.add('paragrafo-resultado');
    } else {
        p5.classList.add('paragrafo-resultado-bad');
    }
    p5.innerHTML = msg5;
    resultado5.appendChild(p5);
}
/* FIM DO CALCULO 5 */

/* INICIO DO CALCULO 6 */
const form6 = document.querySelector('#calculo-6');
form6.addEventListener('submit', function (e6) {
    e6.preventDefault();
    const inputNum11 = e6.target.querySelector('#num11');
    const inputNum12 = e6.target.querySelector('#num12');
    console.log(inputNum11, inputNum12);
    const num11 = Number(inputNum11.value);
    const num12 = Number(inputNum12.value);

    if (!num11) {
        setResultado6('Favor informar o <strong>primeiro número</strong>.', false);
        return;
    }

    if (!num12) {
        setResultado6('Favor informar o <strong>segundo número</strong>.', false);
        return;
    }

    const calc6 = getCalc6(num11, num12);

    const msg6 = `O Resultado é <strong>${calc6}</strong>.`
    setResultado6(msg6, true);
});

function getCalc6 (num11, num12) {
    const calc6 = num11 - num11 * (num12 / 100);
    return calc6.toFixed(2);
}   

function criaP6 () {
    const p6 = document.createElement('p6');
    return p6;
}

function setResultado6 (msg6, isValid6) {
    const resultado6 = document.querySelector('#resultado-calc6');
    resultado6.innerHTML = '';
    const p6 = criaP6();
    
    if (isValid6) {
        p6.classList.add('paragrafo-resultado');
    } else {
        p6.classList.add('paragrafo-resultado-bad');
    }
    p6.innerHTML = msg6;
    resultado6.appendChild(p6);
}
/* FIM DO CALCULO 6 */

/* INICIO DO CALCULO 7 */
const form7 = document.querySelector('#calculo-7');
form7.addEventListener('submit', function (e7) {
    e7.preventDefault();
    const inputNum13 = e7.target.querySelector('#num13');
    const inputNum14 = e7.target.querySelector('#num14');
    console.log(inputNum13, inputNum14);
    const num13 = Number(inputNum13.value);
    const num14 = Number(inputNum14.value);

    if (!num13) {
        setResultado7('Favor informar o <strong>primeiro número</strong>.', false);
        return;
    }

    if (!num14) {
        setResultado7('Favor informar o <strong>segundo número</strong>.', false);
        return;
    }

    const calc7 = getCalc7(num13, num14);

    const msg7 = `O Resultado é <strong>${calc7}</strong>.`
    setResultado7(msg7, true);
});

function getCalc7 (num13, num14) {
    const calc7 = num14 / (num13 / 100 + 1);
    return calc7.toFixed(2);
}   

function criaP7 () {
    const p7 = document.createElement('p7');
    return p7;
}

function setResultado7 (msg7, isValid7) {
    const resultado7 = document.querySelector('#resultado-calc7');
    resultado7.innerHTML = '';
    const p7 = criaP7();
    
    if (isValid7) {
        p7.classList.add('paragrafo-resultado');
    } else {
        p7.classList.add('paragrafo-resultado-bad');
    }
    p7.innerHTML = msg7;
    resultado7.appendChild(p7);
}

/* FIM DO CALCULO 7 */