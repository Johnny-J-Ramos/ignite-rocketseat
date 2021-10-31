const express = require("express");
//id random
const { v4: uuidv4 } = require("uuid") // biblioteca uuid - vai gerar um 
const app = express();

app.use(express.json());

const customers = []; // array com dados ficticios 

/**
 * cpf - string
 * name - string
 * id - uuid Será necessário instalar essa biblioteca UUID - yarn add uuid )
 * 
 * statement - []
 */
 
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

//Statement - demonstração
app.get("/statement/:cpf", (request, response) => {
   const {cpf} = request.params;

   const customer = customers.find(customer => customer.cpf === cpf);

   if(!customer) {
      return response.status(400).json({error: "Customer not found"})
   }

   return response.status(200).json(customer.statement);
})

app.listen(3333);


const nome = 'johnny'