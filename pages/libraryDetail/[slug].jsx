import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import Link from "next/link";
import Head from "next/head";

export default function LibraryDetailpage() {
  const router = useRouter();
  const { slug } = router.query;
  const [libraryData, setLibraryData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isOpen, setIsOpen] = useState(1);

  const fetchLibrary = async (slug) => {
    try {
      const response = await axiosInstance.post(
        `/Library/libraryDetails/${slug}`
      );
      if (response?.status === 202) {
        setLibraryData([]);
      }
      setLibraryData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setLibraryData([]);
      console.error("Error fetching blog data:", error);
    }
  };

  const fetchLibraryCategory = async () => {
    try {
      const response = await axiosInstance.post(`/Library/LibraryCategory`);
      if (response?.status === 200) {
        setCategoryList(JSON.parse(response?.data?.datas));
      }
    } catch (error) {
      setCategoryList([]);
      console.error("Error fetching Library data:", error?.message);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchLibrary(slug);
      fetchLibraryCategory();
    }
  }, [slug]);

  return (
    <div>
      <>
        <Head>
          <title>{libraryData?.library_list?.library_metatitle}</title>
          <meta
            name="description"
            content={libraryData?.library_list?.library_meta_description}
          />
          <meta
            name="keywords"
            content={libraryData?.library_list?.library_meta_keywords}
          />
          {/* Add more meta tags as needed */}
        </Head>
        <div className="breadcrumb-trail">
          <ul className="trail">
            <li className="trail-item">
              <Link href="/" className="trail-link">
                Home
              </Link>
            </li>
            <li className="trail-item">
              <Link href="#" className="trail-link">
                Library
              </Link>
            </li>
            <li className="trail-item">
              <Link
                href={`/libraries/${libraryData?.library_list?.library_catrgory_slug}`}
                className="trail-link"
              >
                {libraryData?.library_list?.library_category_title}
              </Link>
            </li>
            <li className="trail-item trail-current">
              {" "}
              {slug?.replace(/-/g, " ").toUpperCase()}
            </li>
          </ul>
        </div>
        {/* partial */}
        {/* Post Content Start */}
        <div className="section sigma_post-single">
          <div className="container">
            <div className="img-container">
              <img
                src={`${libraryData?.library_list?.library_image_url}/${libraryData?.library_list?.library_image}`}
              />
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="post-detail-wrapper">
                  <div className="entry-content">
                    {libraryData?.library_details_data?.length &&
                      libraryData?.library_details_data?.map((data) => {
                        return (
                          <>
                            <h4 className="entry-title">
                              {data?.library_detail_title}
                            </h4>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data?.library_detail_description,
                              }}
                            />
                          </>
                        );
                      })}

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
                  </div>
                  {/* Post Meta Start */}
                  {/* <div className="sigma_post-single-meta">
                    <div className="sigma_post-single-meta-item">
                      <h6>Tags</h6>
                      <div className="tagcloud">
                        <a href="#">Portfolio</a>
                        <a href="#">Creative</a>
                        <a href="#">Intuitive</a>
                      </div>
                    </div>
                    <div className="sigma_post-single-meta-item sigma_post-share">
                      <h6>Share</h6>
                      <ul className="sigma_sm">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fab fa-youtube" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  {/* Post Meta End */}
                  {/* Post Pagination Start */}
                  <div className="section"></div>
                  {/* Post Pagination End */}
                  {/* Related Posts Start */}

                  {/* Related Posts End */}
                </div>
              </div>
              {/* Sidebar Start */}
              <div className="col-lg-4">
                <div className="sidebar">
                  {/* Search Widget Start */}
                  {/* <div className="sidebar-widget widget-search">
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
                  </div> */}
                  {/* Search Widget End */}
                  {/* Popular Feed Start */}
                  {/* <div className="sidebar-widget widget-recent-posts">
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
                  </div> */}
                  {/* Popular Feed End */}
                  {/* Categories Start */}
                  <div className="sidebar-widget widget-categories">
                    <h5 className="widget-title"> Our Categories </h5>
                    <ul className="sidebar-widget-list">
                      {categoryList?.length &&
                        categoryList?.map((catData) => {
                          return (
                            <li key={catData?.data_id}>
                              <Link href={`/libraries/${catData?.slug}`}>
                                {catData?.title}
                                {/* <span>32</span> */}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                  {/* Categories End */}
                  {/* Social Media Start */}
                  {/* <div className="sidebar-widget">
                    <h5 className="widget-title">Never Miss Out</h5>
                    <ul className="sigma_sm square light">
                      <li>
                        <a href="#">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-youtube" />
                        </a>
                      </li>
                    </ul>
                  </div> */}
                  {/* Social Media End */}
                </div>
              </div>
              {/* Sidebar End */}
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
