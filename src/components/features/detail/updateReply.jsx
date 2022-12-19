import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import {
  getReply,
  getOneReply,
  updateReply,
} from "../../../redux/modules/replySlice";

function UpdateReply() {
  const dispatch = useDispatch();
  //   const param = useParams();

  // 전역 state를 불러오는 구간
  const { error, replyList } = useSelector((state) => state.replyList);
  const reply = useSelector((state) => state.replyList.reply);
  console.log("한개:", reply);
  console.log("한개의 id:", reply.id);
  console.log("한개의 content:", reply.content);

  // 1개의 reply만 확인
  //   const replyObject = replyList.find((item) => item.id === reply.id);
  //   console.log("replyId", replyObject);
  //   console.log("replyObject.id", replyObject.id);
  //   console.log("replyObject.content", replyObject.content);

  // 1개의 id만 가져오기
  const id = reply.id;
  //   const id = replyObject.id;

  // 수정할 값을 불러오는 구간
  const [content, setContent] = useState(reply.content);
  console.log("수정할 값:", content);

  // 수정 상태인지 확인하는 구간
  const [replyDisplay, setreplyDisplay] = useState(false);
  console.log("replyDisplay 상태:", replyDisplay);

  // getOneReply 해서 1개의 값 가져오기
  useEffect(() => {
    dispatch(getOneReply(reply.id));
    // 렌더링 될 때 getOneReply가 한번 실행된다
    console.log("getid 이펙트");
    /*eslint-disable*/
  }, [reply.content]);

  useEffect(() => {
    setContent(reply.content);
    dispatch(getReply());
    // 렌더링 될 때 setContent를 통해서 reply.content의 내용을 content에 반영한다.
    console.log("이펙트");
  }, [reply.content]);

  //
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

  if (error) {
    return <div>{error.message}</div>;
  }

  // 위에 if문을 돌려서 리플라이 디스플레이가 false면 수정 버튼, true일 땐 저장 버튼
  // true로 바뀌면 다른 버튼이 보이고, 수정 버튼은 edithandler가 필요없다. display만 변경
  // if문의 리턴값으로 디브 >> 인풋필드로 변경한다.
  // 저장 버튼에 에딧 핸들러를 넣어놓는다.
  // 수정 버튼은 수정을 한다 안 한다의 상태값만 알려준다.

  // 수정 버튼 클릭 시 인풋 필드로 변하는 로직도 저장
  // update 방식 자체는 지금이랑 동일하게 해도 됨

  // 댓글의 id를 받아와서 get을 실행시킨다.
  // 대댓글은 언제나 댓글의 id가 필요하다.

  // dispatch는 전역 상태로 관리한다.
  // redux를 사용해도 props는 여전히 사용 가능

  if (replyDisplay === true) {
    // 깂이 true일 때 버튼 이름이 "저장"으로 변경
    return (
      <div>
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></input>
        <button onClick={onEditHandler}>저장</button>
        <button
          onClick={() => {
            setreplyDisplay(false);
          }}
        >
          취소
        </button>
      </div>
    );
    // 저장 버튼일 때 edithandler 실행
  } else {
    return (
      <button
        onClick={() => {
          setreplyDisplay(true);
          // 지금 일단 false인데, 수정 버튼 누르면 setreplyDisplay를 통해 값을 true로 바꾸라는 뜻
        }}
      >
        수정
      </button>
    );
  }
}

// 수정으로 보이는 버튼도 저장으로 바꾸고, 저장 버튼 클릭 시 디스패치
export default UpdateReply;

// 로그인 여부는 토큰을 웹 브라우저에 저장한 값을 api 통신으로 갖고 오고, 그 값으로 백엔드가 확인하면 그 알려주는 결과값에 따라 화면에 출력

// crud를 할 때 어떻게 해서 구현이 되는지 - 이걸 전부 이해하고 있는지가 중요하다
// 기본적으로 update는 post와 비슷하다 (바꿀 때 기존에 있었던 key 값의 value를 변경해야한다 - 대신 put과 patch의 차이점이 중요하다)
// put은 전체값을 다 넘겨야한다. patch는 전체값이 아니라 바꾸고싶은 값만 전달할 수 있다.
// put은 다 안 넘기면 에러가 나거나 빈값이 보여질 수 있다 (나중에 확인 필요!)
// patch는 내가 넘긴 값만 바뀌게 된다. 안넘기는 변경된 내역이 추적 안돼서 저장도 안됨

// delete id값 전달이 중요하고 (보통 map과 필터를 사용)
// 반복적으로 보여야하는 컴포넌트를 하나의 코드로 명령하는게 map이다.
// 필터는 새로운 배열 만들기라서 map과는 다르다.
//  [{1},{2},{3},{4}] >> a.id = 1 >> [{2},{3},{4}] (이렇게 변하는게 필터)

// find는 하나의 값만 찾고싶을 때 사용한다. (같은 조건이 여러개면 처음 만나는 애만 리턴을 한다.)
// find는 많이 사용하진 않는다 = parameter를 잘 사용하면 이걸 통해서 주소값에 id를 넘길 수 있기 때문에
// 내가 가진 데이터 중 하나만 찾을 때 find를 사용한다.
