import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: "" },
    { path: "/profile", label: "Perfil", icon: "" },
    { path: "/settings", label: "Configuración", icon: "" },
    { path: "/counter", label: "Contador" }
  ];

  return (
    <div className="sidebar bg-light vh-100 p-3">
      <h5 className="mb-4">Menú</h5>
      <ul className="nav nav-pills flex-column">
        {menuItems.map(item => {
          let { path, label, icon } = item;
          return (
            <li key={path} className="nav-item mb-2">
              <Link
                to={path}
                className={`nav-link ${location.pathname === path ? 'active' : ''}`}
              >
                {icon &&
                  <span className="me-2">{icon}</span>
                }
                {label}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
};

export default Sidebar;