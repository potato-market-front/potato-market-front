import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import ProductForm from '../components/features/create/ProductForm';

const DATA = {
  title: 'title입니다',
  price: 120000,
  content: '내용입니다.',
};

export default function Update() {
  const { productId } = useParams();

  console.log({ productId });

  return (
    <>
      <Header />
      <Layout>
        <ProductForm type='update' productData={DATA} />
      </Layout>
    </>
  );
}
