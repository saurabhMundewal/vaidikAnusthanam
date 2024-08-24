import React from "react";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  return (
    <div className="col-md-6" key={blog?.bloglist_data_id}>
       <article className="sigma_post">
        <div className="sigma_post-thumb">
          <Link href={`/blogDetails/${blog?.bloglist_slug}`}>
            <img src={blog?.bloglist_image} alt="post" />
          </Link>
        </div>
        <div class="sigma_post-body">
          <div class="sigma_post-meta">
            <div class="me-3">
              <i class="fas fa-om"></i>
              <Link
                href={`/blogDetails/${blog?.bloglist_slug}`}
                class="sigma_post-category"
              >
                {blog?.bloglist_category_title}
              </Link>
            </div>

            <Link
              href={`/blogDetails/${blog?.bloglist_slug}`}
              class="sigma_post-date"
            >
              {" "}
              <i class="far fa-calendar"></i> {blog?.bloglist_postdate}
            </Link>
          </div>
          <h6>
            {" "}
            <Link href={`/blogDetails/${blog?.bloglist_slug}`}>
              {blog?.bloglist_title}
            </Link>{" "}
          </h6>
          <div class="sigma_post-single-author">
            <img
              src="./../assets/img/people/1.jpg"
              alt="author"
            />
            <div class="sigma_post-single-author-content">
              By <p>{blog?.bloglist_post_by}</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogCard;
