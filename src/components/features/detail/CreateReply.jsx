import React, { useState } from "react";
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
      <Input
        value={replyInput}
        onChange={(event) => {
          setReplyInput(event.target.value);
        }}
      />
      <div>
        <div>
          <TextButton onClick={onPostHandler}>Comment</TextButton>
          <TextButton>Cancel</TextButton>
        </div>
        <div style={{ marginBottom: "10px" }}></div>
      </div>
    </div>
  );
}
export default CreateReply;
