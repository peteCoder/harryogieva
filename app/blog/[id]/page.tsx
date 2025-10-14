import React from "react";
import BlogDetailClient from "../_components/BlogDetailClient";

type tParams = Promise<{ id: string }>;

const BlogDetails = async (props: { params: tParams }) => {
  const { id } = await props.params;
  return <BlogDetailClient id={id} />;
};

export default BlogDetails;
