// fazere um sistema de notas 

// imprimindo as seguintes mensagens 

// aprovado com nota A
// aprovado com nota B
// aprovado com nota C
// aprovado com nota D
// REPROVADO 

// BONUS PARA QUEM FIZER CRIATIVO (MUITO BEM, PARABENS, TE VEJO ANO QUE VEM)

var nome = prompt("qual seu nome?")
const nota = prompt("Digite a nota");

if (nota >= 90 && nota <= 100) {
    document.write("Aprovado com nota A. Meus parabéns, você foi aprovado!");
} else if (nota >= 80 && nota < 90) {
    document.write("Aprovado com nota B. Meus parabéns, você foi aprovado!");
} else if (nota >= 70 && nota < 80) {
    document.write("Aprovado com nota C. Meus parabéns, você foi aprovado!");
} else if (nota >= 60 && nota < 70) {
    document.write("Aprovado com nota D. Meus parabéns, você foi aprovado!");
} else if (nota >= 40 && nota < 60) {
    document.write("Que azar, você foi reprovado, estude mais na próxima!!");
} else {
    document.write("Que azar, você foi reprovado, estude mais na próxima!!");
}
        
document.write(nome)













