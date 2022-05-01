// ### Interfaces ###

// Cria uma interface
interface IAnimal {
  nome: string,
  tipo: 'terrestre' | 'aquático',
}

// Declara um objeto usando a interface
const Elefante: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
}

// Extende um interface
interface IFelino extends IAnimal {
  visaoNoturna: boolean,
} 

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande'
}

const leao: IFelino = {
  nome: 'Leão',
  tipo: 'terrestre',
  visaoNoturna: false,
}

// ### Types ###
type IPet = IFelino | ICanino

const dog: IPet = {
  nome: 'doggy',
  tipo: 'terrestre',
  porte: 'pequeno',
}
