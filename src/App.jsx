import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UrlProvider from "./context";
import AppLayout from "./layouts/app-layout";
import RequireAuth from "./components/require-auth";
import RedirectLink from "./pages/redirect-link";
import LandingPage from "./pages/landing";
import Dashboard from "./pages/dashboard";
import LinkPage from "./pages/link";
import Auth from "./pages/auth";
import { Helmet } from "react-helmet";
import AboutUs from "./pages/aboutUs";
import ContactUsPage from "./pages/contactUs";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/dashboard",
        element: (
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        ),
      },
      {
        path: "/link/:id",
        element: (
          <RequireAuth>
            <LinkPage />
          </RequireAuth>
        ),
      },
      {
        path: "/:id",
        element: <RedirectLink />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUsPage/>
      }
    ],
  },
]);

function App() {
  return (
    <UrlProvider>
      <RouterProvider router={router}>
        <Helmet>
          <title>SqueezeURL</title>
          <meta
            name="description"
            content="The Ultimate URL shortener simple, fast, and reliable!"
          />
          <meta
            name="keywords"
            content="URL, shortener, squeezeurl,squeeze,tinyurl"
          />
        </Helmet>
      </RouterProvider>
    </UrlProvider>
  );
}

export default App;
