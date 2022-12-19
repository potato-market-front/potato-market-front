import React from "react";
import styled from "styled-components";

function CreateComment() {
  return (
    <div>
      댓글 쓰는 공간 CreateComment
      <div>
        <input placeholder="댓글 쓰기"></input>
        <button>댓글 달기(post)</button>
      </div>
    </div>
  );
}
export default CreateComment;
