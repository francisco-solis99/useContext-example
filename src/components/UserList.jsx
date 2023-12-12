import { useEffect } from "react"
import { useUserContext } from "../context/User/useUserContext"


export default function UserList() {
  const { profiles, setProfiles } = useUserContext()

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        const {data: dataUsers} = data;
        setProfiles((lastProfiles => {
          return {
            ...lastProfiles,
            users: dataUsers
          }
        }));
      })
      .catch(err => console.log(err))
  },[setProfiles])


  const handleClickSelect = (idUser) => {
    const userSelected = profiles.users.find(user => user.id === idUser);

    setProfiles(lastProfiles => {
      return {
        ...lastProfiles,
        userSelected
      }
    })
  }

  return (
    <ul>
      {
        profiles.users.map(profile => {
          return (
            <li key={profile.id} className="user__avatar" onClick={() => handleClickSelect(profile.id)}>
                <img src={profile.avatar} alt={profile.email} />
                <p>
                  {profile.first_name} {profile.last_name}
                </p>
            </li>
          )
        })
      }
    </ul>
  )
}
