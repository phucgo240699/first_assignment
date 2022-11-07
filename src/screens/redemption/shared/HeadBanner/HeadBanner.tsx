import CircleBackButton from "components/CircleBackButton"
import styled from "styled-components"

const HeadBanner = () => {
  return (
    <Container>
      <CircleBackButton />
      <Title>Silver tier</Title>
      <SubTitle>In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.</SubTitle>
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  padding: 27px 24px 0px 24px;
  background-color: #171725;
  padding-bottom: 200px;
`

const Title = styled.p`
  font-family: Hellix;
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  color: #FFFFFF;
`

const SubTitle = styled.div`
  font-family: Hellix;
  font-weight: 400;
  font-size: 16px;
  margin-top: -30px;
  margin-right: 5px;
  line-height: 24px;
  color: #B5B5BE;
`

export default HeadBanner;