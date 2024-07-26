import React from 'react'
import Link from 'next/link'
export default function Pujaoreder() {
  return (
    <div>
    <>
  <header className="sigma_header header-3 can-sticky header-absolute">
    {/* Middle Header Start */}
    <div className="sigma_header-middle">
      <div className="container-fluid">
        <nav className="navbar">
          {/* Logo Start */}
          <div className="sigma_logo-wrapper">
            <a className="navbar-brand" href="index.html">
              <img src="./../assets/img/logo.png" alt="logo" />
            </a>
          </div>
          {/* Logo End */}
          {/* Menu */}
          <ul className="navbar-nav">
            <li className="menu-item">
              <a href="#">My Bookings</a>
            </li>
            <li className="menu-item">
              <Link href="/login/Profile">My Profile</Link>
              {/* {" "}
              <a href="#">My Profile</a>{" "} */}
            </li>
            <li className="menu-item">
              <Link href="/pujaorder/Pujaorder">Book New Puja</Link>
              {/* {" "}
              <a href="#">Book New Puja</a>{" "} */}
            </li>
            <li className="menu-item">
            <Link href="/login/Login">Logout</Link>
              {/* {" "}
              <a href="#">Logout</a>{" "} */}
            </li>
          </ul>
          <div className="sigma_header-controls style-2">
            <ul className="sigma_header-controls-inner">
              {/* Desktop Toggler */}
              <li className="aside-toggler style-2 aside-trigger-right desktop-toggler">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
              {/* Mobile Toggler */}
              <li className="aside-toggler style-2 aside-trigger-left">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    {/* Middle Header End */}
  </header>
  {/* partial */}
  <div className="page-banner instructor-bg-blk">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-12">
          <h1 className="text-white">My Pujas Booking</h1>
        </div>
      </div>
    </div>
  </div>
  <section className="page-content course-sec">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table table-bordered table-striped my_table_responsive">
              <thead className="table-dark ">
                <tr>
                  
                  <th scope="col">Puja ID</th>
                  <th scope="col">Pooja Name</th>
                  <th scope="col">Booking Date</th>
                  <th scope="col">Pooja Date</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  
                  <td scope="row">
                    <Link href="/paymentsdetail/Paymentsdetails">GHH123456</Link>
                  </td>
                  <td>Law Assignment Help</td>
                  <td>Mar 31, 2023</td>
                  <td>Mar 31, 2023</td>
                  <td>
                    <a className="label label-danger" href="">
                      2100RS
                    </a>
                  </td>
                  <td>
                    <b className="download_completed_data"> Cancelled </b>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</>


    </div>
  )
}
