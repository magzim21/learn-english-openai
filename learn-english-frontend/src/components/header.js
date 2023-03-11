// header component function

import { React, useContext } from "react";

import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Button, Pane, Text, majorScale, LogInIcon} from 'evergreen-ui'
import GoogleSSO from './google-sso'

import { UserContext } from "../contexts/user.context";



export const Header = () => {
  const {currentUser, setCurrentUser } = useContext(UserContext);
  // console.log(currentUser);
  console.log("render header") // todo / try aonther debugging method
// function    Header() {

    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">
                  <svg
                  // height="0"
                  // viewBox="0 0 17 40"
                  // width="20"
                  // xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* <path d="M10 10 L90 90" stroke="black" stroke-width="2" fill="none"  /> */}
                    {/* <path d="M 10 10 H 90 V 90 H 10 Z" /> */}
                    <path
                      fill="white"
                      d="m 14.5752 6.6714 a 4.2055 4.2055 0 0 0 -2.01 3.5376 a 4.0931 4.0931 0 0 0 2.4908 3.7542 a 9.7779 9.7779 0 0 1 -1.2755 2.6351 c -0.7941 1.1431 -1.6244 2.2862 -2.8878 2.2862 s -1.5883 -0.734 -3.0443 -0.734 c -1.42 0 -1.9252 0.7581 -3.08 0.7581 s -1.9611 -1.0589 -2.8876 -2.3584 a 11.3987 11.3987 0 0 1 -1.9373 -6.1487 c 0 -3.61 2.3464 -5.523 4.6566 -5.523 c 1.2274 0 2.25 0.8062 3.02 0.8062 c 0.734 0 1.8771 -0.8543 3.2729 -0.8543 a 4.3778 4.3778 0 0 1 3.6822 1.841 z m -6.8586 -2.0456 a 1.3865 1.3865 0 0 1 -0.2527 -0.024 a 1.6557 1.6557 0 0 1 -0.0361 -0.337 a 4.0341 4.0341 0 0 1 1.0228 -2.5148 a 4.1571 4.1571 0 0 1 2.7314 -1.4078 a 1.7815 1.7815 0 0 1 0.0361 0.373 a 4.1487 4.1487 0 0 1 -0.9867 2.587 a 3.6039 3.6039 0 0 1 -2.5148 1.3236 z"
                    ></path>
                  </svg>
                </Link>
              </li>
              <li>
                <Link to="#">Store</Link>
              </li>
              <li>
                <Link to="#">Mac</Link>
              </li>
              <li>
                <Link to="#">iPad</Link>
              </li>
              <li>
                <Link to="#">iPhone</Link>
              </li>
              <li>
                <Link to="#">Watch</Link>
              </li>
              <li>
                <Link to="#">AirPods</Link>
              </li>
              <li>Hello {currentUser.email} </li>
              {/* <li>
                <Link to="/login">Login</Link>
              </li> */}
              {/* <li>
                    <Link to="https://mydomainko.auth.ca-central-1.amazoncognito.com/oauth2/authorize?client_id=2cbu8r723nua5fdgjmnh4onbah&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&scope=openid&identity_provider=Google">
                      <Button size="small">
                        <img style={{height: "70%", marginRight: 10}} src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
                        <span> Login with Google </span>
                      </Button>
                    </Link>
              </li> */}
              <li>
                <GoogleSSO></GoogleSSO>
              </li>
              <li></li>
            </ul>
          </nav>
        </header>
      </div>
    );
}

