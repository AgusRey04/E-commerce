import "./App.css";
import Home from "./componets/home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MaiLayout from "./componets/layout/MaiLayout";
import Login from "./componets/login/Login";
import CartShop from "./componets/cartShop/CartShop";
import ErrorPage from "./componets/errorPage/ErrorPage";
import Logout from "./componets/logout/Logout";
import NewUser from "./componets/newUser/NewUser";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [search, setSearch] = useState()
  const [loggedInUser, setLoggedInUser] = useState(null);
  
 const handleSearch = (searchTerm) => {
    setSearch(searchTerm)
  }
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("logged_in_user"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  const updateUser = (userData) => {
    localStorage.setItem("logged_in_user", JSON.stringify(userData));
    setLoggedInUser(userData);
  };
  const logout = () => {
    localStorage.removeItem("logged_in_user");
    setLoggedInUser(null);
  };


  const router = createBrowserRouter([
    {
      path: "/",
      element: (

        <MaiLayout onSearch={handleSearch} loggedInUser={loggedInUser}>
          <Home search={search} onloggedInUser={loggedInUser} />

        </MaiLayout>
      ),
    },
    {
      path: "/login",
      element: (
        <MaiLayout loggedInUser={loggedInUser}>
          <Login onUpdateUser={updateUser} loggedInUser={loggedInUser} />
        </MaiLayout>
      ),
    },
    {
      path: "/Logout",
      element: (
        <MaiLayout loggedInUser={loggedInUser}>
          <Logout onLogout={logout} loggedInUser={loggedInUser} />
        </MaiLayout>
      ),
    },
    {
      path: "/register",
      element: (
        <MaiLayout loggedInUser={loggedInUser}>
          <NewUser />
        </MaiLayout>
      ),
    },
    {
      path: "/cart",
      element: (
        <MaiLayout loggedInUser={loggedInUser}>
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
