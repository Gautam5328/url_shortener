import Footer from "@/components/footer";
import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
        <Footer/>
      </main>
    </div>
  );
};

export default AppLayout;
