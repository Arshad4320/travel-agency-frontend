"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { setUser } from "@/app/redux/features/auth/authSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        dispatch(
          setUser({
            id: decoded.id,
            email: decoded.email,
            role: decoded.role,
            name: decoded.name,
          })
        );
      } catch (err) {
        console.error("Invalid token", err);
        Cookies.remove("token");
        dispatch(setUser(null));
      }
    } else {
      dispatch(setUser(null));
    }
  }, [dispatch]);

  const handleLogout = () => {
    Cookies.remove("token");
    dispatch(setUser(null));
    router.push("/auth/login");
  };

  const links = [
    { name: "Bus", href: "/" },
    { name: "Train", href: "/pages/train" },
    { name: "Ship", href: "/pages/ship" },
    { name: "Airplane", href: "/pages/airplane" },
  ];

  const isActive = (href) =>
    pathname === href || (href === "/bus" && pathname === "/");

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-500">
          Travel Agency
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative font-medium px-3 py-2 transition-colors ${
                isActive(link.href)
                  ? "text-blue-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {!user ? (
            <Link
              href="/auth/login"
              className={`relative font-medium px-3 py-2 transition-colors ${
                isActive("/auth/login")
                  ? "text-blue-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                  : "text-gray-700 hover:text-blue-700"
              }`}
            >
              Login
            </Link>
          ) : (
            <>
              <Link
                href="/dashboard"
                className={`relative font-medium px-3 py-2 transition-colors ${
                  isActive("/dashboard")
                    ? "text-blue-700 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-blue-600"
                    : "text-gray-700 hover:text-blue-700"
                }`}
              >
                Dashboard
              </Link>
              <span className="font-medium text-gray-800">{user.name}</span>
              <button
                onClick={handleLogout}
                className="px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-5"
            >
              <div className="flex flex-col gap-3">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-base font-medium px-2 py-2 transition-colors ${
                      isActive(link.href)
                        ? "text-blue-700"
                        : "text-gray-700 hover:text-blue-700"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {!user ? (
                  <Link
                    href="/auth/login"
                    className="text-base font-medium px-2 py-2 transition-colors text-gray-700 hover:text-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                ) : (
                  <>
                    <Link
                      href="/dashboard"
                      className="text-base font-medium px-2 py-2 transition-colors text-gray-700 hover:text-blue-700"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <span className="text-gray-800 px-2">{user.name}</span>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                      }}
                      className="px-3 py-2 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      Logout
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
