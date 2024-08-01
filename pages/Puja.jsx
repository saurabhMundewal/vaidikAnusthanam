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
                  Perform your puja as per Vedic rituals at Hindu pilgrimages
                  and famous temples in India with Sri Mandir
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
                    {"All Puja"}
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
              <h2 className="title">Title Here</h2>
              <p className="subtitle" style={{ fontSize: 15, fontWeight: 500 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vitae odio sem. Vivamus tristique vitae eros congue tempus.
                Quisque gravida convallis dapibus. Donec sed tincidunt nisi.
                Phasellus id imperdiet risus. Ut nulla erat, tincidunt vitae
                ipsum eu, euismod laoreet enim.
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
