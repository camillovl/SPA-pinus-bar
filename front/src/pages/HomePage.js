import React from 'react'

import Menu from "../Components/menu";
import Categories from '../Components/categories';
import Header from "../Components/header";

const Homepage = () => {

    return (
        <main>
            <Header />
            <Categories/>
            <Menu/>
        </main>
    )
}
export default Homepage