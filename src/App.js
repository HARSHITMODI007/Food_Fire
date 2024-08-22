import React,{lazy,Suspense,useState,useEffect} from 'react'
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import {createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom"
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import Restaurantmenu from './components/Restaurantmenu'
import UserContext from './Utils/UserContext'
import {Provider} from 'react-redux'
import appStore from './Utils/appStore'
import Cart from './components/Cart'


// import Grocery from './components/Grocery'

const  Grocery =lazy(() => import('./components/Grocery'));

const Applayout = () => {
  const[userName,setuserName] =useState()
   //authentication
   useEffect(()=>{
    const data = {
      name:"Harshit Modi",
    }
    setuserName(data.name);
   },[]);

    return(
        //Provider provides our store to our app
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
           <div className='app'>
            
            <Header />
            <Outlet />

        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const Approuter = createBrowserRouter([
{
  path:"/",
  element:<Applayout/>,
  children:[
    {
        path:"/",
        element:<Body/>,
    },
    {
    path:"/about",
    element:<About/>,
  },
  {
      path:"/contact",
      element:<Contact/>,
  },
  {
     path:"/grocery",
     element:<Suspense><Grocery/></Suspense>
  },
  {
    path:"/restaurants/:resid",
    element:<Restaurantmenu />,
  },
  {
    path:"/cart",
    element:<Cart />
  }
],
  errorElement:<Error/>,
},

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={Approuter} />);












