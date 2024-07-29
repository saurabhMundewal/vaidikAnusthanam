import "@/styles/globals.css";
import Layout from "@/components/layouts/Layout";
import { Provider } from "react-redux";
import store from "../store";
import "react-toastify/dist/ReactToastify.css";
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
