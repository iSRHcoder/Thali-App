import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import PageRoutes from "./routes/PageRoutes";
import ThemeProvider from "./context/ThemeContext";
import AuthProvider from "./context/AuthContext";
import UserProvider from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <UserProvider>
            <PageRoutes />
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
