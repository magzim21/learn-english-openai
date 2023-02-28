import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import {Header} from "./components/header"; // Named export
import {LoginForm} from "./components/login"; 

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
        element: <LoginForm>  </LoginForm>,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<ScaleLoader color="#36d7b7" />}
    ></RouterProvider>
  );
}

export default App;
