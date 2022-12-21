import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProduct } from "../../../redux/modules/productSlice";
import Button from "../../common/Button";

export default function ProductList() {
  const dispatch = useDispatch();
  const select = useSelector((state) => state);
  console.log("전체 state:", select);

  const { products } = useSelector((state) => state.products);

  // const [cardList, setCardList] = useState([]);

  // const getProductsList = useCallback(async () => {
  //   const { data } = await axios.get("http://localhost:3001/products");
  //   console.log(data);
  //   setCardList(data);
  // }, []);

  const onDeleteHandler = (itemId) => {
    console.log("product delete id:", itemId);
    dispatch(deleteProduct(itemId));
  };

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="container">
      <div>
        {products.map((item) => (
          <div>
            <Link
              to={`/detail/${item.id}`}
              key={item.id}
              style={{ textDecoration: "none", color: "#285430" }}
            >
              <StList>
                <div>
                  <div style={{ marginBottom: "10px" }}>{item.id}</div>
                  <div style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
                    제목: {item.title}
                  </div>
                  <div style={{ width: "1000px" }}>{item.content}</div>
                </div>
                {/* <Card
              key={v.id}
              id={v.id}
              imgSrc={v.image}
              title={v.title}
              price={v.price}
            /> */}
                <div>
                  <Button
                    onClick={(event) => {
                      event.preventDefault();
                      onDeleteHandler(item.id);
                    }}
                  >
                    삭제
                  </Button>
                </div>
              </StList>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const StList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border: 2px solid #fffbe9;
  gap: 10px;
  text-decoration: none;
`;
