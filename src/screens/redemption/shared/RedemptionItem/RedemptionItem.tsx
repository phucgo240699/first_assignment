import assetsPicker from "assets/assetsPicker";
import styled from "styled-components";
import { RedemptionType } from "types/petrols";

interface Props {
  item?: RedemptionType;
  availableCoins: number;
}

const RedemptionItem : React.FC<Props> = ({ item, availableCoins }) => {
  const disableRedemption = availableCoins < (item?.price || 0)
  return (
    <Container>
      <Thumbnail src={item?.thumbnail} />
      <TitleContainer>
        {
          disableRedemption === true
          && <InsufficientIcon src={assetsPicker.images.insufficientRedemptionIcon} />
        } 
        <Title disable={disableRedemption}>{`${item?.price} Coins`}</Title>
      </TitleContainer>
      <Description>{item?.description}</Description>
      {
        disableRedemption && <InsufficientLabel>Insufficient coins</InsufficientLabel>
      }
    </Container>
  )
}

const Container = styled.div`
  width: 200px;
  height: 240px;
  margin-top: 0px;
  margin-right: 24px;
  border-radius: 4px;
  border: 1px solid #F1F1F5;
  background-color: #FFFFFF;
  box-shadow: 0px 12px 18px 0px #1717250A;
`

const Thumbnail = styled.img`
  width: 199px;
  height: 98px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 16px 10px 0px 16px;
  max-height: 24px;
`

const Title = styled.p<{ disable?: boolean }>`
  font-family: Hellix;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: ${p => (p.disable === true ? '#696974' : '#0062FF')};
`

const Description = styled.p`
  font-family: Hellix;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  margin: 8px 10px 0px 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #92929D;
`

const InsufficientLabel = styled.p`
  font-family: Hellix;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin: 8px 10px 0px 16px;
  color: #0062FF;
`

const InsufficientIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`

export default RedemptionItem