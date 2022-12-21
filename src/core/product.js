import { instance, authInstance } from './axios';

// 리스트불러오기
export const getProduct = async () => {
  try {
    const data = await instance.get(`/api/products`);
    return data;
  } catch (error) {
    throw error;
  }
};

// 프로덕트 생성
// TODO: Form 데이터 형식?
export const createProduct = async (key, comment) => {
  try {
    await authInstance.post(`/api/products`, {
      KEY: key,
      VALUE: comment,
    });
  } catch (error) {
    throw error;
  }
};

// product 상세조회
export const getDetailProduct = async (productId) => {
  try {
    const data = await instance.get(`/api/products${productId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

// product 수정하기
export const updateProduct = async (productId) => {
  try {
    const data = await authInstance.put(`/api/products${productId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

// product 삭제하기
export const deleteProduct = async (productId) => {
  try {
    const data = await authInstance.delete(`/api/products${productId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
