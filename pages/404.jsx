// pages/404.js
import Link from 'next/link';
import  '../styles/404.module.css';

export default function Custom404() {
  return (
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
                <h1>404 Page Not Found</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="btn-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                  Page Not Found
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
          
            <div className="row align-items-center">
              <div className="col-lg-12">
                <div className="me-lg-30" style={{ marginTop: 20 }}>
                  <div className="section-title mb-0 text-start">
                                     <div className="sigma_icon-block icon-block-3">
                    <div className="icon-wrapper"></div>
                    <div className="sigma_icon-block-content">
                      <h5></h5>
                     <p>Page is not Available</p>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
        </section>

       
        </>

  );
}
