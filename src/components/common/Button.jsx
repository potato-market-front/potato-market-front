import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledBtn = styled.button`
  display: inline-block;
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "45px"};
  padding: 10px 20px;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: pointer;

  color: #dae2b6;

  background: transparent;
  border-color: ${(props) => props.color || "#DAE2B6"};
  box-shadow: 0 5px 5px -5px rgba($c, 0.15), 0 10px 10px -5px rgba($c, 0.15),
    0 15px 15px -5px rgba($c, 0.15), 0 20px 20px -5px rgba($c, 0.15);
  transition: 0.25s ease;
  &:hover {
    color: ${(props) => props.color || "#fff"};
    background-color: ${(props) => props.color || "#DAE2B6"};
  }
`;

function Button({ width, height, color, children, onClick }) {
  return (
    <StyledBtn width={width} height={height} color={color} onClick={onClick}>
      <span>{children}</span>
    </StyledBtn>
  );
}

// Button.propTypes = {
//   // color: PropTypes.node.isRequired,
//   // children: PropTypes.node.isRequired,
//   // onClick: PropTypes.node.isRequired,
// };
export default Button;
