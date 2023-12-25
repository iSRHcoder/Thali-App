import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import route from "./../../routes/route.json";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import { UserContext } from "../../context/UserContext";

const AppHeader = () => {
  const thali = useSelector((state) => state.counter.thali);

  const activeClasses = ({ isActive }) =>
    isActive
      ? "text-white fs-5 fw-bold text-decoration-none ms-3"
      : "text-decoration-none text-white ms-3";

  const { isAuth, logoutHandler } = useContext(AuthContext);
  const { userData } = useContext(UserContext);

  const { lightToDarkHandler, isDark, darkToLightHandler } =
    useContext(ThemeContext);

  const iconClasses = isDark
    ? "bi bi-brightness-high-fill fs-5"
    : "bi bi-moon-fill fs-5";

  const darkClickHandler = isDark ? darkToLightHandler : lightToDarkHandler;

  return (
    <header>
      <Navbar bg="primary" expand="lg" data-bs-theme="dark" className="m-auto">
        <Container>
          <Navbar.Brand>
            <p
              style={{ fontFamily: "cursive" }}
              className="navbar-brand fs-3 m-auto"
            >
              Thali
              <span
                style={{
                  color: "rgb(26, 201, 157)",
                }}
              >
                Point
              </span>
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                  className={activeClasses}
                  style={{ fontFamily: "cursive" }}
                  to={route.HOME}
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  className={activeClasses}
                  style={{ fontFamily: "cursive" }}
                  to={route.MENU}
                >
                  Menu
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to={route.SUPPORT}
                  style={{ fontFamily: "cursive" }}
                  className={activeClasses}
                >
                  Support
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to={route.CONTACT_US}
                  style={{ fontFamily: "cursive" }}
                  className={activeClasses}
                >
                  Contact Us
                </NavLink>
              </Nav.Link>
            </Nav>
            <div className="d-flex flex-wrap justify-content-center text-center">
              {!isAuth && (
                <>
                  <NavLink to={route.LOGIN}>
                    <Button className="me-2" variant="outline-warning">
                      LogIn
                    </Button>
                  </NavLink>
                  <NavLink to={route.SIGNUP}>
                    <Button className="me-2" variant="outline-warning">
                      SignUp
                    </Button>
                  </NavLink>
                  <NavLink className={activeClasses} to="/Cart">
                    <i className="bi bi-cart3 fs-3 text-white"></i>
                  </NavLink>
                  <h5 style={{ color: "white" }}>0</h5>
                </>
              )}

              {isAuth && (
                <>
                  <NavLink>
                    <Button
                      className="me-2"
                      variant="outline-warning"
                      onClick={logoutHandler}
                    >
                      LogOut
                    </Button>
                  </NavLink>
                  <Button className="me-2">
                    <i className="bi bi-person-fill fs-5"></i>
                    {userData.userName}
                  </Button>
                  <NavLink className={activeClasses} to="/Cart">
                    <i className="bi bi-cart3 fs-3 text-white"></i>
                  </NavLink>
                  <h5 style={{ color: "white" }}>{thali.length}</h5>
                </>
              )}
            </div>
            <Button className="ms-3" onClick={darkClickHandler}>
              <i className={iconClasses}></i>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default AppHeader;
