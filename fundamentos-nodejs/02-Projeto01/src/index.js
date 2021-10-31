const express = require("express");
//id random
const { v4: uuidv4 } = require("uuid") // biblioteca uuid - vai gerar um 
const app = express();

app.use(express.json());

const customers = []; // array com dados ficticios 

// Middlewares
function verifyExistsAccountCPF(request, response, next) {
   const {cpf} = request.headers;// O Correto é passar o params - request.params
   //porém, vamos usar o headers para usar os middlewares
   const customer = customers.find((customer) => customer.cpf === cpf);
   
   if(!customer) {
      return response.status(400).json({error: "Customer not found"})
   }

   request.customer = customer;

   return next();
 }
// Get Balance
function GatBalance(statement) {
   
}

//Register an account 
app.post("/account", (request, response) => {
   const { cpf, name } = request.body;

   //CPF already exists
   const customerAlreadyExists = customers.some((customer) => customer.cpf === cpf);
 
   if(customerAlreadyExists) {
      return response.status(400).json({ error: "CUstomer Already exists"});
   }

   //ID random
   const id = uuidv4();

   customers.push({
      cpf,
      name,
      id: uuidv4(),
      statement: [],
   });

   return response.status(201).send();

})

// app.use(verifyExistsAccountCPF) para usar em tudo que estiver abaixo dele, será passado pelo Middleware
//Statement - demonstração
app.get("/statement", verifyExistsAccountCPF, (request, response) => {
   const {customer} = request;
   return response.status(200).json(customer.statement);
})

// Makes a Deposit - Fazer um Depósito
app.post("/deposit", verifyExistsAccountCPF, (request, response) => {
   const {description, amount} = request.body;
   // const body = request.body;
   const {customer} = request;

// Operação 
   const statementOperation = { 
      description, // descrição
      amount, //quantia
      created_at: new Date(), //Data de criação
      type: "Credit"
   }
   customer.statement.push(statementOperation);

   return response.status(201).send();
})

//Withdraw - Retirar valor xxx
app.post("/withdraw", verifyExistsAccountCPF, (requist, response) => {
   const { amount } = request.body;
   const {customer} = request;

})

app.listen(3333);