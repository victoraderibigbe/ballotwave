import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
