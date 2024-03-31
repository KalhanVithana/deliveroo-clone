// SubNavBarComponent.tsx

import React, { useState, useRef } from "react";

interface SubNavBarComponentProps {
  isScroller:boolean;
}
const SubNavBarComponent: React.FC <SubNavBarComponentProps>= ({isScroller}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const firstItemRef = useRef<HTMLLIElement>(null);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };

  const handleHoverItem = () => {
    console.log("Hovering over a list item",firstItemRef.current);
  
    // if (firstItemRef.current) {
    //   firstItemRef.current.removeAttribute("id");
    // }
  };

  return (
    <nav className="sub-navbar " style={{position:isScroller ? 'fixed' : 'unset',top:isScroller ? '75px':''}}>
      <ul className="sub-navbar-list">
        <li
          ref={firstItemRef}
          className={`sub-navbar-item ${
            selectedItem === "first-item" ? "first-item" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          id= "first-item"
          onClick={() => handleItemClick("first-item")}
          
        >
          Platters
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "second-item" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("second-item")}
        >
          New Daily Specials
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "create-your-own" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("create-your-own")}
        >
          Create Your Own
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "salads" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("salads")}
        >
          Salads
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "gym-food" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("gym-food")}
        >
          Gym Food
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "hot-power-bowls" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("hot-power-bowls")}
        >
          Hot Power Bowls
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "rainbow-wraps" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("rainbow-wraps")}
        >
          Rainbow Wraps
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "vegan-menu" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("vegan-menu")}
        >
          Vegan Menu
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "snacks-sides" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("snacks-sides")}
        >
          Snacks & Sides
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "yoghurt-fruit" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("yoghurt-fruit")}
        >
          Yoghurt & Fruit
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "cold-drinks" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("cold-drinks")}
        >
          Cold Drinks
        </li>
        <li
          className={`sub-navbar-item ${
            selectedItem === "smoothies-shakes-juice" ? "active" : ""
          }`}
          onMouseEnter={() => handleHoverItem()}
          onClick={() => handleItemClick("smoothies-shakes-juice")}
        >
          Smoothies, Shakes & Juice
        </li>
      </ul>
    </nav>
  );
};

export default SubNavBarComponent;
