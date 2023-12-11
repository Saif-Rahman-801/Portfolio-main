import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Layout/Home/Home";
import MainPage from "./Components/MainContent/MainPage";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS with your preferred options
AOS.init({
  duration: 800, // Animation duration in milliseconds
  offset: 200,   // Offset (in pixels) from the original trigger point
  easing: 'ease-in-out', // Easing type
  delay: 100,    // Delay between initialization and animation
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <MainPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

