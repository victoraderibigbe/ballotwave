import { Route, Routes } from "react-router-dom";
import "./App.css";

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
          <Route path="register" element={<RegisterPage />} />
          <Route path="vote" element={<VotingPage />} />
        </Route>
        <Route element={<Dashlayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user/info" element={<Displayuser />} />
          <Route path="/candidate" element={<Candidates />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
