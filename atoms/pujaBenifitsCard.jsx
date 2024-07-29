import React from "react";

const PujaBenifitsCard = ({ pujaBanifit }) => {
  return (
    <div class="col-md-4 mb-3" key={pujaBanifit?.puja_benefits_id}>
      <div class="d-flex align-items-start p-3 border bg-light">
        <div class="flex-shrink-0">
          <div class="bg-warning rounded-circle d-flex justify-content-center align-items-center benifit-image">
            <img
              src={`${pujaBanifit?.puja_benefits_image_link}${pujaBanifit?.puja_benefits_image}`}
              className="benifit-image"
              alt={pujaBanifit?.puja_benefits_title}
              title={pujaBanifit?.puja_benefits_title}
            />
          </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <h2 class="p-101">{pujaBanifit?.puja_benefits_title}</h2>
          {pujaBanifit?.puja_benefits_descreption}
        </div>
      </div>
    </div>
  );
};

export default PujaBenifitsCard;
