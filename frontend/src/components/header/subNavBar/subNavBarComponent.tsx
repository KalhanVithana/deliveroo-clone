import { log } from "console";
import React, { useState, useRef, useEffect } from "react";

interface SubNavBarComponentProps {
  isScroller: boolean;
  scrollPosition: number;
}

const SubNavBarComponent: React.FC<SubNavBarComponentProps> = ({
  isScroller,
  scrollPosition,
}) => {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const itemRefs: { [key: string]: React.RefObject<HTMLLIElement> } = {
    "first-item": useRef<HTMLLIElement>(null),
    "second-item": useRef<HTMLLIElement>(null),
    "third-item": useRef<HTMLLIElement>(null),
    "fourth-item": useRef<HTMLLIElement>(null),
    "fifth-item": useRef<HTMLLIElement>(null),
    "sixth-item": useRef<HTMLLIElement>(null),
    "seventh-item": useRef<HTMLLIElement>(null),
    "eighth-item": useRef<HTMLLIElement>(null),
    "ninth-item": useRef<HTMLLIElement>(null),
    "tenth-item": useRef<HTMLLIElement>(null),
    "eleventh-item": useRef<HTMLLIElement>(null),
    "twelfth-item": useRef<HTMLLIElement>(null),
    "thirteenth-item": useRef<HTMLLIElement>(null),
  };

  useEffect(() => {
    const updateBackgroundColor = () => {
      const thresholds: Record<string, number> = {
        "first-item": 700,
        "second-item": 1200,
        "third-item": 1800,
        "fourth-item": 2400,
        "fifth-item": 3000,
        "sixth-item": 3600,
        "seventh-item": 4200,
        "eighth-item": 4800,
        "ninth-item": 5400,
        "tenth-item": 6000,
        "eleventh-item": 6600,
        "twelfth-item": 7200,
        "thirteenth-item": 7800,
      };

      for (const [itemId, threshold] of Object.entries(thresholds)) {
        const listItemRef = itemRefs[itemId].current;

        if (listItemRef && scrollPosition > threshold) {
          Object.keys(thresholds).forEach((item) => {
            if (item !== listItemRef.id) {
              let otherItems: any = itemRefs[item].current;
              if (otherItems) {
                otherItems.style.backgroundColor = "";
                otherItems.style.color = "";
                otherItems.style.borderRadius = "";
                otherItems.style.padding = "";
                otherItems.style.fontWeight = "";
              }
            }
            console.log("item", item);
          });

          console.log("listItemRef", listItemRef.id);

          listItemRef.style.backgroundColor = "#51CDBC";
          listItemRef.style.color = "white";
          listItemRef.style.borderRadius = "10px";
          listItemRef.style.padding = "1px 10px";
          listItemRef.style.fontWeight = "bold";
        }
      }
    };

    updateBackgroundColor();

    return () => {};
  }, [scrollPosition]);

  const handleItemClick = (itemId: string) => {
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };

  return (
    <nav
      className="sub-navbar"
      style={{
        position: isScroller ? "fixed" : "unset",
        top: isScroller ? "75px" : "",
      }}
    >
      <ul className="sub-navbar-list">
        <li
          ref={itemRefs["first-item"]}
          className={`sub-navbar-item ${
            selectedItem === "first-item" ? "active" : ""
          }`}
          id="first-item"
          onClick={() => handleItemClick("first-item")}
        >
          Platters
        </li>
        <li
          ref={itemRefs["second-item"]}
          className={`sub-navbar-item ${
            selectedItem === "second-item" ? "active" : ""
          }`}
          id="second-item"
          onClick={() => handleItemClick("second-item")}
        >
          New Daily Specials
        </li>
        <li
          ref={itemRefs["third-item"]}
          className={`sub-navbar-item ${
            selectedItem === "third-item" ? "active" : ""
          }`}
          id="third-item"
          onClick={() => handleItemClick("third-item")}
        >
          Create Your Own
        </li>

        <li
        ref={itemRefs["fourth-item"]}
          className={`sub-navbar-item ${
            selectedItem === "fifth-item" ? "active" : ""
          }`}
          id="fourth-item"
          
          onClick={() => handleItemClick("fifth-item")}
        >
          Gym Food
        </li>

        <li
          ref={itemRefs["fifth-item"]}
          className={`sub-navbar-item ${
            selectedItem === "fourth-item" ? "active" : ""
          }`}
          id="fifth-item"
          onClick={() => handleItemClick("fourth-item")}
        >
          Salads
        </li>
      
        <li
          ref={itemRefs["sixth-item"]}
          className={`sub-navbar-item ${
            selectedItem === "sixth-item" ? "active" : ""
          }`}
          id="sixth-item"
          onClick={() => handleItemClick("sixth-item")}
        >
          Hot Power Bowls
        </li>
        <li
          ref={itemRefs["seventh-item"]}
          className={`sub-navbar-item ${
            selectedItem === "seventh-item" ? "active" : ""
          }`}
          id="seventh-item"
          onClick={() => handleItemClick("seventh-item")}
        >
          Rainbow Wraps
        </li>
        <li
          ref={itemRefs["eighth-item"]}
          className={`sub-navbar-item ${
            selectedItem === "eighth-item" ? "active" : ""
          }`}
          id="eighth-item"
          onClick={() => handleItemClick("eighth-item")}
        >
          Vegan Menu
        </li>
        <li
          ref={itemRefs["ninth-item"]}
          className={`sub-navbar-item ${
            selectedItem === "ninth-item" ? "active" : ""
          }`}
          id="ninth-item"
          onClick={() => handleItemClick("ninth-item")}
        >
          Snacks & Sides
        </li>
        <li
          ref={itemRefs["tenth-item"]}
          className={`sub-navbar-item ${
            selectedItem === "tenth-item" ? "active" : ""
          }`}
          id="tenth-item"
          onClick={() => handleItemClick("tenth-item")}
        >
          Yoghurt & Fruit
        </li>
        <li
          ref={itemRefs["eleventh-item"]}
          className={`sub-navbar-item ${
            selectedItem === "eleventh-item" ? "active" : ""
          }`}
          id="eleventh-item"
          onClick={() => handleItemClick("eleventh-item")}
        >
          Cold Drinks
        </li>
        <li
          ref={itemRefs["twelfth-item"]}
          className={`sub-navbar-item ${
            selectedItem === "twelfth-item" ? "active" : ""
          }`}
          id="twelfth-item"
          onClick={() => handleItemClick("twelfth-item")}
        >
          Smoothies, Shakes & Juice
        </li>
      </ul>
    </nav>
  );
};

export default SubNavBarComponent;
