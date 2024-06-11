import HomeHeader from "./HomeHeader";
import { Outlet } from "react-router-dom";
import FooterPage from "./FooterPage";

const Layout = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <FooterPage />
    </>
  );
};

export default Layout;
