import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin component/Dashboard";
// import Login from "./components/Login";
import PrivateRoute from "./components/hoc/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Main from "./components/client component/main";
import EndForm from "./components/client component/form_register/forms/End form";
import Login from "./components/client component/login";
import SignUp from "./components/client component/signup";
import Forms from "./components/client component/form_register/form";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route exact path="/" element={<Dashboard />} />
          </Route>
          <Route exact path="/app" element={<Main />} />
          <Route exact path="/endform" element={<EndForm />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forms" element={<Forms />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
