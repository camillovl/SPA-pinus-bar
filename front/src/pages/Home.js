import React, { useState }from 'react'
import Menu from "../Components/menu";
import Categories from '../Components/categories';
import Header from "../Components/header";

import items from "../data.js";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Home = () => {

    const [menuItems, setMenuItems] = useState(items);
    const [activeCategory, setActiveCategory] = useState("");
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        setActiveCategory(category);
        if (category === "all") {
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    };

    return (
        <main>
            <Header />
            <Categories
                categories={categories}
                activeCategory={activeCategory}
                filterItems={filterItems}
            />
            <Menu items={menuItems} />
        </main>
    )
}
export default Home