import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Authentication/Login/Login";
import SignUp from "./components/Authentication/SignUp/SignUp";
import ChangePassword from "./components/Authentication/ChangePassword/ChangePassword";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signUp" exact element={<SignUp />} />
          <Route path="/changePassword" exact element={<ChangePassword />} />
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
