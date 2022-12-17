import React from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;

function CreateComment() {
  return (
    <Div>
      댓글 쓰는 공간
      <div>
        <input placeholder="댓글 쓰기"></input>
        <button>댓글 달기(post)</button>
      </div>
    </Div>
  );
}
export default CreateComment;
