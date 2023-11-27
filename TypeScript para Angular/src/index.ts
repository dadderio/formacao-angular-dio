/**
 * VARIÁVEIS
 */

//Tipos primitivos: boolean, number, string

let ligado: boolean = false;
let nome: string = 'felipe';
let idade: number = 30;
let altura: number = 1.9;

//tipoes especiais: null, undefined

let nulo: null = null;
let indefinido: undefined = undefined;

//tipos abrangentes: any, void
//void = vazio, não retorna nada

//let retorno: void = void;
function executaQuery(): void {}

let retornoView: any = 1;
let retornoView2: any = 'oi';
let retornoView3: any = false;

//variável do tipo objeto SEM PREVISIBILIDADE:
let produto: object = {
  name: 'felipe',
  cidade: 'sp',
  idade: 30,
};

//variável do tipo objeto tipado, com PREVISIBILIDADE:

type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

let meuProduto: ProdutoLoja = {
  nome: 'tênis',
  preco: 89.99,
  unidades: 5,
};

//Declarando Array
let dados: string[] = ['felipe', 'ana', 'adriana', 'luciana'];
let dados2: Array<string> = ['uva', 'morango', 'mamão', 'banana'];

//Array multi-tipo:
//pode declarar em qualquer ordem
let infos: (string | number)[] = ['felipe', 30, 'maria', 20];

/**
 * Tuplas - vetor de multi-tipos
 */
//tem que colocar na ordem da declaração dos tipos
let boleto: [string, number, number] = ['agua conta', 199.9, 203948203];

/**
 * arrays - métodos
 */
dados.push('joana');
console.log(dados);

/**
 * Datas
 */

let aniversario: Date = new Date('2023-11-26');
console.log(aniversario.toString());

/**
 * funções
 */

function addNumber(x: number, y: number): number {
  return x + y;
}

let soma: number = addNumber(4, 7);

console.log(soma);

function addToHello(name: string): string {
  return `Hello ${name}`;
}

console.log(addToHello('Renato'));

function CallToPhone(phone: number | string): number | string {
  return phone;
}

console.log(CallToPhone('953 - 123 - 123'));

/**
 * Funções Assíncronas - async
 */

async function getDatabase(id: number): Promise<string | number> {
  return 'felipe';
}

/**
 * Interfaces (types x interface)
 */

type robot = {
  readonly id: number | string;
  name: string;
};

interface robot2 {
  readonly id: number | string;
  name: string;

  sayHello(): string;
}

const bot1: robot = {
  id: 1,
  name: 'juca',
};

const bot2: robot2 = {
  id: 1,
  name: 'juca',
  sayHello: function (): string {
    throw new Error('Function not implemented.');
  },
};

console.log((bot1.name = 'bolinha'));
console.log(bot1.id);
console.log(bot2);

//type é utilizado para tipar um conjunto - um objeto
//interface é utilizado em uma classe

//type e interface se comportam praticamente da mesma maneira
//type - definir uma forma como variável vai receber o objeto
//interface - usar em classes

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }
  sayHello(): string {
    return `hello I'm ${this.name}`;
  }
}

const p = new Pessoa(1, 'Juquinha');
console.log(p.sayHello());

/**
 * Classes:
 */

class Character {
  name?: string; //name com ? significa que é opcional
  stregth: number;
  skill: number;

  constructor(stregth: number, skill: number) {
    this.stregth = stregth;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.stregth} points`);
  }
}

const p1 = new Character(10, 98);
p1.attack();

/**
 * Data modifiers
 * public
 * private
 * protected
 */

class Character2 {
  name?: string; //name com ? significa que é opcional
  stregth: number;
  skill: number;

  constructor(name: string, stregth: number, skill: number) {
    this.name = name;
    this.stregth = stregth;
    this.skill = skill;
  }
  attack(): void {
    console.log(`Attack with ${this.stregth} points`);
  }
}
const p2 = new Character2('Maria', 10, 98);

//Magician é uma subclass
//Character2: superclass
class Magician extends Character2 {
  magicPoints: number;

  constructor(
    name: string,
    stregth: number,
    skill: number,
    magicPoints: number
  ) {
    super(name, stregth, skill);
    this.magicPoints = magicPoints;
  }
}
const p3 = new Magician('mago', 9, 30, 100);

/**
 * Generics
 */

function concatArray<T>(...itens: T[]): T[] {
  return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [4], [7, 8, 9]);
const strgArray = concatArray<string[]>(['juca,dog'], ['shih-tzu']);

console.log(numArray);
console.log(strgArray);

let dado2: string = 'Maria Josefina';
console.log(dado2);

/**
 * Decorators: decora uma função para injetar
 * em tsconfig habilitar experimentalDecorators
 */

function ExibirNome(target: any) {
  console.log(target);
}

@ExibirNome
class Funcionario {}

@ExibirNome
class Escola {}

/**
 * Decorators
 */
function apiVersion(version: string) {
  return (target: any) => {
    Object.assign(target.prototype, { __version: version, __name: 'felipe' });
  };
}

/**
 * attribute decorator é colocado em cima de uma propriedade
 */

class Api {
  @minLength(3)
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const api = new Api('produtos');
console.log(api.name);
