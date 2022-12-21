import { useState, useCallback } from 'react';
import Layout from '../components/common/Layout';
import Header from '../components/common/Header';
import ProductDetail from '../components/features/detail/ProductDetail';
import ReplyList from '../components/features/detail/ReplyList';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDetailProduct } from '../core/product';

function Detail() {
  const [detailProduct, setDetailProduct] = useState({});
  const { productId } = useParams();

  const getProductsDetail = useCallback(async () => {
    const { data } = await getDetailProduct(productId);
    setDetailProduct(data);
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
