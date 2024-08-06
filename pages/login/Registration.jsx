import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../features/authSlice";
import {
  fetchCountries,
  fetchStates,
  fetchCities,
} from "../../features/locationSlice";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

export default function Registration() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { countries, states, cities, loading } = useSelector(
    (state) => state.location
  );

  const [formData, setFormData] = useState({
    user_type: "",
    name: "",
    email: "",
    mobile: "",
    country: "",
    state: "",
    city: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match.");
      return;
    } else {
      try {
        // Dispatch signup action and handle response
        const response = await dispatch(
          signup({
            user_type: formData?.user_type,
            name: formData?.name,
            email: formData?.email,
            mobile: formData?.mobile,
            country: formData?.country,
            state: formData?.state,
            city: formData?.city,
            password: formData?.password,
            confirm_password: formData?.confirm_password,
          })
        );
        if (response?.payload?.status === 200) {
          // Show error toast with the error message
          toast.success(response.payload.message || 'An error occurred.');
          setTimeout(() => {
            router.push("/login/Login");
          }, 2000);
        }

        if (response?.payload?.status !== 200) {
          // Show error toast with the error message
          toast.error(response.payload.message || 'An error occurred.');
        }
      } catch (error) {
        // Show error toast if the request fails
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  const handleCountryChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    dispatch(fetchStates(event.target.value));
  };

  const handleStateChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    dispatch(fetchCities(event.target.value));
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

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
                <h1>Sign Up Here</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a className="btn-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    registration
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        {/* Checkout Start */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-3">
                <div className="wrapper">
                  <div className="title-text">
                    <div className="title login">Registration Form</div>
                  </div>
                  <div className="form-container">
                    <div className="form-inner">
                      <form onSubmit={handleSubmit} className="login">
                        <div className="field">
                          <select
                            className="form-control"
                            aria-label="Default select example"
                            id="country"
                            name="user_type"
                            required
                            onChange={handleChange}
                          >
                            <option selected="">Select User Type</option>
                            <option value={1}>Priest</option>
                            <option value={2}>Devotees</option>
                          </select>
                        </div>
                        <div className="field">
                          <input
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                            required
                            onChange={handleChange}
                          />
                          <br />
                          <br />
                        </div>
                        <div className="field">
                          <input
                            type="email"
                            placeholder="Email Address"
                            id="email"
                            name="email"
                            required
                            onChange={handleChange}
                          />
                          <br />
                          <br />
                        </div>
                        <div className="field">
                          <input
                            type="text"
                            placeholder="Mobile number"
                            id="mobile"
                            name="mobile"
                            required
                            onChange={handleChange}
                          />
                          <br />
                          <br />
                        </div>
                        <div className="field">
                          <select
                            className="form-control"
                            aria-label="Default select example"
                            id="country"
                            name="country"
                            required
                            onChange={handleCountryChange}
                          >
                            <option selected="">Select Country</option>
                            {countries.map((country) => (
                              <option key={country.id} value={country.id}>
                                {country.country_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="field">
                          <select
                            className="form-control"
                            aria-label="Default select example"
                            id="state"
                            name="state"
                            required
                            onChange={handleStateChange}
                          >
                            <option selected="">Select State</option>
                            {states.map((state) => (
                              <option key={state.id} value={state.id}>
                                {state.state_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="field">
                          <select
                            className="form-control"
                            aria-label="Default select example"
                            id="city"
                            name="city"
                            required
                            onChange={handleChange}
                          >
                            <option selected="">Select City</option>
                            {cities.map((city) => (
                              <option key={city.id} value={city.id}>
                                {city.city_name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="field">
                          <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            name="password"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="field">
                          <input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Confirm Password"
                            required
                            onChange={handleChange}
                          />
                        </div>

                        <div className="field btn-1">
                          <div className="btn-layer" />
                          <input type="submit" defaultValue="Login" />
                        </div>
                        <div className="signup-link">
                          Already member?{" "}
                          <Link href="/login/Login">Login now</Link>
                        </div>
                      </form>
                      <ToastContainer />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Checkout End */}
      </>
    </div>
  );
}
