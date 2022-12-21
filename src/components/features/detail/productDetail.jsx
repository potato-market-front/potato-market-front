import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../redux/modules/productSlice";
import TextButton from "../../common/TextButton";
import { deleteReply } from "../../../redux/modules/replySlice";
import SmallButton from "../../common/SmallButton";
import CreateReply from "../detail/CreateReply";

function ProductDetail() {
  const { productId } = useParams();
  // console.log("productId", Number(productId));
  const dispatch = useDispatch();

  // 전체 상태
  const select = useSelector((state) => state);
  // console.log("전체 state:", select);
  const [display, setDisplay] = useState(false);

  const productList = select.products.products;
  console.log("productList:", productList);

  const productDetail = productList.find(
    (item) => item.id === Number(productId)
  );
  console.log("나와:", productDetail);

  const commentList = productDetail.commentList;
  console.log("댓글:", commentList);

  // console.log("댓글1:", commentList[0].id);
  // const productDetail = productList.find(
  //   (item) => item.id === Number(productId)
  // );

  const onDeleteHandler = (itemId) => {
    console.log(itemId);
    dispatch(deleteReply(itemId));
  };

  useEffect(() => {
    dispatch(getProduct(Number(productId)));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProduct());
    console.log("시도확인");
  }, [dispatch, productList.length]);

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
