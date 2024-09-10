import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import Link from "next/link";
import Head from "next/head";
import Loader from "@/components/preloader/Preloader";

export default function LibraryDetailpage() {
  const router = useRouter();
  const { slug } = router.query;
  const [libraryData, setLibraryData] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [isOpen, setIsOpen] = useState(1);
  const [loading, setLoading] = useState(false); // State for loader

  const fetchLibrary = async (slug) => {
    setLoading(true); // Start loader
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
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const fetchLibraryCategory = async () => {
    setLoading(true); // Start loader
    try {
      const response = await axiosInstance.post(`/Library/LibraryCategory`);
      if (response?.status === 200) {
        setCategoryList(JSON.parse(response?.data?.datas));
      }
    } catch (error) {
      setCategoryList([]);
      console.error("Error fetching Library data:", error?.message);
    } finally {
      setLoading(false); // Stop loader
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
              {slug?.replace(/-/g, " ").toUpperCase()}
            </li>
          </ul>
        </div>

        {/* Show loader if data is still being fetched */}
        {loading ? (
      <Loader />  
      ) : (
          <div className="section sigma_post-single">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="post-detail-wrapper">
                    <div className="img-container">
                      <img
                        src={`${libraryData?.library_list?.library_image_url}/${libraryData?.library_list?.library_image}`}
                      />
                    </div>
                    <div className="entry-content">
                      {libraryData?.library_details_data?.length &&
                        libraryData?.library_details_data?.map((data) => {
                          return (
                            <React.Fragment key={data?.library_detail_title}>
                              <h4 className="entry-title">
                                {data?.library_detail_title}
                              </h4>
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: data?.library_detail_description,
                                }}
                              />
                            </React.Fragment>
                          );
                        })}
                    </div>
                  </div>
                </div>
                {/* Sidebar Start */}
                <div className="col-lg-4">
                  <div className="sidebar">
                    <div className="sidebar-widget widget-categories">
                      <h5 className="widget-title"> Our Categories </h5>
                      <ul className="sidebar-widget-list">
                        {categoryList?.length &&
                          categoryList?.map((catData) => (
                            <li key={catData?.data_id}>
                              <Link href={`/libraries/${catData?.slug}`}>
                                {catData?.title}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Sidebar End */}
              </div>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
