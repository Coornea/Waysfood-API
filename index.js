const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());

// let;

app.get("/", (req, res) => {
  res.send("Test for the first output");
});

app.listen(port, () =>
  console.log(`Listening on port ${port} server is running!`)
);
