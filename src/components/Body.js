import RestrauntCards,{WithPromotedDiscount} from "./RestaurantCard";
import reslist from "../Utils/mackdata";
import {useState,useEffect} from "react"
import Shimmer from "./shimmer";
import {Link} from "react-router-dom"

const Body = () => {
    // LOCAL STATE VARIABLE -Super powerful variable
    const [listofRestaurants,setlistofRestaurants] = useState([]);
    const[filteredlistofRestaurants,setfilteredlistofRestaurants] = useState([]);

    const[searchText,setsearchText] = useState("")
    

    useEffect(() => {fetchData();},[])   
    const fetchData =async () => {
        const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9059311&lng=75.78443829999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
        const json = await data.json();
       console.log(json)
       let selectedCards = json.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    //    filter(
    //     (c) => (c.card?.card?.['@type']==='type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget')
    // );
    // console.log(selectedCards)
    //  selectedCards = selectedCards.filter(c=>c.card.card.id==="restaurant_grid_listing")
    //  console.log(selectedCards)
    //  selectedCards=selectedCards[0].card.card.gridElements.infoWithStyle.restaurants;
        
        setlistofRestaurants(selectedCards );
        setfilteredlistofRestaurants(selectedCards);
        console.log(selectedCards)
    }                          
    //normal js variable
    // let listofRestaurants;  
    const RestaurantCardPromoted =WithPromotedDiscount(RestrauntCards);
    console.log('BODY RENDERED',listofRestaurants);


    return listofRestaurants.length === 0?
    ( <Shimmer/>):
                  (
        <div className='Body'>
            <div className="filter flex">
            <div className="search p-4 m-4 ">
                <input className="search-box border border-solid border-black" value={searchText} onChange={(eve) => {
                    setsearchText(eve.target.value);
                }}/>
                <button className="search-Btn px-4 py-1 bg-green-100 m-4 rounded-lg" onClick={() => {
                   console.log(listofRestaurants) 
                   const namefilteredrestaurants =  listofRestaurants.filter(
                    (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                   
                setfilteredlistofRestaurants(namefilteredrestaurants);
                   console.log(searchText);

                }}>search</button>
            </div>
            <div className="search p-4 m-4 flex items-center">
            <button className='filter-Btn px-4 py-1 bg-gray-200 rounded-lg' onClick={() => {
                filteredlist = listofRestaurants.filter((res) => (res.info.avgRating>4));
                setfilteredlistofRestaurants(filteredlist);
                console.log(filteredlistofRestaurants);
                }}>
                    Top rated Restaurants
                    </button>
                    </div>
                    </div>
            <div className='Res-conntainer flex flex-wrap justify-between mx-[130px]'>
               {filteredlistofRestaurants.map((restaurant) => (
               <Link 
               className="decor"
               key={restaurant.info.id} 
               to={"/restaurants/"+ restaurant.info.id}
               >
               { restaurant.info.aggregatedDiscountInfoV3?(
                    <RestaurantCardPromoted resdata={restaurant}/>

                ):(
                     <RestrauntCards  resdata={restaurant}/>
                     )
                }
              </Link> 
               ))}
               
                
                
                
                
                
                
            </div>
        </div>
    )
}
export default Body;