import styled from "styled-components"
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { FoodBeverageDummyData } from "constants/index";
import RedemptionItem from "../RedemptionItem/RedemptionItem";

interface Props {
  availableCoins?: number;
}

const FoodBeverage : React.FC<Props> = ({ availableCoins = 0 }) => {
  return (
    <Container>
      <Title>Petrol</Title>
        <ScrollMenu>
          {
            FoodBeverageDummyData.map((item) => {
              return <RedemptionItem item={item} availableCoins={availableCoins} />
            })
          }
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

export default FoodBeverage;