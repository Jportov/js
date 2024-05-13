
class Animal {
    constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    }

    emitirSom() {
    throw new Error("Método 'emitirSom' deve ser implementado nas subclasses.");
    }
}

class Cachorro extends Animal {
    emitirSom() {
    return "Au Au";
    }
}

class Gato extends Animal {
    emitirSom() {
    return "Miau";
    }
}

const animal1 = new Cachorro("Rex", 3);
const animal2 = new Gato("Whiskers", 2);
const animal3 = new Cachorro("Bolt", 5);


console.log("Animal 1:", animal1.nome, ", Idade:", animal1.idade, ", Som:", animal1.emitirSom());
console.log("Animal 2:", animal2.nome, ", Idade:", animal2.idade, ", Som:", animal2.emitirSom());
console.log("Animal 3:", animal3.nome, ", Idade:", animal3.idade, ", Som:", animal3.emitirSom());
