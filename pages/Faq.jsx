import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFaq } from "../features/faqSlice";
import ContactForm from "@/components/contactForm";
import CommonFaqGrid from "@/atoms/commonFaqGrid";

export default function faq() {
  const dispatch = useDispatch();
  const faq = useSelector((state) => state.faq.data);
  const status = useSelector((state) => state.faq.status);
  const error = useSelector((state) => state.faq.error);
  const [isOpen, setIsOpen] = useState(1);

  const handleClickFaq = (val) => {
    setIsOpen(val);
  };

  useEffect(() => {
    if (status === "idle" && !faq?.length) {
      dispatch(fetchFaq());
    }
  }, [status, dispatch]);

  useEffect(() => {
    setIsOpen(faq[0]?.id);
  }, [faq?.length]);

  const oddFaq = faq?.length && faq.filter((_, index) => index % 2 !== 0);
  const evenFaq = faq?.length && faq.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <>
        {/* partial */}
        {/* partial:partia/__subheader.html */}
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <div className="sigma_subheader-text">
                <h1>FAQ</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="btn-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    FAQ
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        {/* Categories Start */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="accordion with-gap" id="generalFAQExample">
                  {evenFaq
                    ? evenFaq?.map((item) => (
                        <CommonFaqGrid
                          faqId={item?.id}
                          content={item?.content}
                          title={item?.title}
                          handleClickFaq={handleClickFaq}
                          isOpen={isOpen}
                        />
                      ))
                    : null}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="accordion with-gap" id="generalFAQExample2">
                  {oddFaq
                    ? oddFaq?.map((item) => (
                        <CommonFaqGrid
                          faqId={item?.id}
                          content={item?.content}
                          title={item?.title}
                          handleClickFaq={handleClickFaq}
                          isOpen={isOpen}
                        />
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Categories End */}
        {/* Form Start */}
        <ContactForm />
      </>
    </div>
  );
}
