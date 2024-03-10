import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: "checkbox",
            name: "olendid",
            message: "Vali endale meeldivad olendid",
            choices: ["Kassid", "Konnad", "Linnud"]
        },
        {
            type: "confirm",
            name: "inimene",
            message: "Kas sa olen inimene?"
        },
        {
            type: "editor",
            name: "fail",
            message: "Kirjuta midagi"
        },
        {
            type: "expand",
            name: "tegemine",
            message: 'Mida sa soovid peale kooli teha?',
            default: 'j',
            choices: [
                {
                    key: 'j',
                    name: 'Juua?',
                    value: 'minna jooma',
                },
                {
                    key: 's',
                    name: 'Magada?',
                    value: 'minna magama',
                },
                {
                    key: 'e',
                    name: 'Hessi?',
                    value: 'minna hessi',
                },
                {
                    key: 'v',
                    name: 'Mängima?',
                    value: 'minna mängima',
                },
            ],
        },
        {
            type: "input",
            name: "nimi",
            message: "Sisesta enda nimi"
        },
        {
            type: 'list',
            name: 'koduloom',
            message: 'Eelistatud kodullom?',
            choices: ['Koer', 'Kass', 'Laps']
        },
        {
            type: "number",
            name: "vanus",
            message: "Sisesta enda vanus"
        },
        {
            type: "password",
            name: "parool",
            message: "Sisesta parool!",

        },
        {
            type: "rawlist",
            name: "kumb",
            message: "Vali!",
            choices: ["Elu", "Surm"]
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