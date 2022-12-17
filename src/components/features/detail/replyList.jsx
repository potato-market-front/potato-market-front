import React from "react";
import styled from "styled-components";
import UpdateReply from "./updateReply";

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;

function ReplyList() {
  return (
    <Div>
      <div>
        쓰여진 대댓글
        <UpdateReply />
        <button>삭제</button>
      </div>
    </Div>
  );
}
export default ReplyList;
