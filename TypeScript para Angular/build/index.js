"use strict";
/**
 * VARIÁVEIS
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//Tipos primitivos: boolean, number, string
let ligado = false;
let nome = "felipe";
let idade = 30;
let altura = 1.9;
//tipoes especiais: null, undefined
let nulo = null;
let indefinido = undefined;
//tipos abrangentes: any, void
//void = vazio, não retorna nada
//let retorno: void = void;
function executaQuery() { }
let retornoView = 1;
let retornoView2 = "oi";
let retornoView3 = false;
//variável do tipo objeto SEM PREVISIBILIDADE:
let produto = {
    name: "felipe",
    cidade: "sp",
    idade: 30,
};
let meuProduto = {
    nome: "tênis",
    preco: 89.99,
    unidades: 5,
};
//Declarando Array
let dados = ["felipe", "ana", "adriana", "luciana"];
let dados2 = ["uva", "morango", "mamão", "banana"];
//Array multi-tipo:
//pode declarar em qualquer ordem
let infos = ["felipe", 30, "maria", 20];
/**
 * Tuplas - vetor de multi-tipos
 */
//tem que colocar na ordem da declaração dos tipos
let boleto = ["agua conta", 199.90, 203948203];
/**
 * arrays - métodos
*/
dados.push("joana");
console.log(dados);
/**
 * Datas
 */
let aniversario = new Date("2023-11-26");
console.log(aniversario.toString());
/**
 * funções
 */
function addNumber(x, y) {
    return x + y;
}
let soma = addNumber(4, 7);
console.log(soma);
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Renato"));
function CallToPhone(phone) {
    return phone;
}
console.log(CallToPhone("953 - 123 - 123"));
/**
 * Funções Assíncronas - async
 */
function getDatabase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "felipe";
    });
}
const bot1 = {
    id: 1,
    name: "juca",
};
const bot2 = {
    id: 1,
    name: "juca",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1.name = "bolinha");
console.log(bot1.id);
console.log(bot2);
//type é utilizado para tipar um conjunto - um objeto
//interface é utilizado em uma classe
//type e interface se comportam praticamente da mesma maneira
//type - definir uma forma como variável vai receber o objeto
//interface - usar em classes
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Juquinha");
console.log(p.sayHello());
/**
 * Classes:
 */
class Character {
    constructor(stregth, skill) {
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
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
    constructor(name, stregth, skill) {
        this.name = name;
        this.stregth = stregth;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.stregth} points`);
    }
}
const p2 = new Character2("Maria", 10, 98);
//Magician é uma subclass
//Character2: superclass
class Magician extends Character2 {
    constructor(name, stregth, skill, magicPoints) {
        super(name, stregth, skill);
        this.magicPoints = magicPoints;
    }
}
const p3 = new Magician("mago", 9, 30, 100);
/**
 * Generics
 */
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [4], [7, 8, 9]);
const strgArray = concatArray(["juca,dog"], ["shih-tzu"]);
console.log(numArray);
console.log(strgArray);
let dado2 = "Maria Josefina";
console.log(dado2);
/**
 * Decorators: decora uma função para injetar
 * em tsconfig habilitar experimentalDecorators
 */
function ExibirNome(target) {
    console.log(target);
}
let Funcionario = class Funcionario {
};
Funcionario = __decorate([
    ExibirNome
], Funcionario);
let Escola = class Escola {
};
Escola = __decorate([
    ExibirNome
], Escola);
