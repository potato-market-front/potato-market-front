import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postReply } from "../../../redux/modules/replySlice";
import TextButton from "../../common/TextButton";
import Input from "../../common/Input";
import { useParams } from "react-router-dom";

function CreateReply() {
  const [replyInput, setReplyInput] = useState("");
  const { productId } = useParams();

  const dispatch = useDispatch();

  const onPostHandler = () => {
    if (replyInput === "") {
      alert("답글 내용을 입력해주세요.");
    } else {
      dispatch(postReply({ productId, content: replyInput }));
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

// 상태를 추가한다. div에 값이 떠있고 작성하는건 Input
// 수정 중 상태를 추가해서 true일때 Input 태그 보여준ㄷ 삼항 연산자를 사용한다.
