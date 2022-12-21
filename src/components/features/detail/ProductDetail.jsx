import React from 'react';
import styled from 'styled-components';
import { COLORS, GRAY_COLORS } from '../../../styles/colors';

import SmallButton from '../../common/SmallButton';

import { useNavigate, useParams } from 'react-router-dom';
import { deleteProduct } from '../../../core/product';

export default function ProductDetail({ detailProduct }) {
  const { title, image, price, content } = detailProduct;
  const navigate = useNavigate();
  const { productId } = useParams();
  const onClickToUpdate = () => {
    navigate(`/update/${productId}`);
  };
  const onClickDelete = async () => {
    await deleteProduct(productId);
    navigate(`/`);
  };

  return (
    <StContainer>
      <StButtonWrap>
        <SmallButton onClick={onClickToUpdate}>게시글 수정</SmallButton>
        <SmallButton onClick={onClickDelete}>게시글 삭제</SmallButton>
      </StButtonWrap>
      <StDetilProductContainer>
        <StImgContainer>
          <StImg src={image} />
        </StImgContainer>
        <StSpan>{title}</StSpan>
        <StSpan>{price}</StSpan>
        <StContent>{content}</StContent>
      </StDetilProductContainer>
    </StContainer>
  );
}
const StContainer = styled.div``;
const StImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const StDetilProductContainer = styled.section`
  position: relative;
`;
const StButtonWrap = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
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
