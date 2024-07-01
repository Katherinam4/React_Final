import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Navbar.scss";
import useDarkMode from "../hooks/useDarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState("My Porsche");
  const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser?.username && isAuthenticated) {
      setUsername(storedUser.username);
    }

    const handleStorageChange = () => {
      const updatedUser = JSON.parse(localStorage.getItem("user"));
      if (updatedUser?.username && isAuthenticated) {
        setUsername(updatedUser.username);
      } else {
        setUsername("My Porsche");
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [isAuthenticated]);

  return (
    <nav>
      <div
        className={`navigations ${isOpen ? "open" : ""}`}
        style={{
          backgroundColor: darkMode && isOpen ? "black" : "white",
        }}
      >
        <div className="nav-item name">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="user"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <h3>{username}</h3>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
            />
          </svg>
          <h3>Find a Dealer</h3>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill=""
            viewBox="0 0 256 256"
          >
            <path d="M114.34,154.34l96-96a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32ZM128,88a63.9,63.9,0,0,1,20.44,3.33,8,8,0,1,0,5.11-15.16A80,80,0,0,0,48.49,160.88,8,8,0,0,0,56.43,168c.29,0,.59,0,.89-.05a8,8,0,0,0,7.07-8.83A64.92,64.92,0,0,1,64,152,64.07,64.07,0,0,1,128,88Zm99.74,13a8,8,0,0,0-14.24,7.3,96.27,96.27,0,0,1,5,75.71l-181.1-.07A96.24,96.24,0,0,1,128,56h.88a95,95,0,0,1,42.82,10.5A8,8,0,1,0,179,52.27a112,112,0,0,0-156.66,137A16.07,16.07,0,0,0,37.46,200H218.53a16,16,0,0,0,15.11-10.71,112.35,112.35,0,0,0-5.9-88.3Z"></path>
          </svg>
          <h3>Models</h3>
        </div>
      </div>

      <div className="logo">
        <Link to={"/"}>
          <img
            src="https://i.pinimg.com/originals/9b/f2/2d/9bf22d212a641ade7f71f6b9fbd11c88.png"
            alt="logo"
          />
        </Link>
      </div>

      <div
        className={`navigations ${isOpen ? "open2" : ""}`}
        style={{
          backgroundColor: darkMode && isOpen ? "black" : "white",
        }}
      >
        <div className="nav-item srch">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill=""
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
          <h3>Search</h3>
        </div>
        <div className="nav-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill=""
            viewBox="0 0 256 256"
          >
            <path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V72H40V56Zm0,144H40V88H216V200Zm-40-88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z"></path>
          </svg>
          <h3>Shop</h3>
        </div>
        <div className="nav-item">
          <button
            className="dark-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
          </button>
        </div>
      </div>

      <div className="burger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
