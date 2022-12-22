import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateReply } from "../../../redux/modules/replySlice";
import TextButton from "../../common/TextButton";
import Input from "../../common/Input";

function UpdateReply() {
  const dispatch = useDispatch();

  // 전역 state를 불러오는 구간
  const select = useSelector((state) => state);
  const productList = select.products.products;
 

  const comment = [productList.commentList];


  // 수정할 값을 불러오는 구간
  const [content, setContent] = useState(productList.commentList);

  // 수정 상태인지 확인하는 구간
  const [replyDisplay, setreplyDisplay] = useState(false);
 

  //
  const onEditHandler = () => {
    const editReply = { content };
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
    // 저장 버튼일 때 edithandler 실행
  } else {
    return (
      <TextButton
        onClick={() => {
          setreplyDisplay(true);
        }}
      >
        Edit
      </TextButton>
    );
  }
}


export default UpdateReply;
