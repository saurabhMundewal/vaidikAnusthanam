import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import Link from "next/link";
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";

export default function BlogDetailpage() {
  const router = useRouter();
  const { slug } = router.query;
  const [blogData, setBlogData] = useState([]);
  const [url, setUrl] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [isOpen, setIsOpen] = useState(1);
  const generalConfiguration = useSelector(
    (state) => state.generalConfiguration.data
  );

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

  const fetchBlogCategory = async () => {
    try {
      const response = await axiosInstance.post(`/Blogs/blogCategoryList`);
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
      fetchBlog(slug);
      fetchBlogCategory();
    }
  }, [slug]);

 

  useEffect(() => {
    // Only execute this code if `window` is available (client-side)
    if (typeof window !== "undefined") {
      setUrl(`${window.location.origin}${router.asPath}`);
    }
  }, [router.asPath]);

  const data = blogData?.blogs_details_data?.length
    ? blogData?.blogs_details_data[0]
    : blogData?.blogs_details_data;

  return (
    <div>
      <>
        <Head>
          <title>{blogData?.blogs_list?.blogs_metatitle}</title>
          <meta
            name="description"
            content={blogData?.blogs_list?.blogs_meta_description}
          />
          <meta
            name="keywords"
            content={blogData?.blogs_list?.blogs_meta_keywords}
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
                Blogs
              </Link>
            </li>
            <li className="trail-item">
              {/* <Link
                href={`/libraries/${blogData?.library_list?.library_catrgory_slug}`}
                className="trail-link"
              > */}
              {slug?.replace(/-/g, " ").toUpperCase()}
              {/* </Link> */}
            </li>
            {/* <li className="trail-item trail-current">
              {" "}
              {slug?.replace(/-/g, " ").toUpperCase()}
            </li> */}
          </ul>
        </div>
        {/* partial */}
        {/* Post Content Start */}
        <div className="section sigma_post-single">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="post-detail-wrapper">
                  <h2> {slug?.replace(/-/g, " ").toUpperCase()}</h2>
                  <div className="img-container">
                    <img
                      src={`${data?.blogs_detail_image_url}/${data?.blogs_detail_image}`}
                    />
                  </div>
                  <div className="entry-content">
                    <h4 className="entry-title">{data?.blogs_detail_title}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.blogs_detail_description,
                      }}
                    />
                  </div>

                  <div class="sigma_post-single-meta">
                    <div class="sigma_post-single-meta-item"></div>
                    <div class="sigma_post-single-meta-item sigma_post-share">
                      <h6>Share</h6>
                      <ul class="sigma_sm">
                        <li>
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                              `${url}`
                            )}}`}
                            target="_blank"
                          >
                            <i class="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://www.linkedin.com/cws/share?url=${encodeURIComponent(
                              `${url}`
                            )}}`}
                            target="_blank"
                          >
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://twitter.com/share?text=${data?.blogs_detail_title}&amp;url=${encodeURIComponent(
                              `${url}`
                            )}`}
                            target="_blank"
                          >
                            <i class="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`https://web.whatsapp.com/send?text=${encodeURIComponent(
                              `${url}`
                            )}`}
                            target="_blank"
                          >
                            <i class="fab fa-whatsapp"></i>
                          </a>
                        </li>
                        {/* <li>
                          <a
                            href="javascript:(Void);"
                            target="_blank"
                            onclick="var e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','//assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e);return false;"
                          >
                            <i class="fab fa-pinterest"></i>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>

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
                        />
                        <button type="submit" name="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div> */}
                  {/* Search Widget End */}

                  {/* Popular Feed Start */}
                  <div className="sidebar-widget widget-recent-posts">
                    <h5 className="widget-title">Recent Posts</h5>
                    <article className="sigma_recent-post">
                      <Link href="https://vaidikanushthanam.in/blog/lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry/">
                        <img
                          src="https://vaidikanushthanam.in/assets/blogs/lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry.webp"
                          alt="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                          width={150}
                          height={100}
                        />
                      </Link>
                      <div className="sigma_recent-post-body">
                        <h6>
                          <Link href="https://vaidikanushthanam.in/blog/lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry/">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </Link>
                        </h6>
                        <Link href="https://vaidikanushthanam.in/blog/blog-title">
                          <i className="far fa-calendar"></i> Aug, 06 2024
                        </Link>
                      </div>
                    </article>
                  </div>
                  {/* Popular Feed End */}
                  {/* Social Media Start */}
                  <div className="sidebar-widget">
                    <h5 className="widget-title">Never Miss Out</h5>
                    <ul className="sigma_sm square light">
                      <li>
                        <Link
                          href={
                            generalConfiguration?.facebook
                              ? generalConfiguration?.facebook
                              : "#"
                          }
                          target="_blank;"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            generalConfiguration?.instagram
                              ? generalConfiguration?.instagram
                              : "#"
                          }
                          target="_blank;"
                        >
                          <i className="fab fa-instagram" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            generalConfiguration?.twitter
                              ? generalConfiguration?.twitter
                              : "#"
                          }
                          target="_blank;"
                        >
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            generalConfiguration?.youtube
                              ? generalConfiguration?.youtube
                              : "#"
                          }
                          target="_blank;"
                        >
                          <i className="fab fa-youtube" />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={
                            generalConfiguration?.pinterest
                              ? generalConfiguration?.pinterest
                              : "#"
                          }
                          target="_blank;"
                        >
                          <i className="fab fa-pinterest" />
                        </Link>
                      </li>
                      {/* <li>
                        <Link href="https://pin.it/2CgrlUzTP">
                          <i className="fab fa-pinterest"></i>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                  {/* Social Media End */}
                  {/* Categories Start */}
                  <div className="sidebar-widget widget-categories">
                    <h5 className="widget-title"> Our Categories </h5>
                    <ul className="sidebar-widget-list">
                      {categoryList?.length ? (
                        categoryList?.map((catData) => {
                          return (
                            <li key={catData?.data_id}>
                              <Link href={`/blogs/${catData?.slug}`}>
                                {catData?.title}
                                {/* <span>32</span> */}
                              </Link>
                            </li>
                          );
                        })
                      ) : (
                        <li>{"Category not available"}</li>
                      )}
                    </ul>
                  </div>
                  {/* Categories End */}
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
