import RestaurantCard from './RestaurantCard';
import reslist from '../utils/mockdata'; // default import <- default export (export default reslist)
import { useState, useEffect } from 'react'; // named import <- named export (export const useState = () =>())
import Shimmer from "./Shimmer";
// React Hooks
// Normal JavaScript Funcitons with super power have some pre written logic
// useState(), useEffect()


const Body = () => {

    // State Variable -super powerful variable
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);  // called after the component is rendered

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // optional chaining
        console.log(
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    };


    // conditional rendering - Rendering on the basis of Condition
    // if (listOfRestaurant.length === 0) {
    //   return <Shimmer/>
    // }

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="cont-bn">
                <div className="Search">
                    <input
                        className="search-box"
                        placeholder="Search your Restaurant..."
                        type="text"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    ></input>
                    <button
                        className="btn"
                        onClick={() => {
                            // filter the restaurant cards & update the UI
                            const filteredRestaurants = listOfRestaurant.filter((res) => {
                                res.info.name.toLowerCase().includes(searchText.toLowerCase());
                            });
                            setFilteredRestaurant(filteredRestaurants);
                            // search Text
                            console.log(searchText);
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredData = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setlistOfRestaurant(filteredData);
                        console.log(filteredData);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};
export default Body;