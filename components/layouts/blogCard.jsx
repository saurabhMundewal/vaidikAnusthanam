import React from 'react';
import Link from "next/link";



const BlogCard = ({ blog }) => {
  return (
    <div className="col-lg-4 col-md-6" key={blog?.bloglist_data_id}>
      <article className="sigma_post">
        <div className="sigma_post-thumb">
        <Link
                href={`/blogDetails/${blog?.bloglist_slug}`}>
            <img src={blog?.bloglist_image} alt="post" />
            </Link>
        </div>
        <div className="sigma_post-body">
          <div className="sigma_post-meta">
            <div className="me-3">
              <i className="fas fa-om" />
              <Link
                href={`/blogDetails/${blog?.bloglist_slug}`}
                className="sigma_post-category"
              >
                {blog?.bloglist_title}
              </Link>
            </div>
            <Link href={`/blogDetails/${blog?.bloglist_slug}`} className="sigma_post-date">
              {" "}
              <i className="far fa-calendar" /> {blog?.bloglist_postdate}
            </Link>
          </div>
          <h5>
            <div
              dangerouslySetInnerHTML={{
                __html: blog?.bloglist_description,
              }}
            />
          </h5>
          <div className="sigma_post-single-author">
            <img src="./../assets/img/people/1.jpg" alt="author" />
            <div className="sigma_post-single-author-content">
              By <p> {blog?.bloglist_post_by}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
