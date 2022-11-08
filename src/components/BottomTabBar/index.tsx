import styled from 'styled-components';
import assetsPicker from 'assets/assetsPicker';

const BottomTabBar = () => {
  return (
    <Container>
      <TabIcon src={assetsPicker.images.homeIcon}/>
      <TabIcon src={assetsPicker.images.notificationIcon}/>
      <TabIcon src={assetsPicker.images.paymentIcon}/>
      <TabIcon src={assetsPicker.images.profileIcon}/>
    </Container>
  )
}


const Container = styled.div`
  bottom: 0px;
  width: 476px;
  height: 70px;
  display: flex;
  position: fixed;
  border-top: 1px solid #D5D5DC70;
  align-items: center;
  justify-content: space-around;
  background-color: #FFFFFF;
`

const TabIcon = styled.img`
  width: 40px;
  height: 40px;
`

export default BottomTabBar;