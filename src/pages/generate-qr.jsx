// pages/generate-qr.js
import QRCode from 'qrcode.react';

const GenerateQRCode = () => {
  const productId = '12345'; // Replace with the actual product ID
  const url = `http://localhost:3000/product/${productId}`; // Adjust the base URL as needed

  return (
    <div>
      <h1>Product QR Code</h1>
      <QRCode value={url} />
    </div>
  );
};

export default GenerateQRCode;