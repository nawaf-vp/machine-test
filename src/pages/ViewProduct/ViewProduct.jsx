
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewProduct = ({ productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://example.com/api/products/${productId}`); 
        setProduct(response.data);
      } catch (error) {
        console.log('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [productId]);

    return (

   
    <div className="shop">
    <div className="shopTitle">
      <h1>LeEyet Shop</h1>
    </div>

    <div className="products">
    {product ? (
        <div>
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  </div>
  )
}

export default ViewProduct ;