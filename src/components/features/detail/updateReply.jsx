import React, { useState } from "react";

function UpdateReply() {
  const [display, setDisplay] = useState(false);
  const [replyInput, setReplyInput] = useState("");

  return (
    <div>
      <button>수정</button>
    </div>
  );
}
export default UpdateReply;
