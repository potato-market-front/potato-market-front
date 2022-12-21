import { instance, authInstance } from './axios';

// 리스트불러오기
// 완료
export const getProduct = async () => {
  try {
    const data = await instance.get(`/api/products`);
    return data;
  } catch (error) {
    throw error;
  }
};

// 프로덕트 생성
// 완료
export const createProduct = async (data) => {
  try {
    await authInstance.post(`/api/products`, data);
  } catch (error) {
    throw error;
  }
};

// product 상세조회
//
export const getDetailProduct = async (productId) => {
  try {
    const data = await instance.get(`/api/products/${productId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

// product 수정하기
export const updateProduct = async (productId, data) => {
  try {
    await authInstance.put(`/api/products/${productId}`, data);
  } catch (error) {
    throw error;
  }
};

// product 삭제하기
export const deleteProduct = async (productId) => {
  try {
    const data = await authInstance.delete(`/api/products/${productId}`);
    return data;
  } catch (error) {
    throw error;
  }
};
