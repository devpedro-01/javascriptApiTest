// Fazer um levantamento de dados 
// Fazer a soma de salarios de 5 usuarios
// os usuarios devem ter:
// nome
//sobrenome
//idade
//cpf
//conta salarial
//fazer a soma dos salarios
//depois fazer divisao por 5

//depois fazer uma saudação
//Ex: seu nome é lucas... sua idade... seu cpf... sua...

///////////////////////////////////////////

/////////////////////////////////////////////////

// Definindo os dados dos usuários
// Definindo os dados dos usuários

////////////////////////////////////////////////////////////


var nome1 = "Lucas"
var sobrenome1 = "Hostin"
var idade1 = 24
var saldo_conta1 = 8909
var nome_banco1 = "bradesco"
var mensagem1 = `o seu nome é ${nome1} e seu sobrenome é ${sobrenome1} a sua idade é ${idade1} e o seu saldo da conta é ${saldo_conta1} e o seu banco é o ${nome_banco1}`
console.log(mensagem1)

var nome2 = "Gabriel"
var sobrenome2 = "Santos"
var idade2 = 20
var saldo_conta2 = 500
var nome_banco2 = "caixa"
var mensagem2 =`o seu nome é ${nome2} e seu sobrenome é ${sobrenome2} e sua idade é ${idade2} e o seu saldo na conta é ${saldo_conta2} e o seu banco é a ${nome_banco2}` 
console.log(mensagem2)

var nome3 = "Luis"
var sobrenome3 = "Henrique"
var idade3 = 30 
var saldo_conta3 = 5000
var nome_banco3 = "nubank"
var mensagem3 = `o seu nome é ${nome3} e seu sobrenome é ${sobrenome3} e sua idade é ${idade3} e o seu saldo na conta é ${saldo_conta3} e o seu banco é a ${nome_banco3}`
console.log(mensagem3)

var nome4 = "Erick"
var sobrenome4 = "Oliveira"
var idade4 = 35 
var saldo_conta4 = 3670
var nome_banco4 = "Itau"
var mensagem4 = `o seu nome é ${nome4} e seu sobrenome é ${sobrenome4} e sua idade é ${idade4} e o seu saldo na conta é ${saldo_conta4} e o seu banco é o ${nome_banco4}`
console.log(mensagem4)

var nome5 = "Mateus"
var sobrenome5 = "Silva"
var idade5 = 29
var saldo_conta5 = 12000
var nome_banco5 = "Inter"
var mensagem5 = `o seu nome é ${nome5} e seu sobrenome é ${sobrenome5} e sua idade é ${idade5} e o seu saldo na conta é ${saldo_conta5} e o seu banco é o ${nome_banco5}`
console.log(mensagem5)

// Soma dos salarios 
var mensagem6 = `O valor soma total de todas as contas é de ${soma_conta0}`
console.log(mensagem6)
var soma_conta0 = saldo_conta1 + saldo_conta2 + saldo_conta3 + saldo_conta4 + saldo_conta5
console.log(soma_conta0)

var mensagem7 = `O valor total da divisao das contas é de ${divisao0}`
console.log(mensagem7)
var divisao0 = soma_conta0 /5 
console.log(divisao0)









