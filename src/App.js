import { Route } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/addFfriend">
        <AddFriend />
      </Route>
      <Route path="friendList">
        <FriendList />
      </Route>
    </div>
  );
}

export default App;
