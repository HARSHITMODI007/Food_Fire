const { render, screen } = require("@testing-library/react")
import RestrauntCards from "../RestaurantCard"
import MOCK_DATA from "../Mocks/rescardmock.json"
import "@testing-library/jest-dom"
import { WithPromotedDiscount } from "../RestaurantCard"

it("should render Restaurant Card with props data" , ()=>{
    //component render
    render(<RestrauntCards resdata={MOCK_DATA}/>)

    const name=screen.getByText("Chinese Wok")

    expect(name).toBeInTheDocument();

})

it("should render with PROMOTED PRICE LABEl",()=>{
    //render
  const PromotedComponent =  WithPromotedDiscount(RestrauntCards) 
  render(<PromotedComponent resdata={MOCK_DATA}/>)

  //query
  const prom =screen.getByText("ITEMS AT ₹199")

  expect(prom).toBeInTheDocument()
})