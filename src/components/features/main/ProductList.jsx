import React, { useCallback } from 'react';
import styled from 'styled-components';
import Card from './Card';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export default function ProductList() {
  const [products, setProducts] = useState([]);

  const getProductsList = useCallback(async () => {
    try {
      const { data } = await axios.get('http://3.35.218.111/api/products');
      console.log(data);
      setProducts(data);
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    getProductsList();
  }, [getProductsList]);

  return (
    <div className='container'>
      <StImgWrapper>
        {products.map((v) => (
          <Card
            key={v.id}
            id={v.id}
            imgSrc={v.image}
            title={v.title}
            price={v.price}
          />
        ))}
      </StImgWrapper>
    </div>
  );
}

const StImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 20px;
  margin-top: 10px;
  margin: 0 auto;
  max-width: 600px;
`;
