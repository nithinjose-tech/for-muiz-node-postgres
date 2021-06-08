//Configurations of the server like port etc..

const app = require("./src/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port ", port);
});
