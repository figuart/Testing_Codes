var x;
var resultado = 0;

function menu() {
  x = prompt(`Escolha a operação:
  + - Soma.
  - - Subtração.
  * - Multiplicação.
  / - Divisão.
  m - Media.
  t - tabuada.
  0 - Sair do programa.`);
}

while (x != 0) {
  menu();
  switch (x) {
    case "+": //soma
      let a = parseFloat(prompt(`Digite o Valor de A: `));
      let b = parseFloat(prompt(`Digite o Valor de B: `));
      resultado = a + b;
      document.write(`A soma de ${a} + ${b} é ${resultado}.<br>`);
      break;

    case "-": //subtração
      let c = parseFloat(prompt(`Digite o Valor de A: `));
      let d = parseFloat(prompt(`Digite o Valor de B: `));
      resultado = c - d;
      document.write(`A subtração de ${c} - ${d} é ${resultado}.<Br>`);
      break;

    case "*": //multiplicação
      let e = parseFloat(prompt(`Digite o Valor de A: `));
      let f = parseFloat(prompt(`Digite o Valor de B: `));
      resultado = e * f;
      document.write(`A multiplicação de ${e} * ${f} é ${resultado}.<br>`);
      break;

    case "/": //divisão
      let g = parseFloat(prompt(`Digite o Valor de A: `));
      let h = parseFloat(prompt(`Digite o Valor de B: `));
      resultado = g / h;
      if (h != 0) {
        document.write(`A divisão de ${g} / ${h} é ${resultado}.<br>`);
      } else {
        alert(`Não se pode dividir nenhum valor por 0.`);
      }
      break;

    case "m": //media
      let i = parseFloat(prompt(`Digite o Valor de A: `));
      let j = parseFloat(prompt(`Digite o Valor de B: `));
      resultado = Number(i + j) / 2;
      document.write(`A média entre ${i} e ${j} é ${resultado}.<br>`);
      break;
    case "t": //tabuada
      let k;
      let numero = parseFloat(prompt("Digite número:"));
      document.write(`A tabuada de ${numero} é: <br>`);
      for (k = 1; k <= 10; k++) {
        resultado = numero * k;
        document.write(`${numero} x ${k} = ${resultado}<br>`);
      }
      break;

    case "0":
      break;
  }
}
