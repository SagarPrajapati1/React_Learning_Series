import RestaurantCard from './RestaurantCard';
import reslist from '../utils/mockData'; // default import <- default export (export default reslist)
import { useState } from 'react'; // named import <- named export (export const useState = () =>())

// React Hooks
// Normal JavaScript Funcitons with super power have some pre written logic
// useState(), useEffect()


const Body = () => {

    // State Variable -super powerful variable
    const [listOfRestaurants, setListOfReataurants] = useState(reslist); // array destructuring

    // same as above syntax
    // const arr = useState(reslist);
    // const [a1, setA1] = arr;

    // normal JS variable
    // let listOfRestaurants1 = [];

    return (
        <div className="body">
            <div className="filter">
                <button
                    className='filter-btn'
                    onClick={() => {
                        // filter return new array not change the original array
                        const filteredList = reslist.filter(
                            (res) => res.info.avgRating > 4.0
                        );
                        setListOfReataurants(filteredList);
                    }}
                >
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((res) =>
                    <RestaurantCard key={res.info.id} resData={res} />
                )}
            </div>
        </div>
    )
};
export default Body;