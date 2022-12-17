import React, { useState } from "react";
<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Input from "../../common/Input";
import { postReply } from "../../../redux/modules/replySlice";

function CreateReply() {
  const [display, setDisplay] = useState(false);

  const dispatch = useDispatch();
  const reply = useSelector((state) => state.replyList);
  console.log(reply);

  const replyHandler = () => {};
=======
import styled from "styled-components";
import Input from "../../common/Input";

function CreateReply() {
  const [reply, setRely] = useState("");
>>>>>>> 4b3865d (📝Add: Reply 페이지 ui 추가 및 common component 일부 수정)

  return (
    <StTopContainer>
      <StInputGroup>
        <Input
          type="text"
          name="comment"
          width={"400px"}
          label={"답글달기"}
        ></Input>
        <StButtonGroup>
          <StButton>등록</StButton>
        </StButtonGroup>
      </StInputGroup>
    </StTopContainer>
  );
}

export default CreateReply;

const StTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 50px;
`;

const StInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const StButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  gap: 20px;
`;

const StButton = styled.button`
  width: 30px;
  height: 15px;
  border: none;
  font-size: 12px;
  background-color: transparent;
  color: #285430;
  cursor: pointer;
  text-decoration: underline;
  font-family: Diary;
`;
