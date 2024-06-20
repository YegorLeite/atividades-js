var peso = prompt(`Digite seu peso em kgs: `)
var altura = prompt('Digite sua altura em metros: ')

var imc = (peso / (altura * altura))

if (imc < 18){
    console.log('Você está abaixo do peso')
}

else if (peso >= 18 && peso <= 24){
    console.log(`Você está no peso ideal`)
}

else {
    console.log(`Você está com sobrepeso`)    
}

