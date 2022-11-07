import assetsPicker from "assets/assetsPicker";
import styled from "styled-components";

interface Props {
  availableCoins?: number;
}

const CoinBoard : React.FC<Props> = ({ availableCoins = 0 }) => {
  return (
    <Containter>
      <Label>Available Coin balance</Label>
      <Coin>{ availableCoins }</Coin>
      <ProgressContainer>
        <Progress progress={75} />
      </ProgressContainer>
      <PaidRecommendation>You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.</PaidRecommendation>
      <ViewTierBenefitsContainer>
        <ViewTierBenefitsText>View tier benefits</ViewTierBenefitsText>
        <ViewTierBenefitsIcon src={assetsPicker.images.rightArrow} />
      </ViewTierBenefitsContainer>
      <MyCouponsButton>
        <MyCouponsLabel>
          My Coupons
        </MyCouponsLabel>
      </MyCouponsButton>
      <UpdatedDate>Updated : 02/11/2021</UpdatedDate>
    </Containter>
  )
}

const Containter = styled.div`
  padding: 24px;
  margin: -170px 16px 24px 16px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: #FFFFFF;
`

const Label = styled.p`
  font-family: Hellix;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  color: #B5B5BE;
`

const Coin = styled.p`
  font-family: Hellix;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  margin: 0px;
  color: #171725;
`

const Progress = styled.div<{ progress: number }>`
  height: 5px;
  width: ${p => p.progress}%;
  background-color: #0062FF;
  border-radius: 2.5px;
`

const ProgressContainer = styled.div`
  height: 5px;
  width: 100%;
  margin-top: 33px;
  background-color: #E2E2EA;
  border-radius: 2.5px;
`

const PaidRecommendation = styled.p`
  font-family: Hellix;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #92929D;
`

const ViewTierBenefitsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const ViewTierBenefitsText = styled.p`
  font-family: Hellix;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #0062FF;
`

const ViewTierBenefitsIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 4px;
`

const MyCouponsButton = styled.button`
  width: 100%;
  max-width: 300px;
  height: 60px;
  border-radius: 4px;
  display: flex;  
  margin: 0 auto;
  background-color: #171725;
  padding: 0px 96px 0px 96px;
`

const MyCouponsLabel = styled.p`
  color: #FFFFFF;
  font-family: Hellix;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`

const UpdatedDate = styled.p`
  font-family: Hellix;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #B5B5BE;
`

export default CoinBoard;