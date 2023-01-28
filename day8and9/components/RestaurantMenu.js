import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./constants"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    console.log(params);

    //const [restaurant,setRestaurant] = useState();

    const restaurant = useRestaurant(resId);

    
    return !restaurant ? (
        <Shimmer />
      ) : (
        <div className="menu">
          <div>
            <h1>Restraunt id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
          </div>
          <div>
            <h1>Menu</h1>
            
          </div>
        </div>
      );
    
}
export default RestaurantMenu;