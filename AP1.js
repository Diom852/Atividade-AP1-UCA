/*
AP1 - Atividade Prática de Aprendizagem UCA 2021
*/ 
var funcionarios = {
    "salarios":
        {
        1: "2500",
        2: "3200",
        3: "1500",
        4: "3100",
        5: "1800"}  
 }
 console.log("Antes da Alteração de Salário: ")
 console.log(funcionarios)
var count = Object.keys(funcionarios.salarios).length;

for (let index = 1; index < count + 1; index++) {
    let renda = funcionarios.salarios[index]
    const porcento =  renda / 100
    if (renda <= 3000) {
        
        var newSalary = Number(renda) + porcento * 20
        console.log("Funcionario: " + index + " Salário antigo: R$" + funcionarios.salarios[index]) 
        funcionarios.salarios[index] = newSalary 
        console.log("Funcionario: " + index + " Novo Salário: R$" + newSalary)

    }else if ( renda => 3000){

        var newSalary = Number(renda) + porcento * 10
        console.log("Funcionario: " + index + " Salário antigo: R$" + funcionarios.salarios[index]) 
        funcionarios.salarios[index] = newSalary 
        console.log("Funcionario: " + index + " Novo Salário: R$" + newSalary)
    }
}
console.log("Depois da Alteração de Salário: ")
console.log(funcionarios)