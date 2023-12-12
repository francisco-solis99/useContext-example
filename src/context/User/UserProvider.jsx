/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

// 👉 Context
export const UserContext = createContext(null);

// 👉 Provider
export function UserProvider(props){
  const [profiles, setProfiles] = useState({
    users: [],
    userSelected: null
  });

  return (
    <UserContext.Provider value={{profiles, setProfiles}}>
      {props.children}
    </UserContext.Provider>
  )
}