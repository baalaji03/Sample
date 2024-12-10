import express from "express";
import cors from "cors";

const port = 4000;

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.status(200).send("Hi there!");
});

app.post("/qr-image", (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).send("Message is required!");
  }
  res.status(200).send(`Welcome! ✌️ ${message}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
