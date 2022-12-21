import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getOneProduct } from "../../../redux/modules/productSlice";

function ProductDetail() {
  const { productId } = useParams();
  console.log(productId);
  const dispatch = useDispatch();

  // 전체 상태
  const select = useSelector((state) => state);
  console.log("전체 state:", select);

  const productList = select.products.products;
  console.log("productList:", productList);

  const productDetail = productList.find((item) => item.id === productId);
  console.log("productDetail:", productDetail);

  useEffect(() => {
    dispatch(getOneProduct(productId));
  }, [dispatch]);

  return (
    <div>
      <div>{productDetail.id}</div>
      <div>{productDetail.price}</div>
      <div>{productDetail.title}</div>
      <div>{productDetail.content}</div>
    </div>
  );
}
export default ProductDetail;
