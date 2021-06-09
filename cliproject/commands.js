#!/usr/bin/env node
//create this file when your are setup with add and find details

const program = require("commander");
const { prompt } = require("inquirer");

const {
  addCustomers,
  findCustomer,
  deleteCustomer,
  listCustomer,
  updateCustomer,
} = require("./index");

//prompt question
const questions = [
  {
    type: "input",
    name: "firstname",
    message: "customer firstname",
  },
  {
    type: "input",
    name: "lastname",
    message: "customer lastname",
  },
  {
    type: "input",
    name: "phone",
    message: "customer phone no",
  },
  {
    type: "input",
    name: "email",
    message: "customer email",
  },
];

program.version("1.0.0").description("Cli management System");
// program
//   .command("add <firstname> <lastname> <phone> <email>")
//   .alias("a")
//   .description("Add a customer")
//   .action((firstname, lastname, phone, email) => {
//     addCustomers({ firstname, lastname, phone, email });
//   });
//addd
program
  .command(`add`)
  .alias("a")
  .description("Add a customer")
  .action(() => {
    prompt(questions).then((answers) => addCustomers(answers));
  });

//find
program
  .command("find <name>")
  .alias("f")
  .description("find customers")
  .action((name) => findCustomer(name));

//update command
program
  .command(`update <id>`)
  .alias("u")
  .description("update a customer")
  .action((_id) => {
    prompt(questions).then((answers) => updateCustomer(_id, answers));
  });

//remove
program
  .command(`remove <_id>`)
  .alias("r")
  .description("remove customers")
  .action((_id) => deleteCustomer(_id));

//list
program
  .command(`list`)
  .alias("ls")
  .description("list of  customers")
  .action(() => listCustomer());

program.parse(process.argv);
