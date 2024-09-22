import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import axios from 'axios';

const QRScanner = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const handleScan = async (data) => {
    if (data) {
      try {
        const response = await axios.get(`/api/products/${data}`);
        setProduct(response.data);
        setError('');
      } catch (err) {
        setError('Failed to fetch product details.');
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    setError('Error scanning QR code.');
  };

  return (
    <div>
      <QrScanner
        onScan={handleScan}
        onError={handleError}
        style={{ width: '300px' }}
      />
      {error && <p>{error}</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
