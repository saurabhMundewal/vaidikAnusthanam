import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import HelpCenter from "../../atoms/helpCenter";
import Link from "next/link";
import PoojaCard from "@/atoms/pujaCard";
import Head from "next/head";
import Pagination from "@/atoms/pagination";

const PujaPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [pujaData, setPujaData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(pujaData?.puja_data?.length / 9);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems = pujaData?.puja_data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const fetchPuja = async (slug) => {
    try {
      const response = await axiosInstance.post(`/Pujas/pujaList/${slug}`);
      if (response?.status === 202) {
        setPujaData([]);
      }
      setPujaData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setPujaData([]);
      console.error("Error fetching puja data:", error);
    }
  };

  useEffect(() => {
    if (slug) {
      fetchPuja(slug);
    }
  }, [slug]);

  return (
    <div>
      <>
        {/* partial */}
        <Head>
          <title>{pujaData?.puja_meta?.puja_metatitle}</title>
          <meta
            name="description"
            content={"pujaData?.puja_meta?.puja_meta_description"}
          />
          <meta
            name="keywords"
            content={pujaData?.puja_meta?.puja_meta_keywords}
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
                  {pujaData?.puja_meta?.data_banner_heading}
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
               {pujaData?.puja_meta?.data_title}
              </h2>
              <p className="subtitle" style={{ fontSize: 15, fontWeight: 500 }}>
              <div
                        dangerouslySetInnerHTML={{
                          __html:
                          pujaData?.puja_meta?.data_content,
                        }}
                      />
              </p>
            </div>
            <div className="row row g-3">
              {pujaData?.puja_data?.length
                ? currentItems?.map((puja, index) => <PoojaCard pooja={puja} />)
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

export default PujaPage;
