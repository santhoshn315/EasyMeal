import React from "react";
import { RES_LOGO, CARD_LOGO } from "../Utils/constants";
import { Link } from "react-router-dom";

const Res_Card = (resData) => {
  const {
    id,
    name,
    avgRating,
    cuisines,
    cloudinaryImageId,
    areaName,
    costForTwo,
    sla,
    veg,
  } = resData.resData;
  return (
    <Link to={"restuarants/" + id} style={{textDecoration:"none",color:"black"}}>
      <div className="res-card">
        <img
          className="res-logo"
          alt="resstuaratnt Logo"
          src={CARD_LOGO + cloudinaryImageId}
        ></img>
        <div className="res-details">
          <text className="line1">{name}</text>
          <div className="line2">
            <text>⭐️{avgRating}</text>
            <text>📍{sla.deliveryTime} mins</text>
            {veg === true ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3u_Dcz9SvkcwniNeSQZsUi2O96WQS3gbhIA&usqp=CAU"
                alt="veg logo"
                style={{ width: "13px" }}
              ></img>
            ) : (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRYteGPinx4N697CzQh72N0wcLprAcv2BOxw&usqp=CAU"
                alt="Non-Veg logo"
                style={{ width: "13px" }}
              ></img>
            )}
          </div>
          <div className="line3">
            <text>{areaName}</text>
            <text>{costForTwo}</text>
          </div>
          <div className="line4">
            <text>{...cuisines.join(" , ")}</text>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Res_Card;
