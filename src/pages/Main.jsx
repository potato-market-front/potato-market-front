import React from "react";
import Layout from "../components/common/Layout";
import ProductList from "../components/features/main/ProductList";
import Header from "../components/common/Header";

export default function MainPage() {
  return (
    <>
      <Layout>
        <Header />
        <ProductList />
      </Layout>
    </>
  );
}
