// Desafio para Target Sistemas - 2024

// Questão 1 

const INDICE = 13
let SOMA = 0
let K = 0

while(K < INDICE) {
    K = K + 1
    SOMA = SOMA + K
}

console.log(SOMA) // 91


// Questão 2

function fibonnaci(num) {
    let prev = 0
    let atual = 1

    while(atual < num) {
        let temp = atual
        atual = prev + atual
        prev = temp
    }

    if (atual === num) {
        console.log(`O número ${num} pertence à sequência Fibonacci.`)
    } else {
        console.log(`O número ${num} não pertence à sequência Fibonacci.`)
    }

    console.log(num)
}

fibonnaci(8) // Coloque o número que quiser testar


// Questão 3

// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, 9 
// b) 2, 4, 8, 16, 32, 64, 128
// c) 0, 1, 4, 9, 16, 25, 36, 49
// d) 4, 16, 36, 64, 100
// e) 1, 1, 2, 3, 5, 8, 13
// f) 2, 10, 12, 16, 17, 18, 19, 20


// Questão 4
// R: Para descobrir qual interruptor controla qual lâmpada teria que ser guir o seguinto raciocínio 
// Uma lâmpada gera calor por conta da eletricidade seguindo isso 

// Na minha primeira visita antes de entrar eu ligaria o primeiro interruptor e deixaria ligado por alguns minutos e depois desligaria, assim eu ligaria o segundo interruptor e entraria na primeira sala no mesmo instante, dado essa situação se a lâmpada estiver quente e apagada é porque corresponde ao primeiro interruptor, se ela estiver fria e apagada corresponde ao terceiro interruptor e se ela estiver ligada corresponde ao segundo interruptor

// Já na segunda visita da segunda sala eu entraria ainda com o segundo interruptor ligado e teria a resposta conforme oque acontecesse na primeira visita dando três situações:

// Situação 1: Se na visita da primeira sala a lâmpada estivesse quente e apagada significa que ela pertence ao primeiro interruptor e na segunda sala se a lâmpada estivesse acessa corresponde ao segundo interruptor e o terceiro corresponde a terceira sala mas caso na segunda sala a lâmpada estivesse apagada então o segundo interruptor pertence a terceira sala e o terceiro interruptor pertencer a segunda sala

// Situação 2: Se na visita da primeira sala a lâmpada estivesse acessa significa que o segundo interruptor corresponde ao segundo interruptor, assim se a lâmpada da segunda sala estiver quente e apagada ela corresponde ao primeiro interruptor que ficou ligado por mais tempo e a terceira sala ficaria com o teceiro interruptor mas caso na segunda sela estivesse fria a apagada então a segunda sala corresponde ao terceiro interruptor e a terceira sala corresponde ao primeiro interruptor


// Questão 5

function inverteString(string) {
    let stringInvertida = ''
    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i]
    }
    return stringInvertida
}

let stringOriginal = "TargetSistemas"
let stringInvertida = inverteString(stringOriginal)

console.log(stringOriginal)
console.log(stringInvertida)