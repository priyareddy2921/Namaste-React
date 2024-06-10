import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData}=props;
    const {name,cuisines,avgRating}=resData.info;
    const {deliveryTime}=resData.info.sla;
 //    console.log(resData.info.name);
   return (
     <div className="res-card">
         
       <img className="res-logo" src={CDN_URL+ resData.info.cloudinaryImageId}></img>
       <h3>{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating}</h4>
       <h4>{deliveryTime}</h4>
       
     </div>
   );
 };

 export default RestaurantCard;
 