import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Register from "./components/Register";
import { AuthProvider } from "./context/AuthContext";
// import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
