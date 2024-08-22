import {useSelector} from "react-redux"
import Listitem from "./Listitem"
import {useDispatch} from "react-redux"
import { clearCart } from "../Utils/cartSlice"

const Cart = ()=>{
    const cartItems =useSelector((store)=> store.cart.items)
    const dispatch =useDispatch();
    const handleClearCart = () => {
      dispatch(clearCart());
    }
   
    return (
      <div className="text-center m-4 p-4">
        <h1 className="font-bold">Cart</h1>
        <div className="w-1/2 m-auto">
          <button
            className="p-2 border bg-black text-white rounded-lg "
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          {cartItems.length===0 && (<h1>Cart is empty</h1>)}
          {cartItems.map((item) => (<Listitem res={item} />))}
        </div>
      </div>
    );
}
export default Cart;