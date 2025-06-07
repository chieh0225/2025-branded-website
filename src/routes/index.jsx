import Layout from "../App";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        index: true,
        element: <HomePage />,
      },
      {
        path: "blogPage",
        element: <BlogPage />,
      },
    ],
  },
];

export default routes;
