import React, { useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../../redux/modules/productSlice";
import Button from "../../common/Button";

export default function ProductList() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);
  console.log("전체 state:", select);

  const { products, error } = useSelector((state) => state.products);
  console.log("products:", products);

  // const [cardList, setCardList] = useState([]);

  // const getProductsList = useCallback(async () => {
  //   const { data } = await axios.get("http://localhost:3001/products");
  //   console.log(data);
  //   setCardList(data);
  // }, []);

  const onDeleteHandler = (itemId) => {
    console.log("product delete id:", itemId);
    dispatch(deleteProduct(itemId));
  };

  useEffect(() => {
    dispatch(getProduct);
  }, [dispatch]);

  return (
    <div className="container">
      <StImgWrapper>
        {products.map((v) => (
          <Link to={`/detail/${v.id}`} key={v.id}>
            <div>
              <div style={{ marginBottom: "10px" }}>{v.id}</div>
              <div style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                제목: {v.title}
              </div>
              <div style={{ width: "1000px" }}>{v.content}</div>
            </div>
            {/* <Card
              key={v.id}
              id={v.id}
              imgSrc={v.image}
              title={v.title}
              price={v.price}
            /> */}
            <Button
              onClick={(event) => {
                event.preventDefault();
                onDeleteHandler(v.id);
              }}
            >
              삭제
            </Button>
          </Link>
        ))}
      </StImgWrapper>
    </div>
  );
}

const StImgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px 20px;
  margin-top: 10px;
  margin: 0 auto;
  max-width: 600px;
`;
