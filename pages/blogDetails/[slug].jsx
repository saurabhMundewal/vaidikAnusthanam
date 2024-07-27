import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import Link from "next/link";

export default function BlogDetailpage() {
  const router = useRouter();
  const { slug } = router.query;
  const [blogData, setBlogData] = useState([]);
  const [isOpen, setIsOpen] = useState(1);

  const fetchBlog = async (slug) => {
    try {
      const response = await axiosInstance.post(`/Blogs/blogDetails/${slug}`);
      if (response?.status === 202) {
        setBlogData([]);
      }
      setBlogData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setBlogData([]);
      console.error("Error fetching blog data:", error);
    }
  };
  const handleClickTab = (val) => {
    setIsOpen(val);
  };

  useEffect(() => {
    if (slug) {
      fetchBlog(slug);
    }
  }, [slug]);

  return (
    <div>
      <>
  <div
    className="sigma_subheader dark-overlay dark-overlay-2"
    style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
  >
    <div className="container">
      <div className="sigma_subheader-inner">
        <div className="sigma_subheader-text">
          <h1>Blog Details</h1>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="javascript:(void)">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Blog Details
            </li>
          </ol>
        </nav>
      </div>
    </div>
  </div>
  {/* partial */}
  {/* Post Content Start */}
  <div className="section sigma_post-single">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="post-detail-wrapper">
            <div className="entry-content">
              <div className="sigma_post-meta">
                <div className="sigma_post-categories">
                  <a href="blog-details.html" className="sigma_post-category">
                    Hinduism
                  </a>
                </div>
              </div>
              <h4 className="entry-title">
                I Will Not Reject My Faith in Rama, Shiva, Vishnu, Krishna etc.
              </h4>
              <div className="sigma_post-meta">
                <a href="blog-details.html">
                  {" "}
                  <i className="far fa-eye" /> 232 Views
                </a>
                <a href="blog-details.html">
                  {" "}
                  <i className="far fa-comments" /> 35 Comments
                </a>
                <a href="blog-details.html">
                  {" "}
                  <i className="far fa-calendar" /> May 20, 2024
                </a>
              </div>
              <p>
                Temple is a place where Hindu worship our Bhagwan Ram, Shiva,
                Vishnu, Krishna etc. Proin eget tortor industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type, People ask questions related to Hinduism. specimen
                book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged. It
                was popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
              <h5>Our mission is to share the Good of Hinduism</h5>
              <p>
                I find this argument as sad as the argument that without a
                belief in God{" "}
                <a href="javascript:(void)">people would likewise be unethical.</a> Our mission
                is to share the Good of Hinduism, Loving, Faith and Serving.
                People ask questions related to Hinduism. to make a type
                specimen book.
              </p>
              <a href="./../assets/img/blog/details/1.jpg" className="gallery-thumb">
                <img src="./../assets/img/blog/details/1.jpg" alt="post" />
              </a>
              <h4>People ask questions related to Hinduism</h4>
              <p>
                Our mission is to share the Good of Hinduism, Loving, Faith and
                Serving. People ask questions related to Hinduism. Temple is a
                place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
                Krishna etc. galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting
              </p>
              <hr />
              <h4>Should I Believe in Rebirth?</h4>
              <p>
                We never believe in reborn the Good of Hinduism, Loving, Faith
                and Serving. People ask questions related to Hinduism. Temple is
                a place where Hindu worship our Bhagwan Ram, Shiva, Vishnu,
                Krishna etc. galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.
              </p>
              <h4>Should I Believe in Rebirth?</h4>
              <ul className="sigma_list sigma_list-2">
                <li>People ask questions related to Hinduism</li>
                <li>We never believe in reborn </li>
                <li>People ask questions related to Hinduism</li>
                <li>We never believe in reborn </li>
              </ul>
              <blockquote>
                <cite>By Hetmayar</cite>
                <p>
                  Some Hindu teachers insist that believing in rebirth is
                  necessary for living an ethical life. Their concern is that if
                  there is no fear of karmic repercussions in future lifetimes
                </p>
              </blockquote>
              <div className="row align-items-center">
                <div className="col-lg-5 col-xl-4 mb-lg-30">
                  <img
                    src="./../assets/img/blog/details/3.jpg"
                    className="w-100"
                    alt="details"
                  />
                </div>
                <div className="col-lg-7 col-xl-8">
                  <p>
                    Temple is a place where Hindu worship our Bhagwan Ram,
                    Shiva, Vishnu, Krishna etc. Proin eget tortor industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type, People ask questions related
                    to Hinduism. specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the
                    1960s with the release of Letraset sheets containing Lorem
                    Ipsum passages, and more recently with
                  </p>
                </div>
              </div>
              <p>
                Hindu teachers insist that believing in rebirth is necessary for
                living an ethical life. Proin eget tortor industry's standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type, People ask questions related to Hinduism.
                specimen book. It has survived not only five centuries, but also
                the leap into electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum
              </p>
            </div>
            {/* Post Meta Start */}
            <div className="sigma_post-single-meta">
              <div className="sigma_post-single-meta-item">
                <h6>Tags</h6>
                <div className="tagcloud">
                  <a href="javascript:(void)">Portfolio</a>
                  <a href="javascript:(void)">Creative</a>
                  <a href="javascript:(void)">Intuitive</a>
                </div>
              </div>
              <div className="sigma_post-single-meta-item sigma_post-share">
                <h6>Share</h6>
                <ul className="sigma_sm">
                  <li>
                    <a href="javascript:(void)">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:(void)">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:(void)">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="javascript:(void)">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* Post Meta End */}
            {/* Post Pagination Start */}
            <div className="section"></div>
            {/* Post Pagination End */}
            {/* Related Posts Start */}
            <div className="section">
              <h5>Related Posts</h5>
              <div className="row">
                {/* Article Start */}
                <div className="col-md-6">
                  <article className="sigma_post">
                    <div className="sigma_post-thumb">
                      <a href="blog-details.html">
                        <img src="./../assets/img/blog/details/4.jpg" alt="post" />
                      </a>
                    </div>
                    <div className="sigma_post-body">
                      <div className="sigma_post-meta">
                        <a href="blog-details.html" className="sigma_post-date">
                          {" "}
                          <i className="far fa-calendar" /> May 20, 2024
                        </a>
                      </div>
                      <h5>
                        {" "}
                        <a href="blog-details.html">
                          Education for all rural children are necessary.
                        </a>{" "}
                      </h5>
                      <p>
                        I Will Not Reject My Faith in Rama, Shiva, Vishnu,
                        Krishna etc.
                      </p>
                    </div>
                  </article>
                </div>
                {/* Article End */}
                {/* Article Start */}
                <div className="col-md-6">
                  <article className="sigma_post">
                    <div className="sigma_post-thumb">
                      <a href="blog-details.html">
                        <img src="./../assets/img/blog/details/5.jpg" alt="post" />
                      </a>
                    </div>
                    <div className="sigma_post-body">
                      <div className="sigma_post-meta">
                        <a href="blog-details.html" className="sigma_post-date">
                          {" "}
                          <i className="far fa-calendar" /> May 20, 2024
                        </a>
                      </div>
                      <h5>
                        {" "}
                        <a href="blog-details.html">
                          Ensure child safety &amp; health in World.
                        </a>{" "}
                      </h5>
                      <p>
                        I Will Not Reject My Faith in Rama, Shiva, Vishnu,
                        Krishna etc.
                      </p>
                    </div>
                  </article>
                </div>
                {/* Article End */}
              </div>
            </div>
            {/* Related Posts End */}
          </div>
        </div>
        {/* Sidebar Start */}
        <div className="col-lg-4">
          <div className="sidebar">
            {/* Search Widget Start */}
            <div className="sidebar-widget widget-search">
              <h5 className="widget-title">Search</h5>
              <form method="post">
                <div className="sigma_search-adv-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Posts"
                    name="search"
                    defaultValue=""
                  />
                  <button type="submit" name="button">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
            {/* Search Widget End */}
            {/* Popular Feed Start */}
            <div className="sidebar-widget widget-recent-posts">
              <h5 className="widget-title">Recent Posts</h5>
              <article className="sigma_recent-post">
                <a href="blog-details.html">
                  <img src="./../assets/img/blog/md/1.jpg" alt="post" />
                </a>
                <div className="sigma_recent-post-body">
                  <h6>
                    {" "}
                    <a href="blog-details.html">
                      As we've all discovered by now, the world can change
                    </a>{" "}
                  </h6>
                  <a href="blog-details.html">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2024
                  </a>
                </div>
              </article>
              <article className="sigma_recent-post">
                <a href="blog-details.html">
                  <img src="./../assets/img/blog/md/2.jpg" alt="post" />
                </a>
                <div className="sigma_recent-post-body">
                  <h6>
                    {" "}
                    <a href="blog-details.html">
                      Testimony love offering so blessed
                    </a>{" "}
                  </h6>
                  <a href="blog-details.html">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2024
                  </a>
                </div>
              </article>
              <article className="sigma_recent-post">
                <a href="blog-details.html">
                  <img src="./../assets/img/blog/md/3.jpg" alt="post" />
                </a>
                <div className="sigma_recent-post-body">
                  <h6>
                    {" "}
                    <a href="blog-details.html">
                      As we've all discovered by now, the world can change
                    </a>{" "}
                  </h6>
                  <a href="blog-details.html">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2024
                  </a>
                </div>
              </article>
            </div>
            {/* Popular Feed End */}
            {/* Categories Start */}
            <div className="sidebar-widget widget-categories">
              <h5 className="widget-title"> Our Categories </h5>
              <ul className="sidebar-widget-list">
                <li>
                  {" "}
                  <a href="javascript:(void)">
                    {" "}
                    Avatars <span>32</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:(void)">
                    {" "}
                    Festivals <span>22</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:(void)">
                    {" "}
                    Mahabharat <span>17</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:(void)">
                    {" "}
                    Mythology <span>05</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:(void)">
                    {" "}
                    Religion <span>32</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:(void)">
                    {" "}
                    Uncategorized <span>12</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:(void)">
                    {" "}
                    Ramayan <span>42</span>{" "}
                  </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="javascript:(void)">
                    {" "}
                    Bhagwat Gita <span>04</span>{" "}
                  </a>{" "}
                </li>
              </ul>
            </div>
            {/* Categories End */}
            {/* Social Media Start */}
            <div className="sidebar-widget">
              <h5 className="widget-title">Never Miss Out</h5>
              <ul className="sigma_sm square light">
                <li>
                  <a href="javascript:(void)">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="javascript:(void)">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="javascript:(void)">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="javascript:(void)">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
            {/* Social Media End */}
          </div>
        </div>
        {/* Sidebar End */}
      </div>
    </div>
  </div>
</>

    </div>
  )
}
