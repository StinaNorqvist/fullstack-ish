const express = require("express");
// serverar frontend, inbyggt i node
const path = require("path");

const app = express(),
  port = process.env.PORT || 3000;

// /api, kalla den för något annat så att den inte krockar med frontendet
app.get("/api", (_request, response) => {
  response.send({ hello: "World" });
});

// Serverar frontend, mappen heter public
// Path resolve är mappen vi står i, public är public, mappen i frontend, path join är / emellan sökvägarna så att de blir en
app.use(express.static(path.join(path.resolve(), "public")));

app.listen(port, () => {
  console.log(`Redo på http://localhost:${port}/`);
});
