import { LOGO_URL } from "../Utils/constants";
import {useState,useEffect,useContext} from "react";
import {Link} from "react-router-dom"
import UserContext from "../Utils/UserContext";
import {useSelector} from 'react-redux'
const Header = () => {
    const data = useContext(UserContext);
    console.log(data.loggedInUser)

    let BtnName ="Login";
    const [BtnNameReact,setBtnNameReact] =useState('Login')
    console.log("header rendered ")
    useEffect(() => {
        console.log("useEffect Called!")
    },[BtnNameReact]);

    const cartItems = useSelector((store)=> store.cart.items)
    console.log("CartItems",cartItems);


    return(
        <div className='header flex justify-between shadow-lg m-2 mb' >
            <div className='logo-container'>
                <img className='logo w-28 ' src = {LOGO_URL} />
            </div>
            <div className='nav-items flex items-center '>
                <ul className="flex p-4 m-4 ">
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact us</Link></li>
                   
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold " ><Link to="/cart">Cart({cartItems.length}items)</Link></li>

                    <button className="Btn px-4 " onClick={() => {
                         
                        BtnNameReact==="Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")
                    
                    
                        console.log(BtnNameReact);
                    }}>{BtnNameReact}</button>
                    <li className="px-4">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}
export default Header;