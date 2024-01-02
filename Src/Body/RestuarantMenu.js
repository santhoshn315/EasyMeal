import React, { useEffect, useState } from "react";
import { CARD_LOGO, CORS_PROXY, MENU_URL } from "../Utils/constants";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestuarantMenu = () => {
  let [resInfo, setResInfo] = useState(null);
  let [resMenu, setResMenu] = useState(null);
  let { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(CORS_PROXY+MENU_URL + resId);
    const json = await data.json();
    const restInfo = json?.data?.cards[0]?.card?.card?.info ?? "";
    console.log(json);
    let foodMenu =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card
        ?.card?.itemCards ?? json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards ??
      [];
    setResInfo(restInfo);
    setResMenu(foodMenu);
  };

  if (resInfo === null) return <Shimmer></Shimmer>;

  const {
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    areaName,
    costForTwoMessage,
    sla,
  } = resInfo;

  return (
    <div className="res-page">
      <div className="resInfo">
        <h2>{name}</h2>
        <img
          className="restuarant-logo"
          alt="restuaratnt Logo"
          src={CARD_LOGO + cloudinaryImageId}
        ></img>
        <text>{areaName}</text>
        <text>{avgRating}</text>
        <text>{...cuisines.join(" , ")}</text>
        <text>{costForTwoMessage}</text>
        <text>{sla.deliveryTime}</text>
        <text>{sla.lastMileTravelString}</text>
      </div>
      <div className="resMenu">
        <ul>
          {resMenu.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name +
                "  -  " +
                (item?.card?.info?.price / 100 ||
                  item?.card?.info?.defaultPrice / 100) +
                "  ----------  " +
                item?.card?.info?.isVeg}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestuarantMenu;
