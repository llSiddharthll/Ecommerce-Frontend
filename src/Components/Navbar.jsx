// AppNavbar.js
import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "./authService";

export default function AppNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const user = isAuthenticated();
  console.log("user", user);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <Navbar
      fluid
      rounded
      className="sticky top-0 z-20 border-[#00000010] border-2 rounded-t-lg"
    >
      <Navbar.Brand href="/">
        <img
          src="/elogo.jpg"
          className="mr-3 h-6 sm:h-9 rounded-lg"
          alt="Flowbite React Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          My Website
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{`${user.firstName} ${user.lastName}`}</span>
              <span className="block truncate text-sm font-medium">
                {user.email}
              </span>
            </Dropdown.Header>
            <Dropdown.Item onClick={() => navigate("/dashboard")}>
              Dashboard
            </Dropdown.Item>
            <Dropdown.Item onClick={() => navigate("/settings")}>
              Settings
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={handleLogout}>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <div className="flex items-center">
            <Link
              to="/login"
              className="text-md font-semibold text-blue-600 dark:text-blue-500 mr-4"
            >
              Login
            </Link>
            <Link
              to="/"
              className="text-md py-1 px-4 rounded-md font-semibold text-white bg-blue-600 dark:text-white dark:bg-blue-500"
            >
              Signup
            </Link>
          </div> 
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="">
        <Navbar.Link
          className="text-md font-semibold"
          as={Link}
          to="/"
          active={location.pathname === "/"}
        >
          Home
        </Navbar.Link>
        <Navbar.Link
          className="text-md font-semibold"
          as={Link}
          to="/products"
          active={location.pathname === "/products"}
        >
          Products
        </Navbar.Link>
        <Navbar.Link
          className="text-md font-semibold"
          as={Link}
          to="/about"
          active={location.pathname === "/about"}
        >
          About Us
        </Navbar.Link>
        <Navbar.Link
          className="text-md font-semibold"
          as={Link}
          to="/contact"
          active={location.pathname === "/contact"}
        >
          Contact Us
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
