import React from "react";
import Link from "next/link";

const PoojaCard = ({ pooja }) => {
  return (
    <div className="col-lg-4 col-md-6" key={pooja?.puja_id}>
      <div className="sigma_service style-2">
        <div className="sigma_service-thumb">
          <img
            src={`${pooja?.puja_image_link}${pooja?.puja_image}`}
            alt={pooja?.puja_slug}
            title={pooja?.puja_title}
          />
        </div>
        <div className="sigma_service-body">
          <h3>
            <Link href={`/pujaDetail/${pooja?.puja_slug}`}>
              {pooja?.puja_title}
            </Link>
          </h3>
          <Link
            href={`/pujaDetail/${pooja?.puja_slug}`}
            className="sigma_btn-custom"
          >
            Participate
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PoojaCard;
