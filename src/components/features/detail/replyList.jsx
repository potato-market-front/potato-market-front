import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useSelector } from "react-redux";
// import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { deleteReply, getReply } from "../../../redux/modules/replySlice";
import UpdateReply from "./UpdateReply";
// import CommentList from "./CommentList";
// import UpdateReply from "./UpdateReply";

function ReplyList() {
  const dispatch = useDispatch();
  const { error, replyList } = useSelector((state) => state.replyList);
  const [display, setDisplay] = useState(false);
  console.log("replyList값:", replyList);

  // updateReply와 연결되는 부분
  const reply = useSelector((state) => state.replyList.reply);
  const [content, setContent] = useState(reply.content);

  // useEffect(() => {
  //   dispatch(getReply());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(getReply());
  }, [dispatch, replyList.length]);

  useEffect(() => {
    setContent(reply.content);
    console.log("이펙트");
  }, [reply]);

  if (error) {
    return <div>{error.message}</div>;
  }

  const onDeleteHandler = (itemId) => {
    console.log(itemId);
    dispatch(deleteReply(itemId));
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
                <UpdateReply />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ReplyList;
