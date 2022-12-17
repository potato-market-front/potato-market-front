import styled from "styled-components";
import { COLORS } from "../../styles/colors";
// import Logo from "../../../assets/png/potato.png";

export default function Header() {
  return (
    <StHeader>
      <StIconWrap>
        {/* <img alt="logo" src={Logo} width="40px" /> */}
        <StLogo>감자마-켓</StLogo>
      </StIconWrap>
      <button>로그아웃</button>
    </StHeader>
  );
}

const StHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  background-color: ${COLORS.BASE};
  height: 36px;
`;
const StIconWrap = styled.div`
  display: flex;
  align-items: center;
`;
const StLogo = styled.span`
  margin: 0 8px;
  font-size: 12px;
`;
