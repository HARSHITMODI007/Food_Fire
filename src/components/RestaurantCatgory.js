import Listitem from "./Listitem";
import {useState} from "react"

const RestaurantCategory =({data}) => {
    console.log(data);
    const [showitems,setshowitems] =useState(false);
    const[arrow,setarrow]=useState("▼")
    const handleClick=()=>{
        if(!showitems){
            setarrow("▲")
         }
        else{
            setarrow("▼")
        } 
        setshowitems(!showitems);
        
      
    }
    return( <div className="text-center">
        <div className=" w-full bg-white my-2 py-2 px-2 shadow-lg">
            <div className="justify-between flex cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
            <span>{arrow}</span>
            </div>
          
         {showitems && data.itemCards.map((item)=>(
            <div key={item.card.info.id} className="py-2 my-2">
            <Listitem res={item}/>
            </div>
         ))}
        </div>
    </div>

        
       
        
       
    )
}
export default RestaurantCategory;
{/* {fooditems.map((itemm) => (<u
            <li key={itemm.card.info.id}>
                <Listitem  res ={itemm}/>
            </li>
       
         ))}
          </ul> */}