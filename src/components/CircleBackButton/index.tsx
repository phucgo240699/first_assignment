import assetsPicker from 'assets/assetsPicker';
import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
}

const CircleBackButton : React.FC<Props> = ({ onClick }) => {

  const onClickContainer = () => {
    if (onClick) {
      onClick();
    }
  }

  return (
    <Container onClick={onClickContainer}>
      <BackIcon src={assetsPicker.images.leftArrow} />
    </Container>
  )
}

const Container = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #FFFFFF;
`

const BackIcon = styled.img`
  width: 16px;
`;

export default CircleBackButton;