import React, { useState } from 'react';
import QrScanner from 'react-qr-scanner';
import axios from 'axios';

const QRScanner = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const handleScan = async (data) => {
    if (data) {
      console.log("Scanned data:", data); // Log the scanned data to inspect the structure
  
      // Assuming the `data` object has a 'text' property that contains the URL or relevant info
      const scannedText = typeof data === 'string' ? data : data.text; // Extract 'text' if data is an object
      
      // Check if the scannedText is a URL and extract the product ID
      const urlPattern = /http:\/\/localhost:3000\/product\/([0-9a-fA-F]{24})/;
      const match = scannedText.match(urlPattern);
  
      if (match && match[1]) {
        const productId = match[1]; // Extract the product ID from the URL
        console.log("Extracted product ID:", productId);
  
        try {
          const response = await axios.get(`/api/products/${productId}`);
          setProduct(response.data);
          setError('');
        } catch (err) {
          console.error("Error fetching product details:", err);
          setError('Failed to fetch product details.');
        }
      } else {
        setError('Invalid QR code scanned.');
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
