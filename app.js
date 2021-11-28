const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("content"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening to port 3000!");
});
