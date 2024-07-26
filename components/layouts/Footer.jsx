import React from "react";
import Script from "next/script";
import Link from "next/link";
export default function Footer() {
  return (
    <>
        <footer className="sigma_footer footer-2 sigma_footer-dark">
  {/* Middle Footer */}
  <div className="sigma_footer-middle">
    <div className="container">
      <div className="row">
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
          <h5 className="widget-title">About Us</h5>
          <p className="mb-4">
            Vaidik Anushthanam : Your Source for Online and Offline Temple
            Pujas. Experience Divine Blessings Anywhere, Anytime.
          </p>
          <div className="d-flex align-items-center justify-content-md-start justify-content-center">
            <i className="far fa-phone custom-primary me-3" />
            <span>+91 9651005999 </span>
          </div>
          <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
            <i className="far fa-envelope custom-primary me-3" />
            <span>info@vaidikanushthanam.in</span>
          </div>
          <div className="d-flex align-items-center justify-content-md-start justify-content-center mt-2">
            <i className="far fa-map-marker custom-primary me-3" />
            <span>
              L8/100, Shashtri Nagar Colony, Opposite IP Sigra Mall, Varanasi,
              221010
            </span>
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
              <i className="fas fa-om" />{" "}
              <Link href="/Puja">Puja</Link>{" "}
            </li>
            <li>
              <i className="fas fa-om" />{" "}
              <Link href="/Puja">Temples</Link>
            </li>
            <li>
              <i className="fas fa-om" />{" "}
              <Link href="/Blog">Blog</Link>
            </li>
            <li>
              <i className="fas fa-om" />
              <Link href="#">Contact Us</Link>
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
              <Link href="#">
                Privacy Policy{" "}
              </Link>
            </li>
            {/*<li><i class="fas fa-om"></i><Link href="/payment-policy/">Payment Policy </Link></li>*/}
            <li>
              <i className="fas fa-om" />
              <Link href="#">
                Refund Policy{" "}
              </Link>
            </li>
            <li>
              <i className="fas fa-om" />
              <Link href="#">
                Terms &amp; Conditions{" "}
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 footer-widget">
          <h5 className="widget-title">Library</h5>
          <ul>
            <li>
              <i className="fas fa-om" />
              <Link href="#">
                आरती
              </Link>{" "}
            </li>
            <li>
              <i className="fas fa-om" />
              <Link href="#">
                चालीसा
              </Link>{" "}
            </li>
            <li>
              <i className="fas fa-om" />
              <Link href="#">
                मंत्र
              </Link>{" "}
            </li>
            <li>
              <i className="fas fa-om" />
              <Link href="#">
                सत्संग साहित्य
              </Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* Footer Bottom */}
  <div className="sigma_footer-bottom">
    <div className="container-fluid">
      <div className="sigma_footer-copyright">
        {/*<p> Copyright © Vaidik Anushthanam - <Link href="#" class="custom-primary">2024</Link> </p>*/}
        <p>
          Design &amp; Developed By{" "}
          <Link href="https://www.w2sinfotech.com/">W2S Infotech </Link>©2024. All
          Rights Reserved.
        </p>
      </div>
      <div className="sigma_footer-logo">
        <img
          src="https://vaidikanushthanam.in/assets/setting/vaidik-anushthanam1.png"
          alt="Vaidik Anushthanam -Book Online Pujas | Puja At Home"
          title="Vaidik Anushthanam -Book Online Pujas | Puja At Home"
          style={{ maxWidth: 200 }}
        />
      </div>
      <ul className="sigma_sm square">
        <li>
          <Link
            href="https://www.facebook.com/profile.php?id=61553129522879&mibextid=9R9pXO"
            target="_blank;"
          >
            <i className="fab fa-facebook-f" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.instagram.com/vaidikanushthanam108?igsh=MWVhemJuaTFrdXQ4NQ=="
            target="_blank;"
          >
            <i className="fab fa-instagram" />
          </Link>
        </li>
        <li>
          <Link
            href="https://x.com/VAnushthanam108?t=I8E6lP95GZzYveRrKV9RBA&s=09"
            target="_blank;"
          >
            <i className="fab fa-twitter" />
          </Link>
        </li>
        <li>
          <Link
            href="https://youtube.com/@VaidikAnushthanam?si=mZ0lKL_lj0tDf-Hl"
            target="_blank;"
          >
            <i className="fab fa-youtube" />
          </Link>
        </li>
        <li>
          <Link href="" target="_blank;">
            <i className="fab fa-spotify" />
          </Link>
        </li>
        <li>
          <Link href="https://pin.it/2CgrlUzTP" target="_blank;">
            <i className="fab fa-pinterest" />
          </Link>
        </li>
      </ul>
    </div>
  </div>
</footer>

       

      </>
    
  );
}
