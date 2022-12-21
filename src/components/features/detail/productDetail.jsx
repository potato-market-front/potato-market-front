import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../redux/modules/productSlice";
import TextButton from "../../common/TextButton";
import { deleteReply } from "../../../redux/modules/replySlice";
import SmallButton from "../../common/SmallButton";
import CreateReply from "./CreateReply";

function ProductDetail() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // 전체 상태
  const select = useSelector((state) => state);

  const productList = select.products.products;
  console.log("productList:", productList);

  const success = select.commentList.isSuccess;
  console.log("success", success);

  const productDetail = productList.find(
    (item) => item.id === Number(productId)
  );
  console.log("나와:", productDetail);

  const commentList = productDetail.commentList;
  console.log("댓글:", commentList);

  // useEffect(() => {
  //   dispatch(getReply());
  // }, [dispatch, commentList]);

  const [display, setDisplay] = useState(false);

  const onDeleteHandler = (itemId) => {
    console.log(itemId);
    dispatch(deleteReply(itemId));
  };

  useEffect(() => {
    dispatch(getProduct(Number(productId)));
  }, [dispatch, productId]); // productId가 바뀌는 데이터가 아니라서 처음 페이지 들어왔을 때 1번만 실행

  useEffect(() => {
    dispatch(getProduct());
    console.log("댓글등록");
  }, [dispatch, commentList.length]);
  // 길이가 변경된걸 알려면 getproduct가 먼저 실행되어야 한다.
  // 서버에서 댓글 성공 시 200코드를 받는데, 이때 productId에 대해서 다시 getProduct를 해야한다.
  // 리덕스 상태에서 api가 요청이 올때마다 status가 변하는 변수를 하나 둬라 (true이면 실행이라던지)

  console.log("도착점:", commentList);

  // useEffect(() => {
  //   dispatch(getProduct());
  //   console.log("시도확인");
  // }, [dispatch, productList.length]);

  return (
    <div>
      <div>
        <div style={{ fontSize: "11px" }}>게시글 ID: {productDetail.id}</div>
        <div style={{ fontSize: "20px" }}>{productDetail.title}</div>
        <div style={{ fontSize: "13px" }}>가격: {productDetail.price}</div>
        <div>{productDetail.content}</div>
      </div>
      <CreateReply />
      <SmallButton
        onClick={() => {
          setDisplay(!display);
        }}
      >
        {display && "Hide"}
        {!display &&
          (commentList.length === 0
            ? "Replies"
            : `View ${commentList.length} more replies`)}
      </SmallButton>
      <div>
        {display &&
          commentList.map((item) => (
            <div key={item.id}>
              <div
                style={{
                  border: "1px solid #DAE2B6",
                  padding: "10px",
                  margin: "5px auto",
                }}
              >
                {/* <div style={{ fontSize: "0.7rem" }}>{item.nickname}</div> */}
                <div style={{ fontSize: "11px" }}>닉네임: {item.nickname}</div>
                <div>{item.content}</div>
                <div style={{ fontSize: "10px" }}>{item.createdAt}</div>
              </div>
              <div>
                <TextButton
                  margin={"5px"}
                  onClick={() => {
                    onDeleteHandler(item.id);
                  }}
                >
                  Delete
                </TextButton>
                {/* <UpdateReply /> */}
                {/* <Component key={item.id} content={content} /> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
export default ProductDetail;

// 컴포넌트가 마운트 됐을 때, 새로고침 = 마운트, 데이터가 없어서 생기는 에러인데,
// 리덕스 상태가 날아갔을 때 데이터를 다시 가져와야 한다 (GetProduct를 다시 호출)
// useEffect의 의존성 배열을 빈 배열로 둬야한다.
