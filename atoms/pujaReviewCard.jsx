import React from "react";

const PujaReviewCard = ({ pujaReview }) => {
  return (
    <li className="comment-item" key={pujaReview?.puja_reviews_id}>
      <img
        src={`${pujaReview?.puja_reviews_image_link}${pujaReview?.puja_reviews_image}`}
        alt={pujaReview?.puja_reviews_title}
      />
      <div className="comment-body">
        <h5>{pujaReview?.puja_reviews_title}</h5>
        <div className="sigma_rating">
          <i
            className={
              pujaReview?.puja_reviews_rate >= 1
                ? `fa fa-star active`
                : `fa fa-star`
            }
          />
          <i
            className={
              pujaReview?.puja_reviews_rate >= 2
                ? `fa fa-star active`
                : `fa fa-star`
            }
          />
          <i
            className={
              pujaReview?.puja_reviews_rate >= 3
                ? `fa fa-star active`
                : `fa fa-star`
            }
          />
          <i
            className={
              pujaReview?.puja_reviews_rate >= 4
                ? `fa fa-star active`
                : `fa fa-star`
            }
          />
          <i
            className={
              pujaReview?.puja_reviews_rate >= 5
                ? `fa fa-star active`
                : `fa fa-star`
            }
          />
        </div>
        <p>
         {pujaReview?.puja_reviews_descreption
}
        </p>
        {/* <span>
          <i className="far fa-clock" /> January 13 2024
        </span> */}
      </div>
    </li>
  );
};

export default PujaReviewCard;
