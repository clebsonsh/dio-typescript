// ### Generic Types ###

function adicionarApendiceALista<T>(array: T[], valor: T) {
  return array.map(item => valor)
}

adicionarApendiceALista(['a', 'b', 'c'], 'd')