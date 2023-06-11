import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            index: true,
            element: <h2>Company</h2>,
          },
          {
            path: "person",
            element: <h2>John Doe</h2>,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
