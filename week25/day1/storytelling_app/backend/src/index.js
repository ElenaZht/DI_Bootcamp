const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());

app.get("/api/:name", (req, res) => {
  res.json({
    message: `Hello NEW!!! ${req.params.name}, from server! MY_NAME => aa`,
  });
});

app.listen(process.env.PORT || 3001, () => {
  console.log(`Server listening on ${process.env.PORT || 3001}`);
});