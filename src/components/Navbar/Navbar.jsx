const Navbar = ({ setUserLoggedIn }) => {
  const handleLogout = () => {
    setUserLoggedIn(false);
    localStorage.removeItem('token');
  };

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand">Mi App</span>
        <button 
          className="btn btn-outline-light"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default Navbar;