import React from 'react';
import styled from 'styled-components';
import DetailProductForm from '../create/DetailProductForm';

const Div = styled.div`
  padding: 10px;
  border: 1px solid red;
  margin: 5px;
`;
const InheritedDiv = styled(Div)`
  border: 1px solid red;
`;
function ProductDetail() {
  return (
    <Div>
      <DetailProductForm />
    </Div>
  );
}
export default ProductDetail;
