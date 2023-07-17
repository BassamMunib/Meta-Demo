const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.post("/webhook", async (req, res) => {
  const { body } = req;
  try {
    console.log(body);
  } catch (e) {
    console.log(e);
    return res.send(400).json();
  }
  return res.send(200).json();
});

app.listen(port, () => {
  console.log(`Listening to streams`);
});
