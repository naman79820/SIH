// src/app/product/[id].jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await axios.get(`http://localhost:5000/api/products/${id}`);
          setProduct(response.data);
        } catch (err) {
          console.error("Error fetching product:", err);
          setError('Failed to fetch product details.');
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>; // Loading state

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
