import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashlayout from "./components/Dashlayout";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/HomePage";
import Userinfo from "./pages/Userinfo";
import ProfilePage from "./pages/ProfilePage";

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
        <Route element={<Dashlayout />}>
          {/* Corrected this line */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="user/info" element={<Userinfo/>}/>
          <Route path="/candidate" element={<Candidates />} />
          <Route path="/profilepage" element={<ProfilePage/>} />

        </Route>
      </Routes>
    </>
  );
}

export default App;