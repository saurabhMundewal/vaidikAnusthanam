import Header from "./HomePage";
import Footer from "./Footer";
import Menu from "../menu/Menu";

export default function Layout({ children }) {
  return (
    <>
      {/* <Header></Header> */}
      <Menu></Menu>
      <div className="content">{children}</div>
      <Footer></Footer>
    </>
  );
}
