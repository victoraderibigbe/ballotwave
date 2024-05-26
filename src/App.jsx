import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import RegisterPage from "./pages/RegisterPage";
import Home from './pages/HomePage'
function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        </Route>
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </>
  );
}

export default App;
