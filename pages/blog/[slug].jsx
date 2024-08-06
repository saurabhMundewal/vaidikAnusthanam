import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import HelpCenter from "../../atoms/helpCenter";
import Link from "next/link";
import BlogCard from "@/components/layouts/blogCard";
import Head from "next/head";
import Pagination from "@/atoms/pagination";

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [BlogData, setBlogData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(BlogData?.Blog_data?.length / 9);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems = BlogData?.Blog_data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const fetchBlog = async (slug) => {
    try {
      const response = await axiosInstance.post(`/Blogs/BlogList/${slug}`);
      if (response?.status === 202) {
        setBlogData([]);
      }
      setBlogData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setBlogData([]);
      console.error("Error fetching Blog data:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchBlog(slug);
    }
  }, [slug]);
  const BlogMeta = BlogData?.Blog_meta || {};

  return (
    <div>
      <>
        {/* partial */}
        <Head>
          <title>{BlogMeta?.meta_title}</title>
          <meta
            name="description"
            content={BlogMeta?.meta_description}
          />
          <meta
            name="keywords"
            content={BlogMeta?.meta_keywords}
          />
          {/* Add more meta tags as needed */}
        </Head>
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <div className="sigma_subheader-text">
                <h1>
                  {BlogMeta?.data_banner_heading}
                </h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="btn-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {slug?.replace(/-/g, " ").toUpperCase()}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        <div className="section section-padding">
          <div className="container">
            <div>
              <h2 className="title">
               {BlogMeta?.data_title}
              </h2>
              <div className="subtitle" style={{ fontSize: 15, fontWeight: 500 }}>
              <div
                        dangerouslySetInnerHTML={{
                          __html:
                          BlogMeta?.data_content,
                        }}
                      />
              </div>
            </div>
            <div className="row row g-3">
              {BlogData?.Blog_data?.length
                ? currentItems?.map((Blog, index) => <PoojaCard pooja={Blog} />)
                : "No Record Found"}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
        <HelpCenter />
      </>
    </div>
  );
};

export default BlogPage;
