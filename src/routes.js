import Home from "./pages/Home"
import Movie from "./pages/Movie"
import Directors from "./pages/Directors"
import ErrorPage from "./pages/ErrorPage";
import Actors from "./pages/Actors";


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/movie/:id",
    element: <Movie />,
    errorElement: <ErrorPage />
  },
  {
    path: "/directors",
    element: <Directors />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />,
    errorElement: <ErrorPage />
  },
  {
    path:"/errorpage",
    element: <ErrorPage />,
    errorElement: <ErrorPage />
  }
];

export default routes;
