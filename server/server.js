const express = require("express");
const cors = require("cors");
const db = require("mongoose");
const router = require("./router/router");

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

try {
  db.connect("mongodb://127.0.0.1:27017/ATMdb").then(()=>{
    console.log("Mongo Connected")
  })
  
} catch (err) {console.log(err)}

app.listen(3000, () => {
  console.log("Server listening at 3000");
});
