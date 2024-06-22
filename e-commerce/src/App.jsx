import "./App.css";
import Home from "./componets/home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MaiLayout from "./componets/layout/MaiLayout";
import Login from "./componets/login/Login";
import CartShop from "./componets/cartShop/CartShop";
import ErrorPage from "./componets/errorPage/ErrorPage";
import Logout from "./componets/logout/Logout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <MaiLayout>
          <Home />
        </MaiLayout>
      ),
    },
    {
      path: "/login",
      element: (
        <MaiLayout>
          <Login />
        </MaiLayout>
      ),
    },
    {
      path: "/Logout",
      element: (
        <MaiLayout>
          <Logout />
        </MaiLayout>
      ),
    },
    {
      path: "/cart",
      element: (
        <MaiLayout>
          <CartShop />
        </MaiLayout>
      ),
    },
    {
      path: "*",
      element: (
        <MaiLayout>
          <ErrorPage />
        </MaiLayout>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

