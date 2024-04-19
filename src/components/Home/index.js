import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import Categories from "../Categories";
import SwiggyItems from "../SwiggyItems";
import InstaItems from "../InstaItems";
import FoodItems from "../FoodItems";
import { SiSwiggy } from "react-icons/si";
import { IoFastFood } from "react-icons/io5";
import { CgSmartHomeWashMachine } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import "./index.css";

const category = [
    {
        id: 1,
        name: "swiggy",
        icon: <SiSwiggy />,
        category: "swiggy",
    },
    {
        id: 2,
        name: "food",
        icon: <IoFastFood />,
        category: "food",
    },
    {
        id: 3,
        name: "instamart",
        icon: <CgSmartHomeWashMachine />,
        category: "mart",
    },
];

function Home() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const [first, setFirst] = useState(category[0].category);
    const cookie = Cookies.get("jwt");

    useEffect(() => {
        if (cookie === undefined) {
            navigate("/login");
        }
    }, [cookie, navigate]);

    const getSwiggyItems = () => {
        switch (first) {
            case category[0].category:
                return <SwiggyItems />;

            case category[1].category:
                return <FoodItems />;

            case category[2].category:
                return <InstaItems />;

            default:
                break;
        }
    };

    const changeCategory = (id) => {
        const filtered = category[id - 1];
        setFirst(filtered.category);
    };

    const logOut = () => {
        Cookies.remove("jwt");
        navigate("/login");
    };

    return (
        <div className="main">
            <div className="btn-container">
                <FaUserAlt className="i" />
                <button onClick={logOut}>Logout</button>
            </div>
            <div>{getSwiggyItems()}</div>
            <footer>
                <ul>
                    {category.map((each) => (
                        <Categories
                            key={each.id}
                            data={each}
                            changeCategory={changeCategory}
                        />
                    ))}
                </ul>
            </footer>
        </div>
    );
}

export default Home;
