import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider, UserState } from "./context/UserProvider";
import SemStudents from "./pages/SemStudents";
import StudentProfile from "./pages/StudentProfile";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={SignUp} />
          <Route path="/profile" Component={Profile} />
          <Route path="/students/semester" Component={SemStudents} />
          <Route path="/student/:id" Component={StudentProfile} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
