import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import Link from "next/link";
import Head from "next/head";
import HelpCenter from "@/atoms/helpCenter";
import Loader from "@/components/preloader/Preloader";

export default function Librarypage() {
  const router = useRouter();
  const { slug } = router.query;
  
  const [libData, setLibData] = useState([]);
  const [libCategoryData, setLibCategryData] = useState([]);
  const [loading, setLoading] = useState(false); // State for loader

  const fetchLibrary = async (slug) => {
    setLoading(true); // Start loader
    try {
      const response = await axiosInstance.post(`/Library/LibraryList/${slug}`);
      if (response?.status === 202) {
        setLibData([]);
      }
      setLibData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setLibData([]);
      console.error("Error fetching Library data:", error?.message);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const fetchLibraryCategory = async (slug) => {
    setLoading(true); // Start loader
    try {
      const response = await axiosInstance.post(`/Library/LibraryCategory/${slug}`);
      if (response?.status === 202) {
        setLibCategryData([]);
      }
      setLibCategryData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setLibCategryData([]);
      console.error("Error fetching Library category data:", error?.message);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    if (slug) {
      fetchLibrary(slug);
      fetchLibraryCategory(slug);
    }
  }, [slug]);
  
  return (
    <div>
      <>
        <Head>
          <title>{libCategoryData[0]?.metatitle}</title>
          <meta
            name="description"
            content={libCategoryData[0]?.meta_description}
          />
          <meta
            name="keywords"
            content={libCategoryData[0]?.meta_keywords}
          />
        </Head>

        <div className="breadcrumb-trail">
          <ul className="trail">
            <li className="trail-item">
              <a href="#" className="trail-link">
                मुख्य
              </a>
            </li>
            <li className="trail-item">
              <a href="#" className="trail-link">
                साहित्य
              </a>
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
          <>
            <div className="section section-padding">
              <div className="container">
                <div className="img-container">
                  <img
                    src={`${libCategoryData[0]?.lib_image_location}/${libCategoryData[0]?.lib_image}`}
                  />
                </div>
                <div className="row product-grid">
                  {libData?.library_list?.map((data) => {
                    return (
                      <div className="col-lg-4 col-sm-6 col-xs-12" key={data?.library_data_id}>
                        <div
                          className="product-cart-wrap mb-30"
                          data-slick-index={5}
                          aria-hidden="false"
                          tabIndex={0}
                        >
                          <div className="product-img-action-wrap">
                            <div className="product-img product-img-zoom">
                              <Link href={`/libraryDetail/${data?.library_slug}`}>
                                <img
                                  className="default-img"
                                  src={data?.library_image}
                                  title={data?.library_title}
                                  alt=""
                                />
                              </Link>
                            </div>
                          </div>

                          <div className="product-content-wrap-1">
                            <h2 className="product-heading">
                              <Link href={`/libraryDetail/${data?.library_slug}`}>
                                {data?.library_title}
                              </Link>
                            </h2>
                            <h4 className="product-heading-sub">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: data?.library_description,
                                }}
                              />
                            </h4>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <HelpCenter />
          </>
        )}
      </>
    </div>
  );
}
