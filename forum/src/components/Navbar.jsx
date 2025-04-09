// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { auth } from "../Firebase/Firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/Features" },
    { name: "Upcomings", path: "/upcomings" },
    { name: "Contact", path: "/Contactus" },
    { name: "About", path: "/aboutus" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          VARTA LAAB
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `text-lg font-medium px-3 py-1 rounded-full transition ${
                  isActive ? "bg-black text-white" : "text-black  hover:bg-blue-500 hover:text-white"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
          {user && (
            <>
              <NavLink
                to="/workspaces"
                className="text-sm text-gray-700 font-medium hover:bg-blue-500 hover:text-white  px-3 py-1 rounded-full"
              >
                Workspaces
              </NavLink>
              <NavLink
                to="/voiceofthepeople"
                className="text-sm text-gray-700 font-medium hover:bg-blue-500 hover:text-white px-3 py-1 rounded-full"
              >
                Voice of the People
              </NavLink>
              <NavLink to="/profile" className="text-sm hover:bg-blue-500 hover:text-white font-medium">
                Profile
              </NavLink>
              <button
                onClick={handleSignOut}
                className="text-sm text-red-500 font-medium"
              >
                Logout
              </button>
            </>
          )}
          {!user && (
            <>
              <Link to="/login" className="text-sm text-blue-600 font-medium">
                Login
              </Link>
              <Link to="/signup" className="text-sm text-black font-medium">
                Sign Up
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-md text-black  hover:bg-blue-500 hover:text-white"
            >
              {name}
            </NavLink>
          ))}
          {user ? (
            <>
              <NavLink
                to="/workspaces"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Workspaces
              </NavLink>
              <NavLink
                to="/voiceofthepeople"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Voice of the People
              </NavLink>
              <NavLink
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-blue-600"
              >
                Profile
              </NavLink>
              <button
                onClick={() => {
                  handleSignOut();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-500"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-blue-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-sm text-black"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
