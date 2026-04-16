"use client";

import { useEffect } from "react";
import Link from "next/link";
import { FaHome, FaInfoCircle, FaBriefcase, FaUsers } from "react-icons/fa";

export default function Navbar() {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#2F80ED" }}
    >
      <div className="container">

        {/* Logo */}
        <Link href="/" className="navbar-brand fw-bold text-white">
          Talent-Match
        </Link>

        {/* 🔥 Hamburger Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* 🔽 Collapsible Menu */}
        <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarContent">

          {/* Center Menu */}
          <div className="navbar-nav mx-auto text-center">

            <Link href="/" className="nav-link d-flex align-items-center justify-content-center gap-2 text-white">
              <FaHome size={22} /> Home
            </Link>

            <Link href="/about" className="nav-link d-flex align-items-center justify-content-center gap-2 text-white">
              <FaInfoCircle size={18} /> About
            </Link>

            <Link href="/post-job" className="nav-link d-flex align-items-center justify-content-center gap-2 text-white">
              <FaBriefcase size={18} /> Post Job
            </Link>

          </div>

          {/* Right Button */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <Link
              href="/join"
              className="btn btn-outline-light rounded-pill px-4 d-flex align-items-center justify-content-center gap-2 w-100 w-lg-auto"
            >
              <FaUsers size={18} /> Join-Us
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
}