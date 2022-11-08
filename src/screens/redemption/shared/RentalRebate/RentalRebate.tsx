import styled from "styled-components"
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { RentalRebateDummyData } from "constants/index";
import RedemptionItem from "../RedemptionItem/RedemptionItem";

interface Props {
  availableCoins?: number;
}

const RentalRebate : React.FC<Props> = ({ availableCoins = 0 }) => {
  return (
    <Container>
      <Title>Rental Rebate</Title>
        <ScrollMenu>
          {
            RentalRebateDummyData.map((item) => {
              return <RedemptionItem item={item} availableCoins={availableCoins} />
            })
          }
        </ScrollMenu>
    </Container>
  )
}

const Container = styled.div`
  padding-left: 24px;
  margin-top: 40px;
`

const Title = styled.p`
  font-family: Hellix;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #171725;
`

export default RentalRebate;