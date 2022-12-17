import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { deleteReply, getReply } from "../../../redux/modules/replySlice";
// import CommentList from "./CommentList";
// import UpdateReply from "./UpdateReply";

function ReplyList() {
  const dispatch = useDispatch();
  const { error, replyList } = useSelector((state) => state.replyList);
  const [display, setDisplay] = useState(false);
  console.log("replyList값", replyList);

  useEffect(() => {
    dispatch(getReply());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getReply());
  }, [dispatch, replyList.length]);

  if (error) {
    return <div>{error.message}</div>;
  }

  const onDeleteHandler = (itemId) => {
    console.log(itemId);
    dispatch(deleteReply(itemId));
    dispatch(getReply());
  };

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        {display && "댓글 숨기기"}
        {!display &&
          (replyList.length === 0
            ? "답글 보기"
            : `${replyList.length}개의 답글 보기`)}
      </button>
      <div>
        {display &&
          replyList.map((item) => (
            <div key={item.id}>
              <div style={{ border: "1px solid black" }}>
                {/* <div style={{ fontSize: "0.7rem" }}>{item.nickname}</div> */}
                <div>{item.content}</div>
              </div>
              <div>
                <button
                  onClick={() => {
                    onDeleteHandler(item.id);
                  }}
                >
                  삭제
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ReplyList;
