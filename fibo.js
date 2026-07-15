import inquirer from 'inquirer'

let questions = [

    {
        type: 'input',
        name: 'base',
        message: 'digite um numero: '
    },

    {
        type: 'input',
        name: 'expoente',
        message: 'digite um numero: '
    },

   
] 

{ let resp = await inquirer.prompt(questions)
    let base = parseInt(resp.base)
    let expoente = parseInt(resp.expoente)
    let contador = 1;
    let potencia =0
   
  
    do {
        console.log("Sua potenciação é: " + console++);
    } while (contador); 
  }
  potencia = base * base 
  contador++;
  

  