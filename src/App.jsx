import {Profile} from "./components/Profile/Profile.jsx";
import user from "./components/Profile/user.json";
function App() {
  return (
    <Profile avatar={user.avatar} username={user.username} location={user.location} stats={user.stats} tag={user.tag}/>
  )
}

export default App
