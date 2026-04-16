"use client";

import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-light min-vh-100">
      {/* Top Bar */}
      <div className=" text-end py-2 px-4">
        <small className="fw-semibold text-dark">
          You have no account?{" "}
          <Link href="/signup" className="text-deep-blue text-decoration-none">
            SignUp
          </Link>
        </small>
      </div>

      {/* Login Section */}
      <div className="container d-flex justify-content-center align-items-center py-4">
        <div className="bg-primary p-5 rounded shadow" style={{ maxWidth: "1000px", width: "100%" }}>
          <div className="row bg-white rounded-5 p-4 align-items-center">

            {/* Left Image */}
            <div className="col-md-6 text-center mb-4 mb-md-0">
              <Image
                src="/login-hero.svg"
                alt="Login"
                width={400}
                height={350}
                className="img-fluid"
              />
            </div>

            {/* Right Form */}
            <div className="col-md-6">
              <h2 className="text-center text-primary fw-bold mb-4">LogIn</h2>

              <form>
                <div className="mb-3">
                  <label className="form-label small">Username</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small">Email</label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small">Password</label>
                  <input
                    type="password"
                    className="form-control rounded-pill"
                    placeholder="Password"
                  />
                </div>

                <button className="btn btn-primary w-100 rounded-pill mb-3">
                  Login
                </button>

                <button
                  type="button"
                  className="btn btn-light w-100 rounded-pill border"
                >
                  <i className="bi bi-google text-danger me-2"></i>
                  Continue with Google
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
}