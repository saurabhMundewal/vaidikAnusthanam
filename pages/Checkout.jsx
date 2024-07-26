

// updated code checkout new version
import React from 'react'
import Link from 'next/link'
export default function Checkout() {
  return (
    <div>
      <>
  
 
  {/* partial */}
  {/* partial:partia/__subheader.html */}
  <div
    className="sigma_subheader dark-overlay dark-overlay-2"
    style={{
      backgroundImage:
        "url(https://vaidikanushthanam.in/static/img/subheader.jpg)"
    }}
  >
    <div className="container">
      <div className="sigma_subheader-inner">
        <div className="sigma_subheader-text">
          <h1>Checkout</h1>
        </div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="btn-link" href="/">
                Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Checkout
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
      <form method="post">
        <div className="row">
          <div className="col-xl-12">
            <h4>Booking Details</h4>
          </div>
          <div className="col-xl-7">
            {/* Buyer Info Start */}
            <div className="row">
              <div className="form-group col-xl-12">
                <label htmlFor="puja_date">
                  Select Puja Date <span className="text-danger">*</span>
                </label>
                <input
                  type="datetime-local"
                  placeholder="Select Puaj Date"
                  name="puja_date"
                  id="puja_date"
                  className="form-control"
                  defaultValue="2024-05-02T20:26"
                  required=""
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="first_name">
                  First Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  id="first_name"
                  className="form-control"
                  defaultValue="Abhay Pratap singh"
                  required=""
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="last_name">
                  Last Name <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  id="last_name"
                  className="form-control"
                  defaultValue="Meerut"
                  required=""
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="phone">
                  Phone Number <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Phone Number"
                  name="phone"
                  id="phone"
                  className="form-control"
                  defaultValue={7906225663}
                  readOnly=""
                  required=""
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="email">
                  Email Address <span className="text-danger">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  className="form-control"
                  defaultValue="jbbabhay@gmail.com"
                  readOnly=""
                  required=""
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="address_1">
                  Street Address 1 <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Street Address One"
                  name="address_1"
                  id="address_1"
                  className="form-control"
                  defaultValue="Testing"
                  required=""
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="address_2">Street Address 2</label>
                <input
                  type="text"
                  placeholder="Street Address Two (Optional)"
                  name="address_2"
                  id="address_2"
                  className="form-control"
                  defaultValue="Testing"
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="country">
                  Country <span className="text-danger">*</span>
                </label>
                <select className="form-control" name="country" id="country">
                  <option value="">Select a Country</option>
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctica">Antarctica</option>
                  <option value="Antigua And Barbuda">
                    Antigua And Barbuda
                  </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas The">Bahamas The</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bosnia and Herzegovina">
                    Bosnia and Herzegovina
                  </option>
                  <option value="Botswana">Botswana</option>
                  <option value="Bouvet Island">Bouvet Island</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Territory">
                    British Indian Ocean Territory
                  </option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">
                    Central African Republic
                  </option>
                  <option value="Chad">Chad</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos (Keeling) Islands">
                    Cocos (Keeling) Islands
                  </option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote D'Ivoire (Ivory Coast)">
                    Cote D'Ivoire (Ivory Coast)
                  </option>
                  <option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Democratic Republic Of The Congo">
                    Democratic Republic Of The Congo
                  </option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="External Territories of Australia">
                    External Territories of Australia
                  </option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji Islands">Fiji Islands</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Territories">
                    French Southern Territories
                  </option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia The">Gambia The</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guernsey and Alderney">
                    Guernsey and Alderney
                  </option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guinea-Bissau">Guinea-Bissau</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Heard and McDonald Islands">
                    Heard and McDonald Islands
                  </option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong S.A.R.">Hong Kong S.A.R.</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="India" selected="">
                    India
                  </option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jersey">Jersey</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea North">Korea North</option>
                  <option value="Korea South">Korea South</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau S.A.R.">Macau S.A.R.</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Man (Isle of)">Man (Isle of)</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Micronesia">Micronesia</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherlands Antilles">
                    Netherlands Antilles
                  </option>
                  <option value="Netherlands The">Netherlands The</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Northern Mariana Islands">
                    Northern Mariana Islands
                  </option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau">Palau</option>
                  <option value="Palestinian Territory Occupied">
                    Palestinian Territory Occupied
                  </option>
                  <option value="Panama">Panama</option>
                  <option value="Papua new Guinea">Papua new Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Pitcairn Island">Pitcairn Island</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic Of The Congo">
                    Republic Of The Congo
                  </option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="Saint Helena">Saint Helena</option>
                  <option value="Saint Kitts And Nevis">
                    Saint Kitts And Nevis
                  </option>
                  <option value="Saint Lucia">Saint Lucia</option>
                  <option value="Saint Pierre and Miquelon">
                    Saint Pierre and Miquelon
                  </option>
                  <option value="Saint Vincent And The Grenadines">
                    Saint Vincent And The Grenadines
                  </option>
                  <option value="Samoa">Samoa</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome and Principe">
                    Sao Tome and Principe
                  </option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Serbia">Serbia</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Smaller Territories of the UK">
                    Smaller Territories of the UK
                  </option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="South Georgia">South Georgia</option>
                  <option value="South Sudan">South Sudan</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Svalbard And Jan Mayen Islands">
                    Svalbard And Jan Mayen Islands
                  </option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad And Tobago">
                    Trinidad And Tobago
                  </option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks And Caicos Islands">
                    Turks And Caicos Islands
                  </option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Emirates">
                    United Arab Emirates
                  </option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States">United States</option>
                  <option value="United States Minor Outlying Islands">
                    United States Minor Outlying Islands
                  </option>
                  <option value="Uruguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City State (Holy See)">
                    Vatican City State (Holy See)
                  </option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands (British)">
                    Virgin Islands (British)
                  </option>
                  <option value="Virgin Islands (US)">
                    Virgin Islands (US)
                  </option>
                  <option value="Wallis And Futuna Islands">
                    Wallis And Futuna Islands
                  </option>
                  <option value="Western Sahara">Western Sahara</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Yugoslavia">Yugoslavia</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="state">
                  State <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="State"
                  name="state"
                  id="state"
                  className="form-control"
                  defaultValue="Uttar padesh"
                  required=""
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="city">
                  Town / City <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Town/City"
                  name="city"
                  id="city"
                  className="form-control"
                  defaultValue="Meerut"
                  required=""
                />
              </div>
              <div className="form-group col-xl-6">
                <label htmlFor="pincode">
                  Pincode <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Pincode"
                  name="pincode"
                  id="pincode"
                  className="form-control"
                  defaultValue={250003}
                  required=""
                />
              </div>
            </div>
            {/* Buyer Info End */}
          </div>
          <div className="col-xl-5 checkout-billing">
            {/* Order Details Start */}
            <div className="sigma_notice mt-20" style={{ marginTop: 35 }}>
              <p>
                <a href="#">Ramayan Paath-रामायण पाठ </a>{" "}
              </p>
              <p>रामायण पाठ- Ramayan Paath</p>
            </div>
            <div className="sigma_notice-content">
              <div className="row">
                <div className="col-xl-12 form-group">
                  <div className="sigma_icon-block icon-block-3">
                    <div className="icon-wrapper">
                      <i
                        className="flaticon-temple"
                        style={{ marginBottom: 5 }}
                      />
                      <i className="far fa-calendar-check" />
                    </div>
                    <div className="sigma_icon-block-content">
                      <div className="sigma_product-single-content">
                        <p>01-01-1970 To 01-01-1970</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Coupon Code */}
            <div className="sigma_notice">
              <label>Customer Notes</label>
              <textarea
                className="form-control"
                name="cutomer_notes"
                defaultValue={""}
              />
            </div>
            <p className="small">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our{" "}
              <a
                className="btn-link"
                href="https://vaidikanushthanam.in/privacy-policy/"
                target="_blank"
              >
                privacy policy.
              </a>{" "}
            </p>
            <Link href="/cart/Cart"> <button
              type="submit"
              name="placeorder"
              className="sigma_btn-custom primary d-block w-100"
            >
              Place Order
            </button></Link>
            {/* <button
              type="submit"
              name="placeorder"
              className="sigma_btn-custom primary d-block w-100"
            >
              Place Order
            </button> */}
            {/* Order Details End */}
          </div>
        </div>
      </form>
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            "\n  .form-group i {\n    position: unset !important;\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n    color: #e8e8e8;\n}\n"
        }}
      />
    </div>
  </div>
</>

    </div>
  )
}
