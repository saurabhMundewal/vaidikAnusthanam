import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfile } from "../../features/userSlice";
import Cookies from "js-cookie";
import UserHeader from "@/atoms/userHeader";
import { useRouter } from "next/router";

export default function Profile() {
  const userType = Cookies.get("user_type");
  const userid = Cookies.get("id");
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  const status = useSelector((state) => state.user.status);
  const router = useRouter();

  const handleLogout = () => {
    // Clear session storage and cookies
    sessionStorage.clear();
    document.cookie.split(";").forEach((cookie) => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/");
    });
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserProfile({ userid: userid }));
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (userType !== "Priest" && userid !== "") {
      router.push("/");
    }
  }, [userType, userid]);

  return (
    <div>
      <>
        <UserHeader handleLogout={handleLogout} />
        {/* partial */}
        <div className="page-banner instructor-bg-blk">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="profile-info-blk">
                  <a href="javascript:;" className="profile-info-img">
                    <img
                      src="./../assets/img/service/details/7.jpg"
                      alt=""
                      className="img-fluid"
                    />
                  </a>
                  <h4 className="text-white">{profile?.user_name}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="page-content course-sec">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="card overview-sec">
                  <div className="card-body">
                    <h5 className="subs-title">About {profile?.user_name}</h5>
                    <Link href="/user/EditProfile">
                      <button className="btn btn-primary">Edit Profile</button>
                    </Link>

                    <p>
                      Very well thought out and articulate communication. Clear
                      milestones, deadlines and fast work. Patience. Infinite
                      patience. No shortcuts. Even if the client is being
                      careless. Some quick example text to build on the card
                      title and bulk the card's content Moltin gives you
                      platform.
                    </p>
                    <p className="mb-0">
                      As a highly skilled and successfull product development
                      and design specialist with more than 4 Years of My
                      experience lies in successfully conceptualizing,
                      designing, and modifying consumer products specific to
                      interior design and home furnishings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card overview-sec">
                  <div className="card-body">
                    <h5 className="subs-title">Contact Details</h5>
                    <div className="contact-info-list">
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <i className="flaticon-email" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Email</h6>
                          <p>
                            <a href="javascript:;">
                              <span
                                className="__cf_email__"
                                data-cfemail="4d27282323343a24213e22230d28352c203d2128632e2220"
                              >
                                {profile?.email}
                              </span>
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <i className="flaticon-location" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Address</h6>
                          <p>{profile?.email}</p>
                        </div>
                      </div>
                      <div className="edu-wrap">
                        <div className="edu-name">
                          <span>
                            <i className="flaticon-call" />
                          </span>
                        </div>
                        <div className="edu-detail">
                          <h6>Phone</h6>
                          <p>
                            <a href="javascript:;">{profile?.mobile}</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <button  className="btn btn-primary">Edit Profile</button> */}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}
