const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')
});

const apiURL = "https://breakingbadapi.com/api/";

app.get('/characters', async (req, res) => {
  try {
    const response = await fetch(apiURL, options);
    const data = await response.json();
    console.log(data);

    if (response.status === 429) {
      dateTimeOutput.innerText =
        "Too many requests sent, please refresh once!";
    } else {

    }
  } catch (err) {
    dateTimeOutput.innerText =
      "Some error has occured, please try again later!";
  }
  res.send('Hello Express app!')
});

app.listen(3000, () => {
  console.log('server started');
});
