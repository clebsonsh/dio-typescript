interface ICachorro {
  nome: string
  idade: number
  parqueFavorito?: string
}

type ICachorroSomenteLeitura = {
  readonly [K in keyof ICachorro]-?: ICachorro[K]
}
class Meuachorro implements ICachorroSomenteLeitura {
  nome
  idade
  parqueFavorito

  constructor(nome, idade, parqueFavorito) {
    this.nome = nome
    this.idade = idade
    this.parqueFavorito = parqueFavorito
  }
}

const cao = new Meuachorro('Apolo', 14, 'Mars')