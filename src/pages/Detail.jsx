import React from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import ProductDetail from '../components/features/detail/ProductDetail';

function Detail() {
  return (
    <>
      <Header />
      <Layout>
        <ProductDetail />
      </Layout>
    </>
  );
}
export default Detail;
