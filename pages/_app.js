// pages/_app.js

import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import { Provider } from 'react-redux';
import store from '../store'; 
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
