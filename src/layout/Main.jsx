import { Outlet } from "react-router-dom";
import Nav from "../Shered/Nav";
import Footer from "../Shered/Footer";
import ChatModal from "../CustomerSuport/ChatModal";

const Main = () => {
  return (
    <div className="">
      <Nav />
      <Outlet />
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-20 mr-64 z-10">
        <div className="m-auto w-2/4">
          <ChatModal/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
