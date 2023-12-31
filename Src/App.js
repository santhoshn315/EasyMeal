import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./Body/AboutUs";
import RestuarantMenu from "./Body/RestuarantMenu";

export const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet></Outlet>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Body></Body>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/restuarants/:resId",
        element: <RestuarantMenu></RestuarantMenu>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
