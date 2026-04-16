"use client";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    const jobs = [
        {
            title: "Full Stack Engineer",
            company: "GrowthX",
            location: "Remote",
            img: "/job1.svg",
        },
        {
            title: "Graphic Designer",
            company: "Design Pro",
            location: "Delhi",
            img: "/job2.svg",
        },
        {
            title: "Frontend Developer",
            company: "Tech Corp",
            location: "Bangalore",
            img: "/job3.svg",
        },
        {
            title: "Tuition Teacher",
            company: "Edu World",
            location: "Hyderabad",
            img: "/job4.svg",
        },
    ];

    const roles = [
        {
            icon: "bi-code-slash",
            title: "Development & IT",
        },
        {
            icon: "bi-pie-chart",
            title: "Design & Creative",
        },
        {
            icon: "bi-display",
            title: "AI Services",
        },
        {
            icon: "bi-people",
            title: "Sales & Marketing",
        },
        {
            icon: "bi-person-workspace",
            title: "Admin & Support",
        },
        {
            icon: "bi-bank",
            title: "Finance & Accounting",
        },
        {
            icon: "bi-people-fill",
            title: "HR & Training",
        },
        {
            icon: "bi-person-plus",
            title: "Engineering & Architecture",
        },
    ];
    const job = [
        {
            category: "Software",
            rating: "4.7",
            title: "Full Stack Developer",
            company: "Google",
            location: "Bangalore, India",
            salary: "₹12 LPA",
            skills: ["React", "Node.js", "MongoDB"],
        },
        {
            category: "Software",
            rating: "4.8",
            title: "Frontend Developer",
            company: "Microsoft",
            location: "Hyderabad, India",
            salary: "₹10 LPA",
            skills: ["Next.js", "Bootstrap", "JavaScript"],
        },
        {
            category: "Software",
            rating: "4.6",
            title: "Backend Developer",
            company: "Amazon",
            location: "Remote",
            salary: "₹15 LPA",
            skills: ["Java", "Spring Boot", "SQL"],
        },
    ];

    return (
        <div className="bg-light min-vh-100">
            <div style={{
                backgroundImage: "url('/jobs-hero.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}>
                {/* Search Bar */}
                <div className="container py-5 text-center">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="input-group border border-primary rounded-pill overflow-hidden shadow-sm">
                                <select className="form-select border-0">
                                    <option>Tittle</option>
                                </select>
                                <select className="form-select border-0">
                                    <option>Location</option>
                                </select>
                                <button className="btn btn-primary px-4">
                                    <i className="bi bi-search fs-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Jobs Section */}
                <div className="container pb-5">
                    <h5 className="mb-4 fw-semibold text-dark">Jobs Hiring Now</h5>

                    <div className="row">
                        {jobs.map((job, index) => (
                            <div className="col-md-3 mb-4" key={index}>
                                <div
                                    className="card border-0 rounded-4 text-center p-4 h-100 shadow-lg"
                                    style={{
                                        background: "rgba(255,255,255,0.15)",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        border: "1px solid rgba(255,255,255,0.2)",
                                    }}
                                >
                                    <Image
                                        src={job.img}
                                        alt={job.title}
                                        width={60}
                                        height={60}
                                        className="mx-auto mb-3"
                                    />

                                    <h6 className="fw-bold text-dark">{job.title}</h6>
                                    <small className="text-dark d-block">{job.company}</small>
                                    <small className="text-dark mb-3">{job.location}</small>

                                    <button className="btn btn-primary rounded-pill btn-sm mt-3 px-4">
                                        Apply now
                                        <i className="bi bi-arrow-right-circle ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Banner Section */}
            <div className="py-5" style={{ background: "#8bb6f8" }}>
                <div className="container">
                    <div className="bg-white rounded p-5 shadow-sm">
                        <div className="row align-items-center">

                            <div className="col-md-6">
                                <h1 className="fw-bold">Let the jobs find you</h1>
                                <div
                                    className="mb-3"
                                    style={{
                                        width: "200px",
                                        height: "5px",
                                        background: "#4b3bbd",
                                    }}
                                ></div>
                                <p className="text-muted fs-5">
                                    Create your free profile to get interview invites and jobs
                                    that work for you.
                                </p>
                                <button className="btn btn-primary rounded-pill px-4 mt-3">
                                    Get hired
                                </button>
                            </div>

                            <div className="col-md-6 text-center">
                                <Image
                                    src="/job5.svg"
                                    alt="Banner"
                                    width={300}
                                    height={200}
                                    className="img-fluid"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <section className="py-5 bg-light">
                <div className="container">
                    {/* Heading */}
                    <h2 className="fw-bold mb-2">Discover jobs across popular roles</h2>
                    <p className="text-muted mb-5">
                        Select a role and we’ll show you relevant jobs for it!
                    </p>

                    {/* Cards */}
                    <div className="row g-4">
                        {roles.map((role, index) => (
                            <div className="col-md-3 col-sm-6" key={index}>
                                <div
                                    className="card border-0 text-center py-3 rounded-5 shadow-sm h-100"
                                    style={{
                                        minHeight: "100px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <div className="card-body d-flex flex-column justify-content-center">
                                        <i
                                            className={`bi ${role.icon}`}
                                            style={{
                                                fontSize: "40px",
                                                color: "#7c5cff",
                                            }}
                                        ></i>
                                        <h6 className="fw-semibold mt-3 mb-0">{role.title}</h6>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section>
                <div className="container py-5 ">
                    <div className="row g-4">
                        {job.map((job, index) => (
                            <div className="col-12 col-sm-6 col-lg-4" key={index}>
                                <div className="card border-0 shadow rounded-4 p-4 h-100"
                                    style={{
                                        backgroundColor: "#ffffff",
                                        backgroundImage: `
                                        radial-gradient(circle at top right, #d9ecff 0%, transparent 35%),
                                         linear-gradient(to bottom, #eef6ff 0%, #ffffff 30%)
                                           `,
                                    }}>

                                    {/* Top Header */}

                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <small className="text-muted">{job.category}</small>
                                        <span className="badge bg-warning text-dark rounded-pill">
                                            ⭐ {job.rating}
                                        </span>
                                    </div>


                                    {/* Job Title */}
                                    <h5 className="fw-bold text-primary mb-3">{job.title}</h5>

                                    {/* Company */}
                                    <p className="text-muted small mb-2">
                                        <i className="bi bi-building me-2 text-primary"></i>
                                        {job.company}
                                    </p>

                                    {/* Location */}
                                    <p className="text-muted small mb-2">
                                        <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                                        {job.location}
                                    </p>

                                    {/* Salary */}
                                    <p className="text-muted small mb-3">
                                        <i className="bi bi-cash-stack me-2 text-primary"></i>
                                        {job.salary}
                                    </p>

                                    {/* Skills */}
                                    <div className="mb-4">
                                        {job.skills.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="badge bg-light text-primary border me-2 mb-2"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Buttons */}
                                    <div className="d-flex flex-column flex-sm-row gap-2 mt-auto">
                                        <button className="btn btn-outline-primary rounded-pill w-100">
                                            Save
                                        </button>
                                        <button className="btn btn-primary rounded-pill w-100">
                                            Apply Now →
                                        </button>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
}