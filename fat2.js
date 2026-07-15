import inquirer from 'inquirer'

// digite um numero para fatoriar
let questions = [

    {
        type: 'input',
        name: 'i',
        message: 'digite um numero para fatoriar: '
    },

   
] 

let resp = await inquirer.prompt(questions)
let fim = parseInt(resp.i)
let fat = 1


for (let cont = 1; cont<=fim;cont=cont+1){
     
   fat = (fat*cont)
    
    
    
}
console.log(fat)