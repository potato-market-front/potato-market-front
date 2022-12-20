import React from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import CreateComment from '../components/features/detail/CreateComment';
import CommentList from '../components/features/detail/CommentList';
import ProductDetail from '../components/features/detail/ProductDetail';

function Detail() {
  return (
    <>
      <Header />
      <Layout>
        <ProductDetail />
        <CreateComment />
        <CommentList />
      </Layout>
    </>
  );
}
export default Detail;

