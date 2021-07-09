import React from "react";

const routes = [
  {
    path: "/home", component: React.lazy(() => import("@@/pages/home/Home.js")), exact: true,
  },
  {
    path: "/aboutme", component: React.lazy(() => import("@@/pages/aboutme/AboutMe.js")), exact: true,
  },
  {
    path: "/projects", component: React.lazy(() => import("@@/pages/projects/Project.js")), exact: true,
  },
  {
    path: "/blogs", component: React.lazy(() => import("@@/pages/blog/Blog.js")), exact: true,
  },
  {
    path: "/testimonial", component: React.lazy(() => import("@@/pages/testimonial/Testimonial.js")), exact: true,
  }
];
export default routes;