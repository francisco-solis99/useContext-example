import { useContext } from "react";
import { UserContext } from "./UserProvider";

// 👉 Custom hook to context
export function useUserContext() {
  const userContext = useContext(UserContext)

  if(!userContext) {
    throw Error('You have to use this inside of a UserProvider')
  }
  return userContext;
}