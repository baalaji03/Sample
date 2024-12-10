import express from "express";

const port = process.env.Port || 4000;

const app = express();

app.get("/qr-image", (req, res) => {
  res.status(200).send(`welcomes You ✌️`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
