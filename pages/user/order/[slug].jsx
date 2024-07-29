import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../../features/orderSlice";
import Cookies from "js-cookie";
import UserHeader from "@/atoms/userHeader";
import { useRouter } from "next/router";
import dayjs from "dayjs";

export default function MyOrderStatus() {
  const router = useRouter();
  const userType = Cookies.get("user_type");
  const userid = Cookies.get("id");
  const { slug } = router.query;
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.order);
  const orderDataDetails = orderDetails?.length ? orderDetails[0] : [];
  //const status = useSelector((state) => state.user.status);

  const getGst =
    (Number(orderDataDetails?.order_packages_id?.package_price) *
      Number(orderDataDetails?.order_gst_tax)) /
    100;

  useEffect(() => {
    if (userid && slug) {
      dispatch(getOrderDetails({ member_id: userid, order_index: slug }));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userType !== "Priest" && userid) {
      router.push("/");
    }
  }, [userType, userid]);

  return (
    <div>
      <UserHeader />
      <div className="page-banner instructor-bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="profile-info-blk">
                <h4 className="text-white">Order Detail</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          {/* Title */}
          <div className="d-flex justify-content-between align-items-center py-3">
            <h2 className="h5 mb-0">
              <a href="#" className="text-muted"></a> Order{" "}
              {`#${orderDataDetails?.order_order_id}` || "not created"}
            </h2>
          </div>
          {/* Main content */}
          <div className="row">
            <div className="col-lg-8">
              {/* Details */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="mb-3 d-flex justify-content-between">
                    <div>
                      <span className="me-3 ord-details">
                        Puja Date:{" "}
                        {orderDataDetails?.order_puja_id?.puja_start
                          ? dayjs(
                              orderDataDetails?.order_puja_id?.puja_start
                            ).format("MM-DD-YYYY hh:mm:ss A")
                          : "NA"}
                      </span>
                      <span
                        className={`badge rounded-pill ${orderDataDetails?.order_status?.current_status === "Pending" ? "bg-warning" : "bg-info"}`}
                      >
                        {orderDataDetails?.order_status?.current_status}
                      </span>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src={`${orderDataDetails?.order_puja_id?.puja_image_link}${orderDataDetails?.order_puja_id?.puja_image}`}
                              alt={orderDataDetails?.order_puja_id?.puja_title}
                              title={
                                orderDataDetails?.order_puja_id?.puja_title
                              }
                              width="100"
                              className="img-fluid"
                            />
                          </td>
                          <td>
                            <h3 className="h5 mb-0">
                              <a href="#" className="text-reset">
                                {orderDataDetails?.order_puja_id?.puja_title}
                              </a>
                            </h3>
                            <span className="small">
                              Package:{" "}
                              {
                                orderDataDetails?.order_packages_id
                                  ?.package_title_1
                              }
                            </span>
                          </td>
                          <td className="text-end">
                            ₹{" "}
                            {orderDataDetails?.order_packages_id?.package_price}
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="2">
                            GST ({orderDataDetails?.order_gst_tax}%)
                          </td>
                          <td className="text-end">{getGst}</td>
                        </tr>
                        <tr className="fw-bold">
                          <td colSpan="2">TOTAL</td>
                          <td className="text-end">
                            {" "}
                            ₹{" "}
                            {Number(
                              orderDataDetails?.order_packages_id?.package_price
                            ) + Number(getGst)}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Payment */}
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <h3 className="h6">Payment Method</h3>{" "}
                      {orderDataDetails?.order_payment_mode}
                      <p>
                        <br />
                        Total: ₹{" "}
                        {orderDataDetails?.order_packages_id?.package_price}
                        <span
                          className={`badge rounded-pill ${orderDataDetails?.order_status?.current_status === "Pending" ? "bg-warning" : "bg-success"}`}
                        >
                          {orderDataDetails?.order_status?.current_status}
                        </span>
                      </p>
                    </div>
                    <div className="col-lg-6">
                      <h3 className="h6">Billing address</h3>
                      <address>
                        <strong>
                          {orderDataDetails?.order_first_name}{" "}
                          {orderDataDetails?.order_last_name}
                        </strong>
                        <br />
                        {orderDataDetails?.order_address_1},{" "}
                        {orderDataDetails?.order_address_2}
                        <br />
                        {orderDataDetails?.order_city},{" "}
                        {orderDataDetails?.order_state}
                        <br />
                        {orderDataDetails?.order_city} -{" "}
                        {orderDataDetails?.order_pincode}
                        <br />
                        <abbr title="Phone">P:</abbr>{" "}
                        {orderDataDetails?.order_phone}
                      </address>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Customer Notes */}
              <div className="card mb-4">
                <div className="card-body">
                  <h3 className="h6">Customer Notes</h3>
                  <p>{orderDataDetails?.order_cutomer_notes}</p>
                </div>
              </div>
              <div className="card mb-4">
                {/* Shipping information */}
                <div className="card-body">
                  <h3 className="h6">Status</h3>
                  <hr />
                  <div className="order-timeline">
                    {orderDataDetails?.order_status?.length ? (
                      orderDataDetails?.order_status?.map(
                        (paymentStatus, ind) => {
                          return (
                            <div className="timeline-object complete" key={ind}>
                              <div className="timeline-status"></div>
                              <div className="timeline-info">
                                <h3>{paymentStatus?.current_status}</h3>
                                <small>
                                  {paymentStatus?.current_update_date_time}
                                </small>
                                <p>{paymentStatus?.current_status_notes}</p>
                              </div>
                            </div>
                          );
                        }
                      )
                    ) : (
                      <div className="timeline-object">
                        <div className="timeline-status"></div>
                        <div className="timeline-info">
                          <h3>
                            {orderDataDetails?.order_status?.current_status}
                          </h3>
                          <small>
                            {
                              orderDataDetails?.order_status
                                ?.current_update_date_time
                            }
                          </small>
                          <p>
                            {
                              orderDataDetails?.order_status
                                ?.current_status_notes
                            }
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
