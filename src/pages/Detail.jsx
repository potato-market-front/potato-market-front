import React from "react";
import styled from "styled-components";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import { useParams } from "react-router-dom";
import ProductDetail from "../components/features/detail/ProductDetail";
import ReplyList from "../components/features/detail/ReplyList";
import CreateReply from "../components/features/detail/CreateReply";
// import ProductList from "../components/features/main/ProductList";

function Detail() {
  const { productId } = useParams();
  return (
    <div style={{ padding: "20px" }}>
      <Layout>
        <Header />
        <ProductDetail />
        <CreateReply />
        <ReplyList />
      </Layout>
    </div>
  );
}
export default Detail;
/* 
className은 나중에 적용할 부분을 이해하기 편하도록 기입.
*/
