import React, { useEffect } from 'react';
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeam } from '../features/teamSlice';

export default function team() {
  const dispatch = useDispatch();
  const team = useSelector((state) => state.team.team);
  const status = useSelector((state) => state.team.status);

  useEffect(() => {
    if (status === 'idle') {
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
        "url(https://vaidikanushthanam.in/static/img/subheader.jpg)"
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
            <li className="breadcrumb-item active" aria-current="pageOur ">
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
        <div className="col-lg-3 col-md-6">
          <div className="sigma_volunteers volunteers-4">
            <div className="sigma_volunteers-thumb">
              <img
                src="https://vaidikanushthanam.in/assets/setting/legal-advisor1.jpg"
                alt="Adv Ashish Pandey"
              />
              <ul className="sigma_sm">
                <li>
                  {" "}
                  <a href="#" className="trigger-volunteers-socials">
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
                  <a href="javascript:void(0);">Adv Ashish Pandey</a>
                </h5>
                <p>Legal Advisor</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="sigma_volunteers volunteers-4">
            <div className="sigma_volunteers-thumb">
              <img
                src="https://vaidikanushthanam.in/assets/setting/pandit.jpg"
                alt="Pd Dhananjay Shashtri"
              />
              <ul className="sigma_sm">
                <li>
                  {" "}
                  <a href="#" className="trigger-volunteers-socials">
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
                  <a href="javascript:void(0);">Pd Dhananjay Shashtri</a>
                </h5>
                <p>Pandit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="sigma_volunteers volunteers-4">
            <div className="sigma_volunteers-thumb">
              <img
                src="https://vaidikanushthanam.in/assets/setting/pandit1.jpg"
                alt="Pd Ankit Kr Pandey"
              />
              <ul className="sigma_sm">
                <li>
                  {" "}
                  <a href="#" className="trigger-volunteers-socials">
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
                  <a href="javascript:void(0);">Pd Ankit Kr Pandey</a>
                </h5>
                <p>Pandit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="sigma_volunteers volunteers-4">
            <div className="sigma_volunteers-thumb">
              <img
                src="https://vaidikanushthanam.in/assets/setting/n-a7.jpg"
                alt="Umang Shahi"
              />
              <ul className="sigma_sm">
                <li>
                  {" "}
                  <a href="#" className="trigger-volunteers-socials">
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
                  <a href="javascript:void(0);">Umang Shahi</a>
                </h5>
                <p>Business Development Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="sigma_volunteers volunteers-4">
            <div className="sigma_volunteers-thumb">
              <img
                src="https://vaidikanushthanam.in/assets/setting/pandit2.jpg"
                alt="Pd. Ashutosh"
              />
              <ul className="sigma_sm">
                <li>
                  {" "}
                  <a href="#" className="trigger-volunteers-socials">
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
                  <a href="javascript:void(0);">Pd. Ashutosh</a>
                </h5>
                <p>Pandit</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="sigma_volunteers volunteers-4">
            <div className="sigma_volunteers-thumb">
              <img
                src="https://vaidikanushthanam.in/assets/setting/n-a8.jpg"
                alt="Aman Singh"
              />
              <ul className="sigma_sm">
                <li>
                  {" "}
                  <a href="#" className="trigger-volunteers-socials">
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
                  <a href="javascript:void(0);">Aman Singh</a>
                </h5>
                <p>Relationship Manager</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="sigma_volunteers volunteers-4">
            <div className="sigma_volunteers-thumb">
              <img
                src="https://vaidikanushthanam.in/assets/setting/n-a9.jpg"
                alt="Sunny Prajapati"
              />
              <ul className="sigma_sm">
                <li>
                  {" "}
                  <a href="#" className="trigger-volunteers-socials">
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
                  <a href="javascript:void(0);">Sunny Prajapati</a>
                </h5>
                <p />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="sigma_volunteers volunteers-4">
            <div className="sigma_volunteers-thumb">
              <img
                src="https://vaidikanushthanam.in/assets/setting/finance.jpg"
                alt="Innotech Finexa Pvt Ltd"
              />
              <ul className="sigma_sm">
                <li>
                  {" "}
                  <a href="#" className="trigger-volunteers-socials">
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
                  <a href="javascript:void(0);">Innotech Finexa Pvt Ltd</a>
                </h5>
                <p>Finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
