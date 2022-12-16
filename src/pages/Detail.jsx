import "./style.css";

const Detail = () => {
  return (
    <div id="container">
      <h3>상세페이지</h3>
      <div>
        <button>게시글 수정</button>
        <div>
            사진이 보여지는 곳
        </div>
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
        <div>댓글 쓰는 공간
        <div>
            <input placeholder="댓글 쓰기">
            </input>
            <button>
                댓글 달기
            </button>
        </div>
        </div>
        <div>
            댓글 보는 공간
        <div>
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
            <div>
                쓰여진 대댓글
            </div>
        </div>
        </div>
      
    </div>
  );
};
export default Detail;
