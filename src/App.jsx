import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashlayout from "./components/Dashlayout"; 
import RegisterPage from "./pages/RegisterPage";
import SignIn from "./pages/SignIn";

import Home from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import { ToastContainer, Bounce } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";

import VotingPage from "./pages/VotingPage";
import Home from "./pages/HomePage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce} // Corrected this line
      />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route element={<Dashlayout />}> {/* Corrected this line */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidate" element={<Candidates />} />
        </Route>

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

