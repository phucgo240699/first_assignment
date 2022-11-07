import CoinBoard from "./shared/CoinBoard/CoinBoard"
import FoodBeverage from "./shared/FoodBeverage/FoodBeverage"
import HeadBanner from "./shared/HeadBanner/HeadBanner"
import PetrolSection from "./shared/PetrolSection/PetrolSection"
import RentalRebate from "./shared/RentalRebate/RentalRebate"

const RedemptionScreen = () => {
  const coins = 340

  return (
    <div>
      <HeadBanner />
      <CoinBoard availableCoins={coins}/>
      <PetrolSection availableCoins={coins} />
      <RentalRebate availableCoins={coins} />
      <FoodBeverage availableCoins={coins} />
    </div>
  )
}

export default RedemptionScreen