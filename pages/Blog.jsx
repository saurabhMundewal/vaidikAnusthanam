import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { fetchPosts } from '../features/blogSlice';
import BlogCard from "../components/layouts/blogCard";
import Pagination from '@/atoms/pagination';
import Loader from '@/components/preloader/Preloader';

export default function Blog() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.blog.posts);
  const status = useSelector((state) => state.blog.status);
  const error = useSelector((state) => state.blog.error);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts?.blogs?.length / 9);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastItem = currentPage * 9;
  const indexOfFirstItem = indexOfLastItem - 9;
  const currentItems = posts?.blogs?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div>
      {/* Loader */}
      {status === 'loading' && (
        <Loader />
      )}
      
      {status === 'succeeded' && (
        <>
          {/* Subheader */}
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
          
          {/* Blog Section */}
          <div className="section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="row">
                    {/* Article Start */}
                    {currentItems && currentItems.map((post) => (
                      <BlogCard blog={post} key={post?.bloglist_data_id} className="col-md-6" />
                    ))}
                    {/* Article End */}
                  </div>

                  {/* Pagination */}
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Error */}
      {status === 'failed' && <p>Error: {error}</p>}
    </div>
  );
}
