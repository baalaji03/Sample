const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const QRCode = require("qrcode");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/qrcodeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const QRSchema = new mongoose.Schema({
  data: String,
  qrCode: String,
});

const QRModel = mongoose.model("QR", QRSchema);

// Generate QR Code for Google Wallet
app.post("/generate", async (req, res) => {
  const { data } = req.body;

  try {
    const googleWalletURL = `https://pay.google.com/gp/v/save/${data}`;
    const qrCode = await QRCode.toDataURL(googleWalletURL);
    const qr = new QRModel({ data, qrCode });
    await qr.save();

    res.status(201).json({ qrCode });
  } catch (error) {
    res.status(500).json({ error: "Failed to generate QR code." });
  }
});
