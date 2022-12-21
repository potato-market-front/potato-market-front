import { useState, useCallback } from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import ProductDetail from '../components/features/detail/ProductDetail';
import ReplyList from '../components/features/detail/ReplyList';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function Detail() {
  const [detailProduct, setDetailProduct] = useState({});
  const { productId } = useParams();

  const getProductsDetail = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `http://3.35.218.111/api/products/${productId}`
      );
      setDetailProduct(data);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }, [productId]);

  useEffect(() => {
    getProductsDetail();
  }, [getProductsDetail]);

  return (
    <>
      <Header />
      <Layout>
        <ProductDetail detailProduct={detailProduct} />
        <ReplyList detailProduct={detailProduct} />
      </Layout>
    </>
  );
}
export default Detail;
