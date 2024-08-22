import {useDispatch} from 'react-redux';
import { additem } from '../Utils/cartSlice';


const Listitem = (props) => {
  const { res } = props;
  console.log("obj",res);
  //we get a dispatch from useDispatch hook
  const dispatch =useDispatch()
  const handleAdditem =()=>{
    //dispatch an action
    dispatch(additem(res))
  }

  return (
    <div className="item-container bg-white ">
      <div className="flex justify-between  border-gray-400 text-left border-b-2 h-[225px]">
      <div className="item-details flex-1 pr-4 w-9/12">
        <h2 className="item-name text-lg font-semibold text-gray-800 text-left">{res.card.info.name}</h2>
        <p className="item-price text-sm text-gray-600 mt-1">Rs: {res.card.info.defaultPrice / 100 || res.card.info.price / 100}</p>
        <div className="item-rating flex items-center mt-2">
          <span className="star-icon text-yellow-500 text-lg">★</span>
          <span className="ml-2 text-sm text-gray-600">{res.card.info.ratings.aggregatedRating.rating} ({res.card.info.ratings.aggregatedRating.ratingCountV2})</span>
        </div>
        <p className="item-description text-sm text-gray-500 mt-2">
          {res.card.info.description}
        </p>
      </div>
      <div className="item-image-container flex flex-col items-end w-3/12">
        <img
          src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" + res.card.info.imageId}
          alt="Image Unavailable"
          className="item-image w-[200px] h-[200px] object-cover rounded-md"
        />
        <div className="absolute mt-[154px]">
        <button className="add-button bg-green-500 text-white text-sm font-medium px-4 py-2 mt-2 rounded-md hover:bg-green-600" onClick={handleAdditem}>
          ADD
        </button>
        </div>
        <p className="customizable-tag text-xs text-gray-400 mt-1">Customisable</p>
      </div>
    </div>
    </div>
  );
};

export default Listitem;
