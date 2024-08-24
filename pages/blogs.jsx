import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { fetchPosts, addPost } from "../features/blogSlice";
import BlogCard from "../components/layouts/blogCard";
import Pagination from "@/atoms/pagination";
import axiosInstance from '../lib/axiosInstance';

export default function Blog() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const status = useSelector((state) => state.blog.status);
  const error = useSelector((state) => state.blog.error);
  const generalConfiguration = useSelector(
    (state) => state.generalConfiguration.data
  );
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts?.blogs?.length / 9);
  const [categoryList, setCategoryList] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const indexOfLastItem = currentPage * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems = posts?.blogs?.slice(indexOfFirstItem, indexOfLastItem);

  const fetchBlogCategory = async () => {
    try {
      const response = await axiosInstance.post(`/Blogs/blogCategoryList`);
      if (response?.status === 200) {
        setCategoryList(JSON.parse(response?.data?.datas));
      }
    } catch (error) {
      setCategoryList([]);
      console.error("Error fetching Library data:", error?.message);
    }
  };

  useEffect(() => {
    fetchBlogCategory()
    if (status === "idle") {
      dispatch(fetchPosts());      
    }
  }, [status, dispatch]);

  useEffect(() => {
    fetchBlogCategory() 
  }, []);


  return (
    <div>
      <>
        {/* partial:partia/__subheader.html */}
        <div
          className="sigma_subheader dark-overlay dark-overlay-2"
          style={{ backgroundImage: "url(./../assets/img/subheader.jpg)" }}
        >
          <div className="container">
            <div className="sigma_subheader-inner">
              <div className="sigma_subheader-text">
                <h1>Blogs</h1>
              </div>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link className="btn-link" href="/">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Blogs
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        {/* partial */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="sidebar">
                  {/* Search Widget Start */}
                  {/* <div className="sidebar-widget widget-search">
                    <h5 className="widget-title">Search</h5>
                    <form method="post">
                      <div className="sigma_search-adv-input">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Posts"
                          name="search"
                        />
                        <button type="submit" name="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div> */}
                  {/* Search Widget End */}

                  {/* Popular Feed Start */}
                  <div className="sidebar-widget widget-recent-posts">
                    <h5 className="widget-title">Recent Posts</h5>
                    <article className="sigma_recent-post">
                      <Link href="https://vaidikanushthanam.in/blog/lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry/">
                        <img
                          src="https://vaidikanushthanam.in/assets/blogs/lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry.webp"
                          alt="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                          title="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                          width={150}
                          height={100}
                        />
                      </Link>
                      <div className="sigma_recent-post-body">
                        <h6>
                          <Link href="https://vaidikanushthanam.in/blog/lorem-ipsum-is-simply-dummy-text-of-the-printing-and-typesetting-industry/">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry
                          </Link>
                        </h6>
                        <Link href="https://vaidikanushthanam.in/blog/blog-title">
                          <i className="far fa-calendar"></i> Aug, 06 2024
                        </Link>
                      </div>
                    </article>
                  </div>
                  {/* Popular Feed End */}
                  {/* Social Media Start */}
                  <div className="sidebar-widget">
                    <h5 className="widget-title">Never Miss Out</h5>
                    <ul className="sigma_sm square light">
                      <li>
                      <Link
                      href={generalConfiguration?.facebook ? generalConfiguration?.facebook : '#'}
                      target="_blank;"
                    >
                      <i className="fab fa-facebook-f" />
                    </Link>
                      </li>
                      <li>
                      <Link
                      href={generalConfiguration?.instagram ? generalConfiguration?.instagram : '#'}
                      target="_blank;"
                    >
                      <i className="fab fa-instagram" />
                    </Link>
                      </li>
                      <li>
                      <Link href={generalConfiguration?.twitter ? generalConfiguration?.twitter : '#'} target="_blank;">
                      <i className="fab fa-twitter" />
                    </Link>
                      </li>
                      <li>
                      <Link href={generalConfiguration?.youtube ? generalConfiguration?.youtube : '#'} target="_blank;">
                      <i className="fab fa-youtube" />
                    </Link>
                      </li>
                      <li>
                      <Link
                      href={generalConfiguration?.pinterest ? generalConfiguration?.pinterest : '#'}
                      target="_blank;"
                    >
                      <i className="fab fa-pinterest" />
                    </Link>
                      </li>
                      {/* <li>
                        <Link href="https://pin.it/2CgrlUzTP">
                          <i className="fab fa-pinterest"></i>
                        </Link>
                      </li> */}
                    </ul>
                  </div>
                  {/* Social Media End */}
                  {/* Categories Start */}
                  <div className="sidebar-widget widget-categories">
                    <h5 className="widget-title"> Our Categories </h5>
                    <ul className="sidebar-widget-list">
                    {categoryList?.length ?
                        categoryList?.map((catData) => {
                          return (
                            <li key={catData?.data_id}>
                              <Link href={`/blog/${catData?.slug}`}>
                                {catData?.title}
                                {/* <span>32</span> */}
                              </Link>
                            </li>
                          );
                        }):  <li>{'Category not available'}</li>}
                    </ul>
                  </div>
                  {/* Categories End */}
                </div>
              </div>

              <div className="col-lg-8">
                <div className="row" id="body">
                  {/* Article Start */}
                  {posts &&
                    posts?.blogs?.map((post) => (
                      <BlogCard blog={post} key={post?.bloglist_data_id} />
                    ))}
                  {/* Article End */}
                </div>
                {/* Pagination Start */}
                {totalPages > 1 ?
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />: null}
              </div>
            </div>
          </div>
        </div>

      
      </>
    </div>
  );
}
