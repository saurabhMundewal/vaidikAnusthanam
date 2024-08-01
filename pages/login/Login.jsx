import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { login } from "../../features/authSlice";
import { forgotPassword } from "../../features/forgotPasswordSlice";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // To ensure hydration is complete

  const userType = Cookies.get("user_type");
  const userid = Cookies.get("id");
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);
  const { status: forgotStatus, error: forgotError } = useSelector(
    (state) => state.forgotPassword
  );
  const router = useRouter();

  useEffect(() => {
    setIsHydrated(true); // Hydration complete
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // Dispatch signup action and handle response
      const response = await dispatch(login({ username, password }));
      if (response?.payload?.status === 200) {
        // Show error toast with the error message
        toast.success("Login successful! Redirecting...");
        setTimeout(() => {
          router.push("/user/Profile");
        }, 2000);
      }

      if (response?.payload?.status !== 200) {
        // Show error toast with the error message
        toast.error(
          response.payload.message ||
            "Login failed: either the username or password you are trying to log in with are incorrect"
        );
      }
    } catch (error) {
      // Show error toast if the request fails
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (userType === "Priest" && userid !== "") {
      router.push("/user/Profile");
    }
  }, [userType, userid, router]);

  // Early return if hydration is not complete
  if (!isHydrated) {
    return null;
  }

  return (
    <div>
      <div
        className="sigma_subheader dark-overlay dark-overlay-2"
        style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
      >
        <div className="container">
          <div className="sigma_subheader-inner">
            <div className="sigma_subheader-text">
              <h1>Sign In</h1>
            </div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="btn-link" href="/">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Login
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-3">
              <div className="wrapper">
                <div className="title-text">
                  <div className="title login">
                    {isForgotPassword ? "Forgot Password" : "Login Form"}
                  </div>
                </div>
                <div className="form-container">
                  <div className="form-inner">
                    {!isForgotPassword ? (
                      <form onSubmit={handleSubmit} className="login">
                        <div className="field">
                          <input
                            type="email"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="field">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                          />
                        </div>
                        <div className="pass-link">
                          <a href="#" onClick={() => setIsForgotPassword(true)}>
                            Forgot password?
                          </a>
                        </div>
                        <div className="field btn-1">
                          <div className="btn-layer" />
                          <input type="submit" defaultValue="Login" />
                        </div>
                        <div className="signup-link">
                          Not a member?{" "}
                          <Link href="/login/Registration">Signup now</Link>
                        </div>
                      </form>
                    ) : (
                      <form
                        onSubmit={handleForgotPasswordSubmit}
                        className="forgot-password"
                      >
                        <div className="field">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="field btn-1">
                          <div className="btn-layer" />
                          <input type="submit" defaultValue="Submit" />
                        </div>
                        <div className="pass-link">
                          <a
                            href="#"
                            onClick={() => setIsForgotPassword(false)}
                          >
                            Back to login
                          </a>
                        </div>
                      </form>
                    )}
                    {status === "loading" && <p>Loading...</p>}
                    {forgotStatus === "loading" && <p>Loading...</p>}
                    {forgotStatus === "succeeded" && (
                      <p>Check your email for the reset link</p>
                    )}
                    {forgotStatus === "failed" && <p>{forgotError}</p>}
                    <ToastContainer />
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
