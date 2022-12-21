import React from "react";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import ProductDetail from "../components/features/detail/ProductDetail";

function Detail() {
  return (
    <div style={{ padding: "20px" }}>
      <Layout>
        <Header />
        <ProductDetail />
      </Layout>
    </div>
  );
}
export default Detail;
/* 
className은 나중에 적용할 부분을 이해하기 편하도록 기입.
*/
