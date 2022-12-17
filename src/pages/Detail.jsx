import React from 'react';
import styled from 'styled-components';
import UpdateProduct from '../components/features/update/updateProduct';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import { useParams } from 'react-router-dom';

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;

function Detail() {
  const { productId } = useParams();
  return (
    <Layout>
      <Header />
      <UpdateProduct />
    </Layout>
  );
}
export default Detail;
/* 
className은 나중에 적용할 부분을 이해하기 편하도록 기입.
*/
