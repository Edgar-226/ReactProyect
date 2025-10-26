
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({ children, setUserLoggedIn }) => {
  return (
    <div className="main-layout">
      <Navbar setUserLoggedIn={setUserLoggedIn} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <main className="p-3">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;