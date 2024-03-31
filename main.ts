#! /usr/bin/env node

import inquirer from "inquirer";

const todoList = [];
let condition = true;

while (condition) {
    const addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What do you want to add in ToDo List?\nWrite here:"
        },
        {
            name: "addMore",
            type: "list",
            message: "Do you want to add more?\n",
            choices: [
                { name: "Yes", value: true },
                { name: "No", value: false }
            ]
        }
    ]);

    todoList.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todoList);
}
