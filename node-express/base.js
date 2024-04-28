const express = require("express");
require("colors");

const PORT = 3000;

const app = express();

app.use((req, res, next) => {
  console.log("Middleware here");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/login", (req, res, next) => {
  // console.log(req.body);
  const { email, password } = req.body;
  console.log(`email: ${email}, password: ${password}`.red);
  res.send(`Response: email: ${email}, password: ${password}`);
  // next();
});

app.get("/", (request, response) => {
  response.send("Hello world!");
});

// app.get("/login", (request, response) => {
//   response.send("Hello world!");
// });

app.get("/contact", (request, response) => {
  response.send(`<h1>Contact Page</h1>`);
});

app.get("/contact/:id", (request, response) => {
  response.send(
    `<h1>Contact Page, id=${request.params.id}, query='${JSON.stringify(
      request.query
    )}'</h1>`
  );
});

app.listen(PORT, () => {
  console.log(`Server is working on port ${PORT}`.yellow);
});
