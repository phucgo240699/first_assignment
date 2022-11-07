import { PetrolDummyData } from "constants/index"
import styled from "styled-components"
import RedemptionItem from "../RedemptionItem/RedemptionItem"
import { ScrollMenu } from 'react-horizontal-scrolling-menu';

interface Props {
  availableCoins?: number;
}

const PetrolSection : React.FC<Props> = ({ availableCoins = 0 }) => {
  return (
    <Container>
      <Title>Petrol</Title>
        <ScrollMenu>
          {PetrolDummyData.map((item) => (
            <RedemptionItem item={item} availableCoins={availableCoins} />
          ))}
        </ScrollMenu>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 24px;
`

const Title = styled.p`
  font-family: Hellix;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #171725;
`

export default PetrolSection;