import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link'
import { fetchPosts, addPost } from '../features/blogSlice';
import BlogCard from "../components/layouts/blogCard";

export default function Blog() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const status = useSelector((state) => state.blog.status);
  const error = useSelector((state) => state.blog.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  const handleAddPost = async () => {
    const newPost = { title: 'New Post', content: 'Content of the new post' };
    await dispatch(addPost(newPost));
  };

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
        {/* <div className="col-lg-4">
          <div className="sidebar">
            {/* Search Widget Start *
            <div className="sidebar-widget widget-search">
              <h5 className="widget-title">Search</h5>
              <form method="post">
                <div className="sigma_search-adv-input">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Posts"
                    name="search"
                    defaultValue=""
                  />
                  <button type="submit" name="button">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </form>
            </div>
            {/* Search Widget End *
            {/* Popular Feed Start *
            <div className="sidebar-widget widget-recent-posts">
              <h5 className="widget-title">Recent Posts</h5>
              <article className="sigma_recent-post">
                <a href="blog-details.html">
                  <img src="./../assets/img/blog/md/1.jpg" alt="post" />
                </a>
                <div className="sigma_recent-post-body">
                  <h6>
                    {" "}
                    <a href="blog-details.html">
                      As we've all discovered by now, the world can change
                    </a>{" "}
                  </h6>
                  <a href="blog-details.html">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2024
                  </a>
                </div>
              </article>
              <article className="sigma_recent-post">
                <a href="blog-details.html">
                  <img src="./../assets/img/blog/md/2.jpg" alt="post" />
                </a>
                <div className="sigma_recent-post-body">
                  <h6>
                    {" "}
                    <a href="blog-details.html">
                      Testimony love offering so blessed
                    </a>{" "}
                  </h6>
                  <a href="blog-details.html">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2024
                  </a>
                </div>
              </article>
              <article className="sigma_recent-post">
                <a href="blog-details.html">
                  <img src="./../assets/img/blog/md/3.jpg" alt="post" />
                </a>
                <div className="sigma_recent-post-body">
                  <h6>
                    {" "}
                    <a href="blog-details.html">
                      As we've all discovered by now, the world can change
                    </a>{" "}
                  </h6>
                  <a href="blog-details.html">
                    {" "}
                    <i className="far fa-calendar" /> May 20, 2024
                  </a>
                </div>
              </article>
            </div>
            {/* Popular Feed End *
            {/* Social Media Start *
            <div className="sidebar-widget">
              <h5 className="widget-title">Never Miss Out</h5>
              <ul className="sigma_sm square light">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Popular Tags End *
          </div>
        </div> */}
        <div className="col-lg-12">
          <div className="row">
            {/* Article Start */}
            {posts && posts?.blogs?.map((post) => (
            (<BlogCard blog={post} key={post?.bloglist_data_id}/>)
             ))}
            {/* Article End */}         
          </div>
          {/* Pagination Start */}
          {/* <ul className="pagination mb-0">
            <li className="page-item">
              <a className="page-link" href="#">
                {" "}
                <i className="far fa-chevron-left" />{" "}
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item active">
              <a className="page-link" href="#">
                2 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                {" "}
                <i className="far fa-chevron-right" />{" "}
              </a>
            </li>
          </ul> */}
          {/* Pagination End */}
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}
