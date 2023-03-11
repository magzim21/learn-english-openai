import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import { Header } from "./components/header"; // Named export
import { LoginForm } from "./components/login";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { UserProvider } from "./contexts/user.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header></Header>
        <Outlet />,
      </div>
    ),
    errorElement: <div>NOT FOUND, bro. 404</div>,
    children: [
      {
        path: "about",
        element: (
          <div>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        ),
      },
      {
        path: "login",
        element: <LoginForm> </LoginForm>,
      },
    ],
  },
]);

function App() {
  return (
    <React.Fragment>
      <GoogleOAuthProvider clientId="958455722840-7sscmo2r277bgm9nhkljd8n02a58bpag.apps.googleusercontent.com">

        <UserProvider>
          <RouterProvider
            router={router}
            fallbackElement={<ScaleLoader color="#36d7b7" />}
          ></RouterProvider>
        </UserProvider>
      </GoogleOAuthProvider>
    </React.Fragment>
  );
}

export default App;
