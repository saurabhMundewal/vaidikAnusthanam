import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import HelpCenter from "../atoms/helpCenter";
import Link from "next/link";
import PoojaCard from "@/atoms/pujaCard";
import Head from "next/head";
import { fetchPuja } from "../features/poojaSlice";
import Pagination from "@/atoms/pagination";

const PujaPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pujaData = useSelector((state) => state?.pooja?.puja);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(pujaData?.puja_data?.length / 9);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  // const { slug } = router.query;
  // const [pujaData, setPujaData] = useState([]);

  const indexOfLastItem = currentPage * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems = pujaData?.puja_data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    dispatch(fetchPuja());
  }, []);
 
  const pujaMeta = pujaData?.puja_meta || {};
  
  return (
    <div>
      <>
        {/* partial */}
        <Head>
          <title>{pujaMeta?.meta_title}</title>
          <meta
            name="description"
            content={pujaMeta?.meta_description}
          />
          <meta
            name="keywords"
            content={pujaMeta?.meta_keywords}
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
                  {pujaMeta?.data_banner_heading}
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
                    {'All Pujas'}
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
               {pujaMeta?.data_title}
              </h2>
              <div className="subtitle" style={{ fontSize: 15, fontWeight: 500 }}>
              <div
                        dangerouslySetInnerHTML={{
                          __html:
                          pujaMeta?.data_content,
                        }}
                      />
              </div>
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
