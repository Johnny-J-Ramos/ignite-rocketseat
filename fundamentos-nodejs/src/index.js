const express = require("express");
const app = express();


/**
 * GET      => Buscar uma informação dentro do servidor
 * POST     => Inserir uma informação dentro no servidor
 * DELETE   =>
 * PACH     =>
 */

// localhost:3333
app.get("/", (request, response) => {
   return response.json({ message: "Johnny Jefferson José Ramos"});
});

//post
app.listen(3333);