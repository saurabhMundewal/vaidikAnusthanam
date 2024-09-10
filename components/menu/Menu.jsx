import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Cookies from "js-cookie";
import {
  fetchLibraryCategories,
} from "../../features/librarySlice";
import { fetchGeneralConfiguration } from "../../features/generalConfigurationSlice";

export default function Menu() {
  const dispatch = useDispatch();
  const userType = Cookies.get("user_type");
  const userid = Cookies.get("id");
  const libraryCategory = useSelector((state) => state?.library?.categories);
  const generalConfiguration = useSelector(
    (state) => state.generalConfiguration.data
  );
  const [href, setHref] = useState("/login/login");
  const [menuText, setMenuText] = useState("Login");
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isExpand, setIsExpand] = useState("");
  const [isExpandSubMenu, setIsExpandSubMenu] = useState("");

  useEffect(() => {
    dispatch(fetchLibraryCategories());
    dispatch(fetchGeneralConfiguration());
  }, [dispatch]);

  useEffect(() => {
    if (userType === "Devotees" && userid !== "") {
      setHref("/user/Profile");
      setMenuText("Dashboard");
    }
  }, [userType, userid]);

  const handleExpandSub = (type, menu) => {
    if (type === "mobile") {
      setIsExpand(menu);
      setIsExpandSubMenu(menu);
    }
  };

  const handleExpandSubMenu = (type, menu) => {
    if (type === "mobile") {
      setIsExpandSubMenu(menu);
    }
  };

  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };

  const menuItem = (menuType) => {
    return (
      <>
        <li className="menu-item" onClick={closeMobileMenu}>
          <Link href="/">Home</Link>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" onClick={() => handleExpandSub(menuType, "about")}>
            About US
          </a>
          <ul
            className={
              isExpand === "about" ? "display-block sub-menu" : "sub-menu"
            }
          >
            <li className="menu-item" onClick={closeMobileMenu}>
              <Link href="/about">About</Link>
            </li>
            <li className="menu-item" onClick={closeMobileMenu}>
              <Link href="/team">Our Team</Link>
            </li>
            <li className="menu-item" onClick={closeMobileMenu}>
              <Link href="/faq">Faq</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" onClick={() => handleExpandSub(menuType, "Poojas")}>
            Pujas
          </a>
          <ul
            className={
              isExpand === "Poojas" ? "display-block sub-menu" : "sub-menu"
            }
          >
            <li className="menu-item" onClick={closeMobileMenu}>
              <Link href="/puja/online-puja">Online Puja</Link>
            </li>
            <li className="menu-item menu-item-has-children">
              <a
                href="#"
                onClick={() => handleExpandSubMenu(menuType, "offline-pooja")}
              >
                Offline Puja
              </a>
              <ul
                className={
                  isExpandSubMenu === "offline-pooja"
                    ? "display-block sub-menu"
                    : "sub-menu"
                }
              >
                <li className="menu-item" onClick={closeMobileMenu}>
                  <Link href="/puja/puja-at-temples">At Temple</Link>
                </li>
                <li className="menu-item" onClick={closeMobileMenu}>
                  <Link href="/puja/puja-at-home">At Home</Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" onClick={() => handleExpandSub(menuType, "Libarary")}>
            Library
          </a>
          <ul
            className={
              isExpand === "Libarary" ? "display-block sub-menu" : "sub-menu"
            }
          >
            {libraryCategory?.length &&
              libraryCategory?.map((category) => {
                return (
                  <li
                    className="menu-item"
                    key={category?.data_id}
                    onClick={closeMobileMenu}
                  >
                    <Link href={`/libraries/${category?.slug}`}>
                      {category?.title}
                    </Link>
                  </li>
                );
              })}
          </ul>
        </li>
        <li className="menu-item menu-item-has-children">
          <a href="#" onClick={() => handleExpandSub(menuType, "Services")}>
            Services
          </a>
          <ul
            className={
              isExpand === "Services" ? "display-block sub-menu" : "sub-menu"
            }
          >
            <li className="menu-item" onClick={closeMobileMenu}>
              <Link href="/service/astrology">Astrology</Link>
            </li>
            <li className="menu-item" onClick={closeMobileMenu}>
              <Link href="/service/numerology">Numerology</Link>
            </li>
          </ul>
        </li>
        <li className="menu-item" onClick={closeMobileMenu}>
          <Link href="/blogs">Blog</Link>
        </li>
        <li className="menu-item" onClick={closeMobileMenu}>
          <Link href="/contact-us">Contact</Link>
        </li>
        {menuType === "mobile" ? (
          <li onClick={closeMobileMenu}>
            <Link className="sigma_btn-custom" href={href}>
              {menuText}
            </Link>
          </li>
        ) : null}
      </>
    );
  };

  return (
    <div>
      <aside
        className={`sigma_aside sigma_aside-left ${openMobileMenu ? "open" : ""}`}
      >
        <Link className="navbar-brand" href="/">
          <img src={generalConfiguration?.profile_img} alt="logo" />
        </Link>
        <ul>{menuItem("mobile")}</ul>
      </aside>
      <div
        className={`sigma_aside-overlay aside-trigger-left ${openMobileMenu ? "open" : ""}`}
        onClick={closeMobileMenu}
      />
      <header className="sigma_header header-3 can-sticky header-absolute">
        <div className="sigma_header-middle">
          <div className="container-fluid">
            <nav className="navbar">
              <div className="sigma_logo-wrapper">
                <a className="navbar-brand" href="/">
                  <img
                    src={generalConfiguration?.profile_img}
                    alt="logo"
                    className="logo-img"
                  />
                </a>
              </div>
              <ul className="navbar-nav">{menuItem("desktop")}</ul>
              <div className="sigma_header-controls style-2">
                <ul className="sigma_header-controls-inner">
                  <li>
                    <Link className="sigma_btn-custom" href={href}>
                      {menuText}
                    </Link>
                  </li>
                  <li
                      className="aside-toggler style-2 aside-trigger-left"
                      onClick={() => setOpenMobileMenu(true)}
                    >
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
      </header>
    </div>
  );
}
