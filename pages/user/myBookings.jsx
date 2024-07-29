import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderList } from "../../features/orderSlice";
import Cookies from "js-cookie";
import UserHeader from "@/atoms/userHeader";
import { useRouter } from "next/router";

export default function MyBookings() {
  const userType = Cookies.get("user_type");
  const userid = Cookies.get("id");
  const dispatch = useDispatch();
  const { orderList, loading, error } = useSelector((state) => state.order);
  const router = useRouter();


  useEffect(() => {
    if (userid) {
      dispatch(getOrderList(userid));
    }
  }, [dispatch]);

  useEffect(() => {
    if (userType !== "Priest" && userid) {
      router.push("/");
    }
  }, [userType, userid]);

  return (
    <div>
      <UserHeader  />
      {/* partial */}
      <div className="page-banner instructor-bg-blk">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="profile-info-blk">
                {/* <a href="javascript:;" className="profile-info-img">
                  <img
                    src="./../assets/img/service/details/7.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </a> */}
                <h4 className="text-white">My Pujas Booking</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="page-content course-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12"></div>
            <div className="col-lg-12">
              <div className="table-responsive">
                <table className="table table-bordered table-striped my_table_responsive">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">Puja ID</th>
                      <th scope="col">Pooja Name</th>
                      <th scope="col">Booking Date</th>
                      <th scope="col">Puja Date</th>
                      <th scope="col">Price</th>
                      <th scope="col" className="text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderList?.length
                      ? orderList?.map((ordersDetail, ind) => {
                          return (
                            <tr>
                              <td scope="row" key={ordersDetail?.order_index}>
                                <Link
                                  className="label label-danger"
                                  href={`/order/${ordersDetail?.order_index}`}
                                >
                                  {ordersDetail?.order_order_id || "NA"}
                                </Link>
                              </td>
                              <td>{ordersDetail?.order_puja_id?.puja_title}</td>
                              <td>{ordersDetail?.order_puja_date}</td>
                              <td>
                                {ordersDetail?.order_puja_id?.puja_start ||
                                  "NA"}
                              </td>
                              <td>
                                ₹
                                {ordersDetail?.order_price}
                              </td>
                              <td className="text-center">
                                <b
                                  className={
                                    ordersDetail?.order_status
                                      ?.current_status === "Completed"
                                      ? "text-success"
                                      : "download_completed_data"
                                  }
                                >
                                  {ordersDetail?.order_status
                                    ?.current_status === "Completed"
                                    ? "Success"
                                    : "Pending"}
                                </b>
                              </td>
                            </tr>
                          );
                        })
                      : <tr><td colSpan={6}>Fetching data.....</td></tr>
                      }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
