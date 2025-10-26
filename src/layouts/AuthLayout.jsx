const AuthLayout = ({ children }) => {
  return (
    <div 
      className="auth-layout vh-100" 
      style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' 
      }}
    >
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-md-6 col-lg-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;