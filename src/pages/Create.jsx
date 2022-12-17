import React from "react";
import Layout from "../components/common/Layout";
import Header from "../components/common/Header";
import CreateProduct from "../components/features/create/CreateProduct";

export default function Create() {
  return (
    <>
      <Header />
      <Layout>
        <CreateProduct />
      </Layout>
    </>
  );
}
