import React from "react";
import styled from "styled-components";

const Div = styled.div`
    padding: 10px;
    color: #285430;
    border: 2px solid red;
    margin: 5px;
`
const InheritedDiv = styled(Div)`
    border: 1px solid red;
`

const Detail = () => {
    
  return (
    <Div>
    <InheritedDiv>
      <h3>상세페이지</h3>
      <div>
        <button>게시글 수정</button>
        <InheritedDiv>
            사진이 보여지는 곳
        </InheritedDiv>
        <div>
            제목
        </div>
        <div>
            작성자
        </div>
        <div>
            가격
        </div>
        <div>
            글 내용
        </div>
        </div>
        <InheritedDiv>댓글 쓰는 공간
        <div>
            <input placeholder="댓글 쓰기">
            </input>
            <button>
                댓글 달기
            </button>
        </div>
        </InheritedDiv>
        <InheritedDiv>
            댓글 보는 공간
        <InheritedDiv>
            쓰여진 댓글
            <button>
                수정
            </button>
            <button>
                삭제
            </button>
            <button>
                댓글 달기
            </button> 
            <InheritedDiv>
                쓰여진 대댓글
            </InheritedDiv>
        </InheritedDiv>
        </InheritedDiv>
    </InheritedDiv>
    </Div>
  );
};
export default Detail;