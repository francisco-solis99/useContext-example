import { useUserContext } from "../context/User/useUserContext"

export default function User() {
  const {profiles} = useUserContext()
  const {userSelected} = profiles;

  return (
    <>
      {
        userSelected
          ? (
          <article className="user">
            <img src={userSelected.avatar} alt={userSelected.email} />
            <p>
              {userSelected.first_name} {userSelected.last_name}
            </p>
            <p>
              <span>email:</span>
              <span>
                {userSelected.email}
              </span>
            </p>
          </article>
          )
          : (
          <p>
            No profile selected
          </p>
          )
      }
    </>
  )
}
