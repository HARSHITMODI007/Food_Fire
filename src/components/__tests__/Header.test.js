
import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../Utils/appStore"
import { BrowserRouter} from "react-router-dom"
import "@testing-library/jest-dom"

it("should load Header component with a login button",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)
   
const loginButton = screen.getByRole("button",{name:"Login"});
//you can also find by getByText,suppose there are more buttons so be specific
console.log(loginButton)

expect(loginButton).toBeInTheDocument();

})


it("should load Header component with a Cart Items 0",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)
   
const CartItems = screen.getByText(/Cart/);
//you can also find by getByText,suppose there are more buttons so be specific
// console.log(CartItems)

expect(CartItems).toBeInTheDocument();

})

it("should change Login button to logout on click",()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
)

const loginButton = screen.getByRole("button",{name:"Login"});
//you can also find by getByText,suppose there are more buttons so be specific
fireEvent.click(loginButton)   

const logoutButton = screen.getByRole("button",{name:"Logout"});

console.log(loginButton)

expect(logoutButton).toBeInTheDocument();

})


