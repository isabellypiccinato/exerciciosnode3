import inquirer from 'inquirer'

// potencia e expoente
let questions = [

    {
        type: 'input',
        name: 'i',
        message: 'numero que vai ser a potencia: '
    },
{
        type: 'input',
        name: 'c',
        message: 'numero que vai ser o expoente: '
    },

   
] 

let resp = await inquirer.prompt(questions)
let po = parseInt(resp.i)
let ex = parseInt(resp.c)
let cont = 1

do{



let k = (po**ex)
}while (cont=10)
    

console.log("Resposta " + k)