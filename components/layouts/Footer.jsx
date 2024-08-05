import React from "react";
import Script from "next/script";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

export default function Footer() {
  const generalConfiguration = useSelector(
    (state) => state.generalConfiguration.data
  );
  const libraryCategory = useSelector((state) => state?.library?.categories);

  return (
    <>
      <footer className="sigma_footer footer-2 sigma_footer-dark">
        {/* Middle Footer */}
        <div className="sigma_footer-middle">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">About Us</h5>
                <p className="mb-4">{generalConfiguration?.footer_about}</p>
                <div className="d-flex align-items-center justify-content-md-start justify-content-center">
                  <i className="far fa-phone custom-primary me-3" />
                  <span>{generalConfiguration?.primary_mobile} </span>
                </div>
                <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
                  <i className="far fa-envelope custom-primary me-3" />
                  <span>{generalConfiguration?.organization_email}</span>
                </div>
                <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
                  <i className="far fa-map-marker custom-primary me-3" />
                  <span>{generalConfiguration?.address}</span>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">Quick Links</h5>
                <ul>
                  <li>
                    <i className="fas fa-om" />{" "}
                    <Link href="/about">About Us</Link>{" "}
                  </li>
                  <li>
                    <i className="fas fa-om" /> <Link href="/puja">Puja</Link>{" "}
                  </li>
                  {/* <li>
                    <i className="fas fa-om" />{" "}
                    <Link href="/Puja">Temples</Link>
                  </li> */}
                  <li>
                    <i className="fas fa-om" /> <Link href="/Blog">Blog</Link>
                  </li>
                  <li>
                    <i className="fas fa-om" />
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">Information</h5>
                <ul>
                  <li>
                    <i className="fas fa-om" />
                    <Link href="/Faq/">FAQs</Link>
                  </li>
                  <li>
                    <i className="fas fa-om" />
                    <Link href="#">Privacy Policy </Link>
                  </li>
                  {/*<li><i class="fas fa-om"></i><Link href="/payment-policy/">Payment Policy </Link></li>*/}
                  <li>
                    <i className="fas fa-om" />
                    <Link href="#">Refund Policy </Link>
                  </li>
                  <li>
                    <i className="fas fa-om" />
                    <Link href="#">Terms &amp; Conditions </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
                <h5 className="widget-title">Library</h5>
                <ul>
                  {libraryCategory?.length &&
                    libraryCategory?.map((category) => {
                      return (
                        <li className="menu-item" key={category?.data_id}>
                          <Link href={`/libraries/${category?.slug}`}>
                            {category?.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="sigma_footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-sm-5">
                <div className="sigma_footer-copyright">
                  {/*<p> Copyright © Vaidik Anushthanam - <Link href="#" class="custom-primary">2024</Link> </p>*/}
                  <p>
                    Design &amp; Developed By{" "}
                    <Link href={generalConfiguration?.powerd_by_link ? generalConfiguration?.powerd_by_link :'#'}>
                      {generalConfiguration?.powerd_by}
                    </Link>
                    ©2024. All Rights Reserved.
                  </p>
                </div>
              </div>
              <div className="col-sm-2">
                <div className="sigma_footer-logo">
                  <img
                    src={generalConfiguration?.profile_img}
                    alt="Vaidik Anushthanam -Book Online Pujas | Puja At Home"
                    title="Vaidik Anushthanam -Book Online Pujas | Puja At Home"
                    style={{ maxWidth: 200 }}
                  />
                </div>
              </div>
              <div className="col-sm-5">
                <ul className="sigma_sm square mr-2">
                  <li>
                    <Link
                      href={generalConfiguration?.facebook ? generalConfiguration?.facebook : '#'}
                      target="_blank;"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={generalConfiguration?.instagram ? generalConfiguration?.instagram : '#'}
                      target="_blank;"
                    >
                      <i className="fab fa-instagram" />
                    </Link>
                  </li>
                  <li>
                    <Link href={generalConfiguration?.twitter ? generalConfiguration?.twitter : '#'} target="_blank;">
                      <i className="fab fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href={generalConfiguration?.youtube ? generalConfiguration?.youtube : '#'} target="_blank;">
                      <i className="fab fa-youtube" />
                    </Link>
                  </li>
                  {/* <li>
                    <Link href="#" target="_blank;">
                      <i className="fab fa-spotify" />
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href={generalConfiguration?.pinterest ? generalConfiguration?.pinterest : '#'}
                      target="_blank;"
                    >
                      <i className="fab fa-pinterest" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
