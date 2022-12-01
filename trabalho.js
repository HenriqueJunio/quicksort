var vetor = [];

for (var x = 0; x < 100; x++) {
  vetor.push(x);
}

console.log("Método quicksort sem Inserção");
semInsercao();
console.log("\nMétodo quicksort com Inserção");
comInsercao();



function semInsercao() {
  var comparacao = 0;
  var movimentacao = 0;

  function quicksort(vetor, esquerda, direita) {
    comparacao++;
    if (esquerda < direita) {
      movimentacao += 3;
      var j = particao(vetor, esquerda, direita);
      quicksort(vetor, esquerda, j - 1);
      quicksort(vetor, j + 1, direita);
    }
  }

  function particao(vetor, esquerda, direita) {
    movimentacao += 3;
    var i = esquerda + 1;
    var j = direita;
    var pivo = vetor[esquerda];

    var entrou = false;

    comparacao++;
    while (i <= j) {
      if (entrou)
        comparacao++;

      comparacao += 3;
      if (vetor[i] <= pivo) {
        comparacao -= 2;
        movimentacao++;
        i++;
      }
      else if (vetor[j] > pivo) {
        comparacao -= 2;
        movimentacao++;
        j--;
      }
      else if (i <= j) {
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

  function trocar(vetor, i, j) {
    movimentacao += 3;
    var aux = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = aux;
  }

  quicksort(vetor, 0, vetor.length - 1);
  console.log("Comparações realizadas: " + comparacao);
  console.log("Movimentações realizadas: " + movimentacao);
}

function comInsercao() {
  var comparacao = 0;
  var movimentacao = 0;

  function quicksort(vetor, esquerda, direita) {
    comparacao++;
    if (esquerda < direita) {
      if (direita - esquerda == vetor.length / 2)
        insercao(vetor);
      else {
        movimentacao += 3;
        var j = particao(vetor, esquerda, direita);
        quicksort(vetor, esquerda, j - 1);
        quicksort(vetor, j + 1, direita);
      }
    }
  }

  function particao(vetor, esquerda, direita) {
    movimentacao += 3;
    var i = esquerda + 1;
    var j = direita;
    var pivo = vetor[esquerda];

    var entrou = false;

    comparacao++;
    while (i <= j) {
      if (entrou)
        comparacao++;

      comparacao += 3;
      if (vetor[i] <= pivo) {
        comparacao -= 2;
        movimentacao++;
        i++;
      }
      else if (vetor[j] > pivo) {
        comparacao -= 2;
        movimentacao++;
        j--;
      }
      else if (i <= j) {
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

  function trocar(vetor, i, j) {
    movimentacao += 3;
    var aux = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = aux;
  }

  function insercao(vetor) {
    var atual;
    var entrouFor = false;
    var entrouWhile = false;

    comparacao++;
    movimentacao += 2;
    for (var i = 1; i < vetor.length; i++) {
      if (entrouFor) {
        comparacao++;
        movimentacao++;
      }
      movimentacao += 2;
      var j = i - 1;
      atual = vetor[i];

      comparacao += 2;
      while (j >= 0 && atual < vetor[j]) {
        if (entrouWhile)
          comparacao += 2;

        movimentacao += 3;
        vetor[j + 1] = vetor[j];
        j--;

        entrouWhile = true;
      }

      movimentacao += 2;
      vetor[j + 1] = atual;

      entrouFor = true;
    }

    return vetor;
  }

  quicksort(vetor, 0, vetor.length - 1);
  console.log("Comparações realizadas: " + comparacao);
  console.log("Movimentações realizadas: " + movimentacao);
}