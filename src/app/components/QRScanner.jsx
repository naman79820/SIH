import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import axios from '../utils/axiosInstance';

const QRScanner = () => {
  const [product, setProduct] = useState(null);

  const handleScan = async (data) => {
    if (data) {
      try {
        const urlPattern = /http:\/\/localhost:3000\/product\/([0-9a-fA-F]{24})/;
        const match = data.match(urlPattern);
        if (match && match[1]) {
          const productId = match[1];
          const response = await axios.get(`/product/${productId}`);
          setProduct(response.data);
        }
      } catch (error) {
        alert('Failed to fetch product details');
      }
    }
  };

  return (
    <div>
      <h2>QR Scanner</h2>
      <QrReader onResult={(result) => handleScan(result?.text)} />
      {product && (
        <div>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image} alt={product.name} />
        </div>
      )}
    </div>
  );
};

export default QRScanner;
