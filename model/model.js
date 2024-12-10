import mongoose from "mongoose";
const QRSchema = new mongoose.Schema({
  data: String,
  qrCode: String,
});

const QRModel = mongoose.model("QR", QRSchema);

export default QRModel;