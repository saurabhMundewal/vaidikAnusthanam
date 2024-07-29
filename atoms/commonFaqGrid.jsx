import React from "react";

const CommonFaqGrid = ({ faqId,content, title, handleClickFaq, isOpen}) => {
   return (
    <div className="card" key={faqId}>
      <div
        className="card-header"
        data-bs-toggle="collapse"
        role="button"
        data-bs-target="#generalOne"
        aria-expanded={isOpen === faqId ? "true" : "false"}
        aria-controls="generalOne"
        onClick={() => handleClickFaq(faqId)}
      >
        {title}
      </div>
      <div
        id="generalOne"
        className={`collapse ${isOpen === faqId ? "show" : ""}`}
        data-bs-parent="#generalFAQExample"
      >
        <div className="card-body">
          <div
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CommonFaqGrid;
