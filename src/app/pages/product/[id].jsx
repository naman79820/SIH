import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [qrCode, setQrCode] = useState('');

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/products/${id}/qr`);
          const data = await response.json();
          setProduct(data.product); // Make sure the response has 'product' field
          setQrCode(data.qrCodeImage);
        } catch (error) {
          console.error('Failed to fetch product:', error);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={qrCode} alt="QR Code" />
    </div>
  );
};

export default ProductPage;
