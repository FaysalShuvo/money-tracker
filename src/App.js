import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="log-in" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
