import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/profile", label: "Perfil", icon: "👤" },
    { path: "/settings", label: "Configuración", icon: "⚙️" },
  ];

  return (
    <div className="sidebar bg-light vh-100 p-3">
      <h5 className="mb-4">Menú</h5>
      <ul className="nav nav-pills flex-column">
        {menuItems.map(item => (
          <li key={item.path} className="nav-item mb-2">
            <Link
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="me-2">{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;