import React, { useEffect, useState } from "react";

const PujaPackageCard = ({ pujaPackage, handleCheckout }) => {
  return (
    <div className="plan" key={pujaPackage?.puja_packages_id}>
      <div className="plan-header">
        <h3 className="plan-heading">
          {pujaPackage?.puja_packages_title_1}(
          {pujaPackage?.puja_packages_title_2})
        </h3>
        {/*     <button class="plan-save"> Save $40</button> */}
      </div>
      <ul className="plan-feature">
        {pujaPackage?.puja_packages_point1 ? (
          <li>{pujaPackage?.puja_packages_point1}</li>
        ) : null}
        {pujaPackage?.puja_packages_point2 ? (
          <li>{pujaPackage?.puja_packages_point2}</li>
        ) : null}
        {pujaPackage?.puja_packages_point3 ? (
          <li>{pujaPackage?.puja_packages_point3}</li>
        ) : null}
        {pujaPackage?.puja_packages_point4 ? (
          <li>{pujaPackage?.puja_packages_point4}</li>
        ) : null}
        {pujaPackage?.puja_packages_point5 ? (
          <li>{pujaPackage?.puja_packages_point5}</li>
        ) : null}
        {pujaPackage?.puja_packages_point6 ? (
          <li>{pujaPackage?.puja_packages_point6}</li>
        ) : null}
        {pujaPackage?.puja_packages_point7 ? (
          <li>{pujaPackage?.puja_packages_point7}</li>
        ) : null}
        {pujaPackage?.puja_packages_point8 ? (
          <li>{pujaPackage?.puja_packages_point8}</li>
        ) : null}
        {pujaPackage?.puja_packages_point9 ? (
          <li>{pujaPackage?.puja_packages_point9}</li>
        ) : null}
        {pujaPackage?.puja_packages_point10 ? (
          <li>{pujaPackage?.puja_packages_point10}</li>
        ) : null}
      </ul>
      <p>
        ₹<span className="plan-amount">{pujaPackage?.puja_packages_price}</span>{" "}
        <span className="plan-duration">/year</span>
      </p>
      <a onClick={() => handleCheckout(pujaPackage?.puja_packages_id, pujaPackage?.puja_packages_price)}>
        <button className="plan-choose"> Choose </button>
      </a>
      {/* <button className="plan-choose"> Choose </button> */}
    </div>
  );
};

export default PujaPackageCard;
