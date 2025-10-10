import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [login, setLogin] = useState("login");
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-img" src={LOGO_URL} />
            </div>

            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>Breakfaast</li>
                    <li>Lunch</li>
                    <li>Dinner</li>
                    <li>Cart</li>
                    <button
                        className="login"
                        onClick={() => {
                            login === "login" ? setLogin('logOut') : setLogin("login");
                        }}
                    >
                        {login}
                    </button>
                </ul>
                
            </div>
        </div>
    )
};
export default Header;