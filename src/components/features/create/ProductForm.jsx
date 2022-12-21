import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { COLORS, GRAY_COLORS } from "../../../styles/colors";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../redux/modules/productSlice";

// type은 create | update
// { type = "create", productData }
export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [content, setContent] = useState("");
  // const [image, setImage] = useState();
  // 'https://dnvefa72aowie.cloudfront.net/origin/article/202212/F4C802A00FB1B732CD39B1DE901A8D0BD5929CD3D51B3756FE7243F5ABEE6791.jpg?q=82&s=300x300&t=crop'

  const navigate = useNavigate();

  // const { id } = useParams();

  const dispatch = useDispatch();

  const onSaveHandler = async (e) => {
    e.preventDefault();
    const newProduct = { title, content, price };
    if (title === "" || content === "" || price === "") {
      alert("빈칸을 모두 채워주세요!");
    } else {
      dispatch(createProduct(newProduct));
      navigate("/");
      alert("작성 완료!");
      setTitle("");
      setPrice("");
      setContent("");
    }
  };

  // const onEditHandler = () => {
  //   dispatch(updateProduct());
  //   alert("수정 완료!");
  //   navigate("/");
  // };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  // //아직 구현 안됨
  // const onChangeImage = (e) => {
  //   setImage(e.target.value);
  // };

  return (
    <StCreateForm onSubmit={onSaveHandler}>
      {/* <StImgContainer>
        {image ? <StImg src={image} /> : "사진을 업로드 해주세요."}
      </StImgContainer> */}
      <StInput
        value={title}
        name="title"
        onChange={onChangeTitle}
        placeholder="제목"
      />
      <StInput
        value={price}
        name="price"
        onChange={onChangePrice}
        placeholder="가격"
      />
      <StTextarea
        value={content}
        name="content"
        onChange={onChangeContent}
        rows={10}
        placeholder="글내용"
      />
      <StButtonWrap>
        <StButton onClick={onSaveHandler}>저장하기</StButton>
      </StButtonWrap>
    </StCreateForm>
  );
}

const StCreateForm = styled.form`
  width: 320px;
  margin: 0 auto;
`;
// const StImgContainer = styled.div`
//   width: 100%;
//   height: 160px;
//   text-align: center;
//   border: 1px ${COLORS.POSITIVE} solid;
//   color: ${COLORS.POINT};
//   border-radius: 8px;
//   margin-bottom: 16px;
//   overflow: hidden;
// `;

const StInput = styled.input`
  display: block;
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: gray solid 0.5px;
`;
const StTextarea = styled.textarea`
  width: 100%;
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 4px;
  border: ${GRAY_COLORS.GRAYD} solid 0.5px;
`;

const StButton = styled.button`
  background-color: ${COLORS.POSITIVE};
  border: 0;
  color: ${GRAY_COLORS.WHITE};
  margin: 0 auto;
  padding: 4px 8px;
  cursor: pointer;
`;

const StButtonWrap = styled.div`
  text-align: center;
  padding: 4px 8px;
`;

// /*
//  * 이미지 리사이징 : 부모테그에 맞게 이미지 변경
//  * 참고 :  https://nykim.work/86
//  */
// const StImg = styled.img`
//   height: 100%;
//   width: 100%;
//   object-fit: contain;
// `;
