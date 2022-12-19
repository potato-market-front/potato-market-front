import React from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import ProductForm from '../components/features/create/ProductForm';

export default function Create() {
  return (
    <>
      <Header />
      <Layout>
        <ProductForm type='create' />
      </Layout>
    </>
  );
}
