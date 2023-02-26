// https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-integrate-apps.html
// https://github.com/aws-amplify/amplify-js/tree/main/packages/amazon-cognito-identity-js

import "./login.css";
import { Button, Pane, Text, majorScale, LogInIcon} from 'evergreen-ui'

export const LoginForm = () => {
    return (
        <div classNameName="login-wrapper">
            <Pane display="flex" alignItems="center" marginX={majorScale(2)}>
                <LogInIcon />
                <Button>Login with Google 
                    <img style={{height: "70%"}} src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
                </Button>
            </Pane>
        </div>
    );
    }

// export const LoginForm = () => {
//     return (
//         <div classNameName="login-wrapper">
// <div className="container">
//   <form action="/action_page.php">
//     <div className="row">
//       <h2 style={{textAlign: 'center' }}>Login with Social Media or Manually</h2>
//       <div className="vl">
//         <span className="vl-innertext">or</span>
//       </div>

//       <div className="col">
//         <a href="#" className="fb btn">
//           <i className="fa fa-facebook fa-fw"></i> Login with Facebook
//         </a>
//         <a href="#" className="twitter btn">
//           <i className="fa fa-twitter fa-fw"></i> Login with Twitter
//         </a>
//         <a href="#" className="google btn">
//           <i className="fa fa-google fa-fw"></i> Login with Google+
//         </a>
//       </div>

//       <div className="col">
//         <div className="hide-md-lg">
//           <p>Or sign in manually:</p>
//         </div>

//         <input type="text" name="username" placeholder="Username" required/>
//         <input type="password" name="password" placeholder="Password" required/>
//         <input type="submit" value="Login"/>
//       </div>

//     </div>
//   </form>
// </div>

// <div className="bottom-container">
//   <div className="row">
//     <div className="col">
//       <a href="#" style={{color: 'white'}} className="btn">Sign up</a>
//     </div>
//     <div className="col">
//       <a href="#" style={{color: 'white'}} className="btn">Forgot password?</a>
//     </div>
//   </div>
// </div>
//         </div>
//     );
//     }