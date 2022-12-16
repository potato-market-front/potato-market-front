import { useParams, useNavigate } from 'react-router-dom';

export default function Update() {
  const { productId } = useParams();

  console.log({ productId });

  return <>Update</>;
}
