import React, { useEffect, useState } from "react";
import "./body.css";
import Res_Card from "./Res_Card";
import { API_URL, API_URL2 } from "../Utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  let [resturatantList, setResturatantList] = useState([]);
  let [filteredRestuarants, setFilteredRestuarants] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();
    const resturatantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ??
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants ??
      [];
    setResturatantList(resturatantData);
    setFilteredRestuarants(resturatantData);
  };

  return !resturatantList.length ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="search-input"
          placeholder="Search Restaurants"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-button"
          onClick={() => {
            const filteredRestuarants = resturatantList.filter((resName) =>
              resName.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestuarants(filteredRestuarants);
          }}
        >
          Search
        </button>
        <button
          className="search-button"
          onClick={() => {
            setFilteredRestuarants(
              resturatantList.filter((resData) => resData?.info?.veg === true)
            );
          }}
        >
          Pure Veg
        </button>
        <button
          className="search-button"
          onClick={() => {
            setFilteredRestuarants(
              resturatantList.filter(
                (resData) =>
                  Number(resData.info.costForTwo.replace(/[^0-9]/gm, "")) < 300
              )
            );
          }}
        >
          Less than 300
        </button>
        <button
          className="search-button"
          onClick={() => {
            setFilteredRestuarants(
              resturatantList.filter((resData) => resData.info.avgRating > 4.4)
            );
          }}
        >
          4.5+ Ratings
        </button>
        <button
          className="search-button"
          onClick={() => {
            setFilteredRestuarants(
              resturatantList.filter(
                (resData) => resData.info.sla.deliveryTime < 30
              )
            );
          }}
        >
          30 mins Delivery
        </button>
      </div>
      <div className="res-container">
        {filteredRestuarants.map((resturatant) => (
            <Res_Card
              resData={resturatant.info}
              key={resturatant.info.id}
            ></Res_Card>
        ))}
      </div>
    </div>
  );
};

export default Body;
