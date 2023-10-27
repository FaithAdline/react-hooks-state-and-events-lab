import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {

const [selectedCategory, setSelectedCategory] = useState("All")
function handleChange (e){
  setSelectedCategory(e.target.value);
}
const filteredItems = selectedCategory === "All"
    ? items 
    : items.filter(item => item.category === selectedCategory); 

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" value={selectedCategory} onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
} 


export default ShoppingList;
