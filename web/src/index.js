//Import React Library
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// Import CSS
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// Import JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Import Routes Pages
import Index from "./routes";
import Login from "./routes/login";
import Register from "./routes/register";
import About from "./routes/about";
import Faq from "./routes/faq";
import Gallery from "./routes/gallery";
import Guidelines from "./routes/guidelines";
import Contact from "./routes/contact";

// All Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/guidelines",
    element: <Guidelines />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

//Render all the Components
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <div className="container-fluid">
      <div className="container-lg">
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  </HelmetProvider>
);
