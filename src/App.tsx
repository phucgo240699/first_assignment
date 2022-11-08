import './App.css';
import RedemptionScreen from 'screens/redemption/RedemptionScreen';
import styled from 'styled-components';
import BottomTabBar from 'components/BottomTabBar';

function App() {
  return (
    <Container>
      <RedemptionScreen />
      <BottomTabBar />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 375px;
  background-color: #E5E5E530;
`

export default App;
