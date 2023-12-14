import { useReducer } from "react";
import { UserReducer } from "./UserReducer";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
  const initialState = {
    users: [],
    userSelected: null
  }
  const [state, dispatch] = useReducer(UserReducer, initialState)

  const getUsers = async () => {
    const response = await fetch('https://reqres.in/api/users')
    const data = await response.json()
    const { data: dataUsers } = data;
    dispatch({
      type: 'GetUsers',
      payload: dataUsers
    })
  }

  const getUser = async (id) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await response.json()
    const { data: dataUser } = data;
    dispatch({
      type: 'GetUser',
      payload: dataUser
    })
  }

  return (
    <UserContext.Provider value={{ ...state, getUsers, getUser }}>
      {children}
    </UserContext.Provider>
  )
}