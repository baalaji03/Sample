import express from "express";

const port = process.env.Port || 4000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).send(`hii`);
});

app.get("/qr-image", (req, res) => {
  const data = req.body;
  res.status(200).send(`welcomes You ✌️${data}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
