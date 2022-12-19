import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { postReply } from "../../../redux/modules/replySlice";
import TextButton from "../../common/TextButton";
import Input from "../../common/Input";

function CreateReply() {
  const [replyInput, setReplyInput] = useState("");

  const dispatch = useDispatch();

  const onPostHandler = () => {
    if (replyInput === "") {
      alert("답글 내용을 입력해주세요.");
    } else {
      dispatch(postReply({ content: replyInput }));
      setReplyInput("");
    }
  };

  return (
    <div>
      <StInputGroup>
        <Input
          value={replyInput}
          onChange={(event) => {
            setReplyInput(event.target.value);
          }}
        />
      </StInputGroup>
      <div style={{ marginBottom: "10px" }}>
        <TextButton onClick={onPostHandler}>Reply</TextButton>
      </div>
    </div>
  );
}
export default CreateReply;

const StInputGroup = styled.div`
  margin-top: 20px;

  gap: 30px;
`;
