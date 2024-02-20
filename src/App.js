import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
