
import inquirer from 'inquirer'

// digite um numero para fatoriar
let questions = [

    {
        type: 'input',
        name: 'numero',
        message: 'digite um numero para fatoriar: '
    },

   
] 

let numero = await inquirer.prompt(questions)
let i = 1
let fat 

for (let i = 1; i <= numero;i++) {
     
    fat = i *= -1

     
     
     
 }