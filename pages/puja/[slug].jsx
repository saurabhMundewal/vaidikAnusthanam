import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../../lib/axiosInstance'; 
import HelpCenter from '../../atoms/helpCenter';
import Link from 'next/link';
import PoojaCard from '@/atoms/pujaCard';

const PujaPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [pujaData, setPujaData] = useState([]);

  const fetchPuja = async (slug) => {
    try {
      const response = await axiosInstance.post(`/Pujas/pujaList/${slug}`);
      if(response?.status === 202){
        setPujaData([])
      }
      setPujaData(JSON.parse(response?.data?.datas));
    } catch (error) {
      setPujaData([])
      console.error('Error fetching puja data:', error);
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
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <div className="sigma_subheader-text">
                <h1>
                  Perform your puja as per Vedic rituals at Hindu pilgrimages and
                  famous temples in India with Sri Mandir
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
                    {slug?.replace(/-/g, ' ').toUpperCase()}
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
                odio sem. Vivamus tristique vitae eros congue tempus. Quisque gravida
                convallis dapibus. Donec sed tincidunt nisi. Phasellus id imperdiet
                risus. Ut nulla erat, tincidunt vitae ipsum eu, euismod laoreet enim.
              </p>
            </div>
            <div className="row row g-3">
              {pujaData?.puja_data?.length ? pujaData?.puja_data?.map((puja, index) => (
               <PoojaCard pooja={puja} />
              )) : 'No Record Found'}
            </div>
            {/* <ul className="pagination mb-0">
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <i className="far fa-chevron-left" />{" "}
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  {" "}
                  <i className="far fa-chevron-right" />{" "}
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      <HelpCenter />
      </>
    </div>
  );
};

export default PujaPage;
