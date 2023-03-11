import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const defaultValue = {
    aud: null,
    azp: null,
    email: null,
    email_verified: null,
    exp: null,
    given_name: null,
    iat: null,
    iss: null,
    jti: null,
    name: null,
    nbf: null,
    picture: null,
    sub: null,
  };
  const [currentUser, setCurrentUser] = useState(defaultValue);
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
