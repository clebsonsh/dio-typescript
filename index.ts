interface IPessoa {
  nome: string
  idade: number
  nacionalidade: string
}

interface Brasileiro extends Omit<IPessoa, 'nacionalidade'> {

}

const brasileiro: Brasileiro = {
  nome: 'José',
  idade: 33
}