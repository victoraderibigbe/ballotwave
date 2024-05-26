import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import RegisterPage from "./pages/RegisterPage";
import SignIn from "./pages/SignIn";
import Home from './pages/HomePage'

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </>
  );
}

export default App;
