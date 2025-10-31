import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import Counter from "./components/Counter/Counter.jsx";
//Layouts
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(true);

  const routes = [
    // Rutas públicas con AuthLayout
    { 
      path: "/login", 
      component: <Login setUserLoggedIn={setUserLoggedIn} />, 
      isPublic: true,
      layout: AuthLayout 
    },
    
    // Rutas protegidas con MainLayout
    { 
      path: "/dashboard", 
      component: <Dashboard />, 
      isPublic: false,
      layout: MainLayout 
    },
    { 
      path: "/counter", 
      component: <Counter />, 
      isPublic: false,
      layout: MainLayout 
    },
    // { 
    //   path: "/settings", 
    //   component: <Settings />, 
    //   isPublic: false,
    //   layout: MainLayout 
    // },
    
    // Rutas especiales sin layout
    { 
      path: "/", 
      component: <Navigate to="/login" replace />, 
      isPublic: true 
    },
    { 
      path: "*", 
      component: <Navigate to="/login" replace />, 
      isPublic: true 
    },
  ];

  const routesElements = routes.map(({ path, component, isPublic, layout: Layout }) => {
    // Componente con o sin layout
    const ComponentWithLayout = Layout ? (
      <Layout setUserLoggedIn={setUserLoggedIn} userLoggedIn={userLoggedIn}>
        {component}
      </Layout>
    ) : component;

    if (isPublic) {
      return (
        <Route
          key={path}
          path={path}
          element={
            userLoggedIn ?
              <Navigate to="/dashboard" replace /> :
              ComponentWithLayout
          }
        />
      );
    } else {
      return (
        <Route
          key={path}
          path={path}
          element={
            userLoggedIn ? ComponentWithLayout : <Navigate to="/login" replace />
          }
        />
      );
    }
  });

  return (
    <div className="App">
      <Routes>
        {routesElements}
      </Routes>
    </div>
  );
}

export default App;