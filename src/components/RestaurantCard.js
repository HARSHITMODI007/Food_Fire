import { CDN_URL } from "../Utils/constants";

const RestrauntCards = (props) => {
    const{resdata} = props;
    console.log(resdata)
     const{cloudinaryImageId,name,cuisines,avgRating,costForTwo,sla}=resdata?.info
     return (
         <div className='res-card m-4 p-4 w-[350px] h-[370px] rounded-lg' >
            
             <img className="res-logo w-[330px] h-[250px] rounded-lg " src={CDN_URL+cloudinaryImageId}/>
             <div className="flex  items-center justify-between">
             <h3 className="font-semibold py-2 text-lg truncate">{name}</h3>
             <div className="border-solid">
             <h4 className="bg-green-500 text-gray-800 text-sm font-medium px-2 py-1 rounded-full ">{avgRating }★</h4>
             </div>
             </div>
             <div className="flex justify-between">
             <h5 className="truncate text-ellipsis w-1/2">{cuisines.join(', ')}</h5>
        
             <h4 className="price-for-two">{costForTwo}</h4>
             </div>
             <h4 className="delivery-time items-center text-center font-semibold">{sla.deliveryTime} mins</h4>
          
         </div>
     )
 }
 export const WithPromotedDiscount =(RestaurantCard) => {
    return(props) => {
        return(
           
            <div className="relative">
                <label className="absolute mx-[50px] top-60 text-white font-extrabold text-center">
                    {props.resdata.info.aggregatedDiscountInfoV3.header+" "+
                props.resdata.info.aggregatedDiscountInfoV3.subHeader}
                </label>
                <RestaurantCard resdata ={props.resdata}/>

           
            </div>
        )
    }

 }
 export default RestrauntCards;