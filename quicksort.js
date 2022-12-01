var vetor = [];

for (var x = 0; x < 7000; x++){
  vetor.push(parseInt(Math.random() * 100000));
}

var comparacao = 0;
var movimentacao = 0;

function quicksort(vetor, esquerda, direita){
  comparacao++;
  if (esquerda < direita){
    movimentacao+= 3;
    var j = particao(vetor, esquerda, direita);
    quicksort(vetor, esquerda, j - 1);
    quicksort(vetor, j + 1, direita);
  }
}

function particao(vetor, esquerda, direita){
  movimentacao += 3;
  var i = esquerda + 1;
  var j = direita;
  var pivo = vetor[esquerda];

  var entrou = false;

  comparacao++;
  while (i <= j){
    if (entrou)
      comparacao++;

    comparacao += 3;
    if (vetor[i] <= pivo){
      comparacao -= 2;
      movimentacao++;
      i++;
    }
    else if (vetor[j] > pivo){
      comparacao -= 2;
      movimentacao++;
      j--;
    }
    else if (i <= j){
      comparacao -= 2;
      movimentacao += 2;
      trocar(vetor, i, j);
      i++;
      j--;
    }

    entrou = true;
  }

  trocar(vetor, esquerda, j);
  return j;
}

function trocar(vetor, i, j){
  movimentacao += 3;
  var aux = vetor[i];
  vetor[i] = vetor[j];
  vetor[j] = aux;
}

//console.log("Vetor: " +vetor);
quicksort(vetor, 0, vetor.length - 1);
//console.log("Vetor ordenado: " +vetor);
console.log("Comparações realizadas: " +comparacao);
console.log("Movimentações realizadas: " +movimentacao);