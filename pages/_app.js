import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import { Provider } from "react-redux";
import store from "../store";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/public/assets/fonts/flaticon/flaticon.css'
import '@/public/assets/css/style.css'
import '@/public/assets/css/plugins/font-awesome.min.css'
import '@/public/assets/css/responsive.css'
import Head from "next/head";

const DEFAULT_TITLE = "Default Page Title";
const DEFAULT_DESCRIPTION = "Default description for the page.";
const DEFAULT_KEYWORDS = "default, keywords, for, the, page";

function MyApp({ Component, pageProps }) {
  const { title, description, keywords } = pageProps;

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>{title || DEFAULT_TITLE}</title>
          <meta name="description" content={description || DEFAULT_DESCRIPTION} />
          <meta name="keywords" content={keywords || DEFAULT_KEYWORDS} />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
