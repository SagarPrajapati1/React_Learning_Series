import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo,
        locality
    } = resData?.info;

    return (
        // home
        < div className="card_container" >
            <div className="res-card">
                <img className="res-logo" src={
                    CDN_URL + cloudinaryImageId
                } />
                <div className="details">
                    {/* <h3>{props.resName}</h3> */}

                    <h3>{name}</h3>
                    <div className="rating-time">
                        <h3>{avgRating}</h3>
                        <h3>{sla.deliveryTime} minutes</h3>
                    </div>
                    <p>{cuisines.join(' ')}</p>
                    {/* <h3>{props.cuisine}</h3> */}
                    <h3>{locality}</h3>
                </div>
            </div>
        </div >
    )
}

export default RestaurantCard