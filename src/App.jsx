import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Nav";
import "./App.css";
import SignUp from "./signUp";
import Login from "./Login/login";
import Home from "./home";




function App() {
  return (
    <>
    <Navigation/>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home />} />


      </Routes>
    </>
  );
}

export default App;

