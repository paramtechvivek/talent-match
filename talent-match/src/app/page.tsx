import Navbar from "@/components/Header/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section
        className="py-5 text-center"
        style={{ backgroundColor: "#f5f7fa", minHeight: "80vh" }}
      >
        <div className="container mt-2">

          {/* Heading */}
          <h1 className="fw-semibold mb-3 fs-2 fade-up">
            Welcome to Talent Match!
          </h1>

          <h3 className="fw-semibold mb-5 fade-up delay-1">
            Where talent meets the opportunities.
          </h3>

          {/* Subtitle */}
          <p className="text-muted mb-3 mt-5 fs-5">
            Find your dream jobs now, according to your skills and location
          </p>

          {/* Search Box */}
          <div
            className="mx-auto p-3 rounded"
            style={{
              maxWidth: "700px",
              border: "2px solid #2F80ED",
              backgroundColor: "#fff",
            }}
          >
            <div className="row g-2 align-items-center">

              {/* Input 1 */}
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your skills or job title"
                />
              </div>
              {/* Input 2 */}
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter location"
                />
              </div>
              {/* Button */}
              <div className="col-md-4">
                <button className="btn btn-primary w-75">
                  Search
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-4">
        <div className="container">
          <div className="row align-items-center">

            {/* Left Content */}
            <div className="col-12 col-lg-6 text-center text-lg-start  ">
              <h1 className="fw-semibold  text-dark " >
                Unlock your Doors Towards 
                Corporate World by Joining us
              </h1>

              <button className="btn btn-primary mt-4 px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2">
                Join Us →
              </button>
            </div>
            {/* Right Image */}
            <div className="col-12 col-lg-6 text-end mb-5 ">
              <Image
                src="/home-hero.svg"
                alt="Hero"
                width={400}
                height={400}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
