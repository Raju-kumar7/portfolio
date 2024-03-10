import React from "react";
import data from "../../data/index.json";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'instant' // Optional: for smooth scrolling
    });
  };

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          {/* <p className="sub--title">Recent Projects</p> */}
          <h2 className="section--heading">My Portfolio</h2>
        </div>
        <div>
          <button className="btn btn-github">
            <GitHubIcon />
            <Link to="https://github.com/Raju-kumar7" target="_blank">
              Visit My GitHub
            </Link>
          </button>
        </div>
      </div>
      <p className="portofolio--details lg:text-lg ">
        In the digital realm, I'm known for my knack for MongoDB, Express,
        React, Node.js (MERN), and a whole bunch of other tech buzzwords. But
        it's not just about the tools; it's about what I can build with them.
        I proficiency shines through creations like a dynamic Blog App, a
        user-friendly YouTube clone, an intuitive Weather App, and a
        feature-rich Note App implementing CRUD operations. Additionally, I
        has crafted a News App, seamlessly integrating API calls for real-time
        updates. With a passion for innovation, I excels in leveraging React
        to deliver engaging and functional applications. A dedicated
        problem-solver, My projects reflect a blend of creativity, technical
        acumen, and a commitment to enhancing user experiences in the digital
        landscape.
      </p>
      <div className="portfolio--section--container" onClick={scrollToTop}>
        {data.portfolio.map((item, index) => (
          <Link to={`/details/${item.id}`} className=" ">
            <div
              key={index}
              className="portfolio--section--card border border-black "
            >
              <div className="portfolio--section--img">
                <img src={item.image} alt="Placeholder" />
              </div>
              <div className="portfolio--section--card--content">
                <div>
                  <h3 className="portfolio--section--title font-bold underline mb-5">
                    {item.title}
                  </h3>
                  <p className="text-md">
                    {item.description.substring(0, 250)}...
                  </p>
                </div>
                <Link
                  to={item.url}
                  target="_blank"
                  className="text-sm portfolio--link"
                >
                  {item.link}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 19"
                    fill="none"
                  >
                    <path
                      d="M4.66667 1.66675H18V15.0001M18 1.66675L2 17.6667L18 1.66675Z"
                      stroke="currentColor"
                      stroke-width="2.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MyPortfolio;
