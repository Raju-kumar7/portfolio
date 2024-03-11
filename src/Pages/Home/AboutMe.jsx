import React from "react";

const AboutMe = () => {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img lg:w-[600px] lg:h-[650px]">
        <img src="./img/raju_nw.jpeg" alt="AboutMe" className="about--img rounded-md about--img" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className='section--title'>About</p> */}
          <h1 className="skills--section--heading">About me</h1>
          <p className="hero--section--description about--section--description text-xl">
            Hello, I'm Raju, a dedicated Full Stack Developer based in Delhi.
            With a passion for crafting innovative and efficient web solutions,
            I thrive on the challenges of both front-end and back-end
            development. My journey in the tech world began with a genuine
            curiosity for creating impactful digital experiences, and it has
            since evolved into a commitment to building robust and user-friendly
            applications.
          </p>
          <p className="hero--section--description about--section--description text-xl">
            I specialize in a variety of technologies, including HTML, CSS, and
            JavaScript for crafting seamless front-end experiences. On the
            back-end, I'm proficient in Node.js and have experience working with
            databases like MongoDB. My expertise extends to frameworks
            such as React and Express.js, allowing me to create dynamic and
            responsive web applications.
          </p>
          <p className="hero--section--description about--section--description text-xl">
            Feel free to connect with me; I'm excited about the possibilities
            that lie ahead in the ever-evolving world of technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
