var preco = prompt(`Digite o preço do produto: `)
var idade = prompt(`Digite sua idade: `)

var desconto = (preco * 0.10)
var preco_final = (preco - desconto)

if (idade < 18){
    console.log(`Você obteve um desconto de 10%, seu produto custará ${preco_final}`)
}

else {
    console.log(`Você não tem desconto`)    
}

