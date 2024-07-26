import React from "react";

export default function Search() {
  return (
    <div>
      <>
        {/* Search Start */}
        <div className="sigma_search-form-wrapper">
          <div className="sigma_search-trigger close-btn">
            <span />
            <span />
          </div>
          <form className="sigma_search-form" method="post">
            <input type="text" placeholder="Search..." defaultValue="" />
            <button type="submit" className="sigma_search-btn">
              <i className="fal fa-search" />
            </button>
          </form>
        </div>
        {/* Search End */}
      </>
    </div>
  );
}
