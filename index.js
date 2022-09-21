const express = require('express');
const router = express.Router();
const axios = require('axios');
const { pipeline } = require('stream');

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
 //  try {
 //    const apiURL = "https://breakingbadapi.com/api/characters";
 //    const response = await axios.get(apiURL);
 //    const data = await response.json();
 //    console.log(response);
 //  }
 // catch (err) {
 //    dateTimeOutput.innerText =  
 //      "Some error has occured, please try again later!";
 //  }
 //  pipeline(response, res, (err) => {
 //      if (err) {
 //          console.log(err);
 //          res.sendStatus(500);
 //      }
 //  });
  res.render("index");
});

app.listen(3000);
