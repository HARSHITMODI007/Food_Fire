import {useState,useEffect} from "react";
import { PROXY_MENU_API} from "../Utils/constants";

const useRestaurant = () => {
    const [resinfo,setresinfo] = useState(null);
    const [fooditems, setFooditems] = useState([]);

    useEffect(() => {
        fetchMenu();
    },[])
    
    const fetchMenu = async () => {
        const data = await fetch(PROXY_MENU_API + resid);
        const json = await data.json();
        console.log(json);
        setresinfo(json.data);
        let items = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards; 
        setFooditems(items);
    }
    return resinfo,fooditems;
}
export default useRestaurant;