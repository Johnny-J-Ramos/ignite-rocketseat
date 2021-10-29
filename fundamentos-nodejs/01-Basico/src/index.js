const express = require("express");
const app = express();

app.use(express.json());


/**
 * GET      => Buscar uma informação dentro do servidor
 * POST     => Inserir uma informação dentro no servidor
 * PUT      => Serve para alterar uma informação no servidor
 * PAT CH    => Alterar uma informação especifica
 * DELETE   => Deletar uma informação no Servidor
 */

// localhost:3333
//GET
app.get("/courses", (request, response) => {
   return response.json([
      "Curso 01",
      "Curso 02",
      "Curso 03"
   ])
});
//POST
app.post("/courses", (request, response) => {
   return response.json([
      "Curso 01",
      "Curso 02",
      "Curso 03",
      "Curso 04"
   ])
})
//PUT
app.put("/courses/:id", (request, response) => {
   return response.json([
      "Curso 6",
      "Curso 02",
      "Curso 07",
      "Curso 04"
   ])
} )
//PATCH 
app.patch("/courses/:id", (require, response) => {
   return response.json([
      "Curso 01",
      "Curso 02",
      "Curso 08",
      "Curso 04"
   ])
})
//DELETE
app.delete("/courses/:id", (require, response) => {
   return response.json([ 
      "Curso 01",
      "Curso 02",
      "Curso 04"

   ])
})

//post
app.listen(3333);