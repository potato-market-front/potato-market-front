import React from 'react';
import styled from 'styled-components';
import { COLORS, GRAY_COLORS } from '../../../styles/colors';
import axios from 'axios';
import SmallButton from '../../common/SmallButton';

import { useNavigate, useParams } from 'react-router-dom';
import { useState, useCallback } from 'react';
import { useEffect } from 'react';

export default function ProductDetail() {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { productId } = useParams();

  const onClickToUpdate = () => {
    navigate(`/update/${productId}`);
  };

  const getProductsList = useCallback(async () => {
    const { data } = await axios.get(
      `http://localhost:3001/products/${productId}`
    );
    setProduct(data);
  }, [productId]);

  useEffect(() => {
    getProductsList();
  }, [getProductsList]);

  return (
    <>
      <StButtonWrap>
        <SmallButton onClick={onClickToUpdate}>게시글 수정</SmallButton>
      </StButtonWrap>
      <StDetilProductContainer>
        <StImgContainer>
          <StImg src={product.image} />
        </StImgContainer>
        <StSpan>{product.title}</StSpan>
        <StSpan>{product.price}</StSpan>
        <StContent>{product.content}</StContent>
      </StDetilProductContainer>
    </>
  );
}

const StImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const StDetilProductContainer = styled.section`
  position: relative;
  width: 320px;
  margin: 0 auto;
`;
const StButtonWrap = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`;
const StImgContainer = styled.div`
  width: 100%;
  height: 160px;
  text-align: center;
  border: 1px ${COLORS.POSITIVE} solid;
  color: ${COLORS.POINT};
  border-radius: 8px;
  margin-bottom: 16px;
  overflow: hidden;
`;
const StSpan = styled.span`
  display: block;
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: gray solid 0.5px;
`;
const StContent = styled.div`
  width: 100%;
  height: 160px;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: ${GRAY_COLORS.GRAYD} solid 0.5px;
`;
