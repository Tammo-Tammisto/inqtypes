import inquirer from 'inquirer';

inquirer
    .prompt([
        { type: 'input', name: 'name', message: 'Whats your name?' },
        { 
            type: 'list',
            name: 'food',
            message: 'Whats your favorite food?',
            choices: ['Pizza', 'Burger', 'Fries']
        },
        { 
            type: 'checkbox',
            name: 'foods',
            message: 'What are your favorite foods?',
            choices: ['Pizza', 'Burger', 'Fries']
        },
    ])
    .then((answers) => {
        console.log(answers);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });