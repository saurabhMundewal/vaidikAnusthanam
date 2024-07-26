// src/store/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import faqReducer from '../features/faqSlice';
import bannerReducer from '../features/bannersSlice';
import configurationReducer from '../features/generalConfigurationSlice'
import aboutPageReducer  from '../features/aboutPageSlice'
import teamReducer  from '../features/teamSlice'
import privacyPolicyReducer from '../features/privacyPolicySlice';
import refundPolicyReducer from '../features/refundPolicySlice';
import termsConditionsReducer from '../features/termsConditionsSlice';
import paymentPolicyReducer from '../features/paymentPolicySlice';
import blogReducer  from '../features/blogSlice';
import libraryReducer  from '../features/librarySlice';
import titleReducer   from '../features/titleSlice';
import poojaReducer   from '../features/poojaSlice';
import homeThemeReducer   from '../features/homeThemeSlice';
import authReducer from '../features/authSlice';
import locationReducer from '../features/locationSlice';
import forgotPasswordReducer from '../features/forgotPasswordSlice';
import userReducer from '../features/userSlice';
// Import other reducers here...

const rootReducer = combineReducers({
  title: titleReducer,
  faq: faqReducer,
  Banners: bannerReducer,
  generalConfiguration: configurationReducer,
  aboutPage: aboutPageReducer,
  team: teamReducer,
  privacyPolicy: privacyPolicyReducer,
  refundPolicy: refundPolicyReducer,
  termsConditions: termsConditionsReducer,
  paymentPolicy: paymentPolicyReducer,
  blog: blogReducer,
  library: libraryReducer,
  pooja: poojaReducer,
  homeTheme: homeThemeReducer,
  auth: authReducer,
  location: locationReducer,
  forgotPassword: forgotPasswordReducer,
  user: userReducer,
  // Add other reducers here...
});

export default rootReducer;
