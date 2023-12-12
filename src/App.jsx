import './App.css'
import User from './components/User';
import UserList from './components/UserList';
import { UserProvider } from './context/User/UserProvider';

function App() {

  return (
    <>
      <h1>Learning useContext</h1>
      <div className='app__wrapper'>
        <UserProvider>
          <main className='users__list'>
            <p>Select a user</p>
            <UserList/>
          </main>
          <aside>
            <User/>
          </aside>
        </UserProvider>
      </div>
    </>
  )
}

export default App
