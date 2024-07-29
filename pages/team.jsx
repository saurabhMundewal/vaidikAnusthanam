import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeam } from "../features/teamSlice";

export default function team() {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team.team);
  const status = useSelector((state) => state.team.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTeam());
    }
  }, [status, dispatch]);
  return (
    <div>
      <>
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{
            backgroundImage:
              "url(https://vaidikanushthanam.in/static/img/subheader.jpg)",
          }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <div className="sigma_subheader-text">
                <h1>Our Team</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="btn-link" href="/">
                      Home
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="pageOur "
                  >
                    Team
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        {/* About Start */}
        <div className="section section-padding">
          <div className="container">
            <div className="row">
              {team?.length ? (
                team?.map((teamData, ind) => {
                  return (
                    <div className="col-lg-3 col-md-6" key={ind}>
                      <div className="sigma_volunteers volunteers-4">
                        <div className="sigma_volunteers-thumb">
                          <img src={teamData?.image} alt={teamData?.name} />
                          <ul className="sigma_sm">
                            <li>
                              {" "}
                              <a
                                href="#"
                                className="trigger-volunteers-socials"
                              >
                                {" "}
                                <i className="fal fa-plus" />{" "}
                              </a>{" "}
                            </li>
                            {/**/}
                          </ul>
                        </div>
                        <div className="sigma_volunteers-body">
                          <div className="sigma_volunteers-info">
                            <h5>
                              <a href="#">{teamData?.name}</a>
                            </h5>
                            <p>{teamData?.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p>Team Not Found...............</p>
              )}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
