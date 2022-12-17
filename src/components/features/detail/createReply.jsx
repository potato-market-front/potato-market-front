import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postReply } from "../../../redux/modules/replySlice";

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
      <div>
        <input
          type="text"
          value={replyInput}
          onChange={(event) => {
            setReplyInput(event.target.value);
          }}
        ></input>
      </div>
      <div>
        <button onClick={onPostHandler}>답글 달기</button>
      </div>
      <div>
        <button>수정</button>
      </div>
    </div>
  );
}
export default CreateReply;
