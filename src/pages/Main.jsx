import React from 'react';

import ProductList from '../components/features/main/ProductList';
import Header from '../components/common/Header';
import styled from 'styled-components';

export default function MainPage() {
  return (
    <>
      <Header />
      <Layout>
        <ProductList />
      </Layout>
    </>
  );
}

const Layout = styled.div`
  position: relative;

  margin: 0 auto;
  border: 2px solid #fffbe9;
  max-width: 768px;
  min-width: 350px;
  padding: 30px;
`;
