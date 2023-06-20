import React from 'react';
import "../Styling/categoriescss.css"

const Categories = ({ categories, filterItems, activeCategory }) => {
    return (
    <div>
        <h2 className='categorie_title'>CARDAPIO</h2>
            <div className="btn-container">
                {categories.map((category, index) => {
                return (
                    <button
                    type="button"
                    className={`${
                        activeCategory === category ? "filter-btn active" : "filter-btn"
                    }`}
                    key={index}
                    onClick={() => filterItems(category)}
                    >
                    {category}
                    </button>
                );
                })}
            </div>
    </div>
    );
  };
export default Categories;