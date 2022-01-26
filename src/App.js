import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

// components
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import PrivateRoute from "./protectedRoute/PrivateRoute";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    // <div className="App">
    //   {authIsReady && (
    //     <BrowserRouter>
    //       <Navbar />
    //       <Routes>
    //         <Route path="/" element={<Home />} />
    //         <Route path="sign-up" element={<SignUp />} />
    //         <Route path="log-in" element={<Login />} />
    //       </Routes>
    //     </BrowserRouter>
    //   )}
    // </div>

    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Home />} />
            </Route>

            <Route
              path="sign-up"
              element={user ? <Navigate to="/" /> : <SignUp />}
            />

            <Route
              path="log-in"
              element={user ? <Navigate to="/" /> : <Login />}
            />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
