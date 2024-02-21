import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserProvider";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
          <Header />
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
