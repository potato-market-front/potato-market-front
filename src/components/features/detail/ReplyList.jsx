import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  deleteReply,
  getReply,
  getOneReply,
  updateReply,
} from "../../../redux/modules/replySlice";
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
  console.log("한개:", reply);
  console.log("한개의 id:", reply.id);
  console.log("한개의 content:", reply.content);

  // 1개의 id만 가져오기
  const id = reply.id;

  // 수정할 값을 불러오는 구간
  console.log("수정할 값:", content);

  // 수정 상태인지 확인하는 구간
  const [replyDisplay, setreplyDisplay] = useState(false);
  console.log("replyDisplay 상태:", replyDisplay);

  const edit = true;

  useEffect(() => {
    dispatch(getReply());
  }, [dispatch, replyList.length]);

  // getOneReply 해서 1개의 값 가져오기
  useEffect(() => {
    dispatch(getOneReply(reply.id));
    // 렌더링 될 때 getOneReply가 한번 실행된다
    console.log("getid 이펙트");
    /*eslint-disable*/
  }, [reply.content]);

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

  const onEditHandler = () => {
    const editReply = { id, content };
    console.log("editReply:", editReply);
    if (content === "") {
      alert("답글 내용을 입력해주세요.");
    } else {
      dispatch(updateReply(editReply));
      setreplyDisplay(false);
    }
  };

  if (replyDisplay === true) {
    // 깂이 true일 때 버튼 이름이 "저장"으로 변경
    return (
      <div>
        <Input
          lebel="답글을 입력해주세요."
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></Input>
        <TextButton onClick={onEditHandler}>Save</TextButton>
        <TextButton
          onClick={() => {
            setreplyDisplay(false);
          }}
        >
          Cancel
        </TextButton>
      </div>
    );
  }

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
                <TextButton
                  onClick={() => {
                    setreplyDisplay(true);
                    // 지금 일단 false인데, 수정 버튼 누르면 setreplyDisplay를 통해 값을 true로 바꾸라는 뜻
                  }}
                >
                  Edit
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

export default ReplyList;

// Update랑 List랑 합쳐서 state를 하나 줘야한다 (boolean)

const StInputGroup = styled.div`
  margin-top: 20px;
  gap: 30px;
`;
