import { RedemptionType } from "types/petrols";

export const PetrolDummyData : RedemptionType[] = [
  {
    id: 1,
    thumbnail: require('assets/images/petrol1.png'),
    price: 15,
    description: '50% discount for every $100 top-up on your Shell Petrol Card'
  },
  {
    id: 2,
    thumbnail: require('assets/images/petrol2.png'),
    price: 1000,
    description: '70% discount top-up on your Shell Petrol Card'
  }
]

export const RentalRebateDummyData : RedemptionType[] = [
  {
    id: 1,
    thumbnail: require('assets/images/rentalrebate1.png'),
    price: 20,
    description: 'Get $20 Rental rebate'
  },
  {
    id: 2,
    thumbnail: require('assets/images/rentalrebate2.png'),
    price: 15,
    description: 'Get $500 Rental rebate'
  }
]

export const FoodBeverageDummyData : RedemptionType[] = [
  {
    id: 1,
    thumbnail: require('assets/images/foodbeverage1.png'),
    price: 25,
    description: 'NTUC Fairprice $50 Voucher'
  },
  {
    id: 2,
    thumbnail: require('assets/images/foodbeverage2.png'),
    price: 5,
    description: 'Free Cold Stone Sundae at any flavour!'
  }
]