import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

// const CARD_LIST = [
//   {
//     id: '1',
//     title: 'Ugg',
//     image:
//       'https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop',
//     price: 120000,
//     createdAt: '2022-11-30T17:45:43.726338',
//     modifiedAt: '2022-11-30T17:45:43.726338',
//   },
//   {
//     id: '2',
//     title: 'Ugg',
//     image:
//       'https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop',
//     price: 120000,
//     createdAt: '2022-11-30T17:45:43.726338',
//     modifiedAt: '2022-11-30T17:45:43.726338',
//   },
//   {
//     id: '3',
//     title: 'Ugg',
//     image:
//       'https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop',
//     price: 120000,
//     createdAt: '2022-11-30T17:45:43.726338',
//     modifiedAt: '2022-11-30T17:45:43.726338',
//   },
//   {
//     id: '4',
//     title: 'Ugg',
//     image:
//       'https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop',
//     price: 120000,
//     createdAt: '2022-11-30T17:45:43.726338',
//     modifiedAt: '2022-11-30T17:45:43.726338',
//   },
//   {
//     id: '5',
//     title: 'Ugg',
//     image:
//       'https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop',
//     price: 120000,
//     createdAt: '2022-11-30T17:45:43.726338',
//     modifiedAt: '2022-11-30T17:45:43.726338',
//   },
//   {
//     id: '6',
//     title: 'Ugg',
//     image:
//       'https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop',
//     price: 120000,
//     createdAt: '2022-11-30T17:45:43.726338',
//     modifiedAt: '2022-11-30T17:45:43.726338',
//   },
//   {
//     id: '7',
//     title: 'airPod',
//     image:
//       'https://www.apple.com/newsroom/images/product/airpods/standard/Apple-AirPods-Pro-2nd-gen-hero-220907_big.jpg.large.jpg',
//     price: 220000,
//     createdAt: '2022-11-30T17:45:43.726338',
//     modifiedAt: '2022-11-30T17:45:43.726338',
//   },
// ];

export default function ProductList() {
  const [cardList, setCardList] = useState([]);

  const getProductsList = useCallback(async () => {
    const { data } = await axios.get("http://localhost:8080/products");
    console.log(data);
    setCardList(data);
  }, []);

  useEffect(() => {
    getProductsList();
  }, [getProductsList]);

  return (
    <div className="container">
      <StImgWrapper>
        {cardList.map((v) => (
          <Card
            key={v.id}
            id={v.id}
            imgSrc={v.image}
            title={v.title}
            price={v.price}
          />
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
