import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledBtn = styled.button`
  display: inline-block;
  width: ${(props) => props.width || 'auto'};
  height: ${(props) => props.height || '24px'};
  padding: 4px 8px;
  border-radius: 6px;
  border-width: 2px;
  border-style: solid;
  font-size: ${(props) => props.fontSize || '12px'};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  color: #dae2b6;
  background: transparent;
  border-color: ${(props) => props.color || '#DAE2B6'};
  box-shadow: 0 5px 5px -5px rgba($c, 0.15), 0 10px 10px -5px rgba($c, 0.15),
    0 15px 15px -5px rgba($c, 0.15), 0 20px 20px -5px rgba($c, 0.15);
  transition: 0.25s ease;
  &:hover {
    color: ${(props) => props.color || '#fff'};
    background-color: ${(props) => props.color || '#DAE2B6'};
  }
`;

function SmallButton({ width, height, color, children, fontSize, onClick }) {
  return (
    <StyledBtn
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
      onClick={onClick}
    >
      <span>{children}</span>
    </StyledBtn>
  );
}

SmallButton.propTypes = {
  children: PropTypes.node.isRequired,
  // onClick: PropTypes.node.isRequired,
};
export default SmallButton;
