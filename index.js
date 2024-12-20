import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import QRModel from "./model/model.js";
import QRCode from "qrcode";
import dotenv from "dotenv";
import connectDB from "./database/Config.js";

dotenv.config();
const port = 4000;



app.post("/qr-image", (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).send("Message is required!");
    }
    res.status(200).send(`Welcome! ✌️ ${message}`);
  } catch (err) {
    console.log(err);
  }
});
app.post("/generate", async (request, response) => {
  const { data } = request.body;

  try {
    const googleWalletURL = `https://pay.google.com/gp/v/save/${data}`;
    const qrCode = await QRCode.toDataURL(googleWalletURL);

    const qr = new QRModel({ data, qrCode });
    await qr.save();
    response.status(201).json({ qrCode });
  } catch (error) {
    console.log(error);

    response.status(500).json({ error: "Failed to generate QR code." });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
