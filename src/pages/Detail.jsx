import React from "react";
import styled from "styled-components";
import UpdateProduct from "../components/features/update/updateProduct";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";

function Detail() {
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
