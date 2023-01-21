import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import restMenuData from "../rest-menu.json";
import { IMG_CDN_URL } from "./constants"
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const params = useParams();
    const {resId} = params;
    console.log(params);

    const [restaurant,setRestaurant] = useState();

    useEffect(()=> {
        getRestInfo();
    },[])

    async function getRestInfo () {
        //const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9138124&lng=77.68498679999999&restaurantId=654809&submitAction=ENTER");
        const json = restMenuData;
        console.log(json.data.cards[0].card.card.info);
        //if(json.data.cards[0].card.card.info.id == resId)
        setRestaurant(json.data?.cards[0]?.card?.card?.info);
    }
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