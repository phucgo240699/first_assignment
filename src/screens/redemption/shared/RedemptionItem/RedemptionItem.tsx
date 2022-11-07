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
  margin-right: 24px;
  border-radius: 4px;
`

const Thumbnail = styled.img`
  width: 199px;
  height: 98px;
`

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`

const Title = styled.p<{ disable?: boolean }>`
  font-family: Hellix;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: ${p => (p.disable === true ? '#696974' : '#0062FF')};
`

const Description = styled.p`
  font-family: Hellix;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  linesOfText: 2;
  color: #92929D;
`

const InsufficientLabel = styled.p`
  font-family: Hellix;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #0062FF;
`

const InsufficientIcon = styled.img`
  width: 16px;
  height: 16px;
`

export default RedemptionItem