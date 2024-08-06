import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import Link from "next/link";
import Head from "next/head";

export default function BlogDetailpage() {
  const router = useRouter();
  const { slug } = router.query;
  const [blogData, setBlogData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
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

  const data = blogData?.blogs_details_data?.length
    ? blogData?.blogs_details_data[0]
    : blogData?.blogs_details_data;

  return (
    <div>
      <>
        <Head>
          <title>{blogData?.library_list?.library_metatitle}</title>
          <meta
            name="description"
            content={blogData?.library_list?.library_meta_description}
          />
          <meta
            name="keywords"
            content={blogData?.library_list?.library_meta_keywords}
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
              {data?.blogs_detail_title}
              {/* </Link> */}
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
                src={`${data?.blogs_detail_image_url}/${data?.blogs_detail_image}`}
              />
            </div>
            <div className="row">
              <div className="col-lg-8">
                <div className="post-detail-wrapper">
                  <div className="entry-content">
                    <h4 className="entry-title">{data?.blogs_detail_title}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data?.blogs_detail_description,
                      }}
                    />
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
                  {/* Popular Feed End */}
                  {/* Categories Start */}
                  <div className="sidebar-widget widget-categories">
                    <h5 className="widget-title"> Our Categories </h5>
                    <ul className="sidebar-widget-list">
                      {categoryList?.length &&
                        categoryList?.map((catData) => {
                          return (
                            <li key={catData?.data_id}>
                              <Link href={`/blog/${catData?.slug}`}>
                                {catData?.title}
                                {/* <span>32</span> */}
                              </Link>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
               
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
