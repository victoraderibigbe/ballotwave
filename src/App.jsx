import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Dashlayout from "./components/Dashlayout"; 
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Candidates from "./pages/Candidates";
import { ToastContainer, Bounce } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import Displayuser from "./pages/Displayuser";
Displayuser
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
        transition={Bounce}
      />

      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<Dashlayout />}> {/* Corrected this line */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/info" element={<Displayuser />} />
          <Route path="/candidate" element={<Candidates />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

