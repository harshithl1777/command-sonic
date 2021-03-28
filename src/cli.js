const arg = require('arg');
const inquirer = require('inquirer');
const fs = require('fs');

const addCommand = (newData) => {
    fs.readFile('./src/commands.json', 'utf-8', (err, data) => {
        if (err) throw err;
        const jsonData = JSON.parse(data);
        jsonData.commands.push(newData);
        fs.writeFile('./src/commands.json', JSON.stringify(jsonData), 'utf-8', (err) => {
            if (err) throw err;
            console.log('Done!');
        });
    });
}

export const cli = async (args) => {
    console.log(args);
    addCommand({ new: 'Hello' });
}