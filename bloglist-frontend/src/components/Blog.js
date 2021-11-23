import React from "react";
const Blog = ({ blog }) => (
  <div>
    {blog.title} {blog.user ? blog.user.name : ""}
  </div>
);

export default Blog;
