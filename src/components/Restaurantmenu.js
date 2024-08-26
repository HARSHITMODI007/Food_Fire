import {useState,useEffect} from "react";
import Shimmer from "./shimmer";
import Listitem from "./Listitem";
import {useParams} from "react-router-dom"
import { PROXY_MENU_API} from "../Utils/constants";
import useRestaurant from "../Utils/useRestaurant";
import RestaurantCategory from "./RestaurantCatgory";


const Restaurantmenu =() => {
    const [resinfo,setresinfo] = useState(null);
    const [fooditems, setFooditems] = useState([]);
    const {resid} = useParams();
    
  
   
    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(PROXY_MENU_API + resid);
        const json = await data.json();
        console.log(json);
        setresinfo(json.data);
        let items = json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card.itemCards; 
        setFooditems(items);
        console.log(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
 
    }

  if(resinfo===null){
    return <Shimmer/>;
  }
const categories =resinfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    c => c.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
console.log(categories)

 const{name ,cuisines,costForTwoMessage} =resinfo.cards[2].card.card.info;


    return(
        <div className="menu mx-[160px]">
            <div className="text-center py-7">
            <h1 className="font-bold">{name}</h1>
            <h3 className="font-medium">{cuisines.join(", ")}-{costForTwoMessage}</h3>
            </div>
            {categories.map((category) => (
                <RestaurantCategory  data={category.card.card}/>
            ))}
        
        </div>
         
    );
}
export default Restaurantmenu;