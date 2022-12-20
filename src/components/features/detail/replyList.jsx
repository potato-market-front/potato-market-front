import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteReply,
  getReply,
  postReply,
} from "../../../redux/modules/replySlice";
import UpdateReply from "./UpdateReply";
import TextButton from "../../common/TextButton";
import SmallButton from "../../common/SmallButton";
import Input from "../../common/Input";

function ReplyList() {
  const dispatch = useDispatch();
  const { error, replyList } = useSelector((state) => state.replyList);
  const [display, setDisplay] = useState(false);
  console.log("replyList값:", replyList);

  // updateReply와 연결되는 부분
  const reply = useSelector((state) => state.replyList.reply);
  const [content, setContent] = useState(reply.content);

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
      <SmallButton
        onClick={() => {
          setDisplay(!display);
        }}
      >
        {display && "Hide"}
        {!display &&
          (replyList.length === 0
            ? "Replies"
            : `View ${replyList.length} more replies`)}
      </SmallButton>
      <div>
        {display &&
          replyList.map((item) => (
            <div key={item.id}>
              <div
                style={{
                  border: "1px solid #DAE2B6",
                  padding: "10px",
                  margin: "5px auto",
                }}
              >
                {/* <div style={{ fontSize: "0.7rem" }}>{item.nickname}</div> */}
                <div style={{ fontSize: "11px" }}>{item.nickname}</div>
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
                <UpdateReply />
                {/* <Component key={item.id} content={content} /> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ReplyList;

// Update랑 List랑 합쳐서 state를 하나 줘야한다 (boolean)

const StInputGroup = styled.div`
  margin-top: 20px;

  gap: 30px;
`;
