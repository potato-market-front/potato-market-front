import { authInstance } from './axios';
import { customAlphabet } from 'nanoid';

// 랜덤 숫자 만들어서 코멘트에 아이디를 만들어줌

// 코멘트 생성
export const createAuthComment = async (productId, comment) => {
  // const nanoid = customAlphabet('01234567899', 6);
  // const commentsId = nanoid();
  try {
    const data = await authInstance.post(
      `api/products/${productId}/comments`,
      // `api/products/${productId}/comments/${commentsId}`,
      {
        comment: comment,
      }
    );
    return data;
  } catch (error) {
    return console.log(error);
  }
};

export const updateAuthComment = async (commentId, comment) => {
  try {
    await authInstance.put(`/api/products/comments/${commentId}`, {
      comment: comment,
    });
  } catch (error) {
    throw error;
  }
};

export const deleteAuthComment = async (commentId) => {
  try {
    await authInstance.delete(`/api/products/comments/${commentId}`);
  } catch (error) {
    return console.log(error);
  }
};
