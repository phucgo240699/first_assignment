 import React from 'react';
 import styled from 'styled-components';
import CircleBackButton from '../CircleBackButton';

interface Props {
  onNavigateBack?: () => void;
}

const PrimaryHeader: React.FC<Props> = ({ onNavigateBack }) => {

  return (
    <Container>
      <CircleBackButton onClick={onNavigateBack}/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 27px 24px 16px 24px;
`

export default PrimaryHeader