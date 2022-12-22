import Header from '../components/common/Header';
import Layout from '../components/common/Layout';
import ProductForm from '../components/features/create/ProductForm';

export default function Update() {
  return (
    <>
      <Header />
      <Layout>
        <ProductForm type='update' />
      </Layout>
    </>
  );
}
