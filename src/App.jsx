import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>Chai aur Code</h1>
      <Login />
      <br />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
