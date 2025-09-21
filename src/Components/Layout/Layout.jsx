import { Outlet, ScrollRestoration } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


export default function Layout() {
  return (
    <>
      
      <Navbar />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
    </>
  );
}
