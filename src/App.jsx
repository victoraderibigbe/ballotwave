import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import RegisterPage from "./pages/RegisterPage";
import SignIn from "./pages/SignIn";
import VotingPage from "./pages/VotingPage";
import Home from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<SignIn />} />
          <Route path="vote" element={<VotingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
