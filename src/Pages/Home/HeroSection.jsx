import React from "react";

const HeroSection = () => {
  const downloadPDF = () => {
    const pdfFilePath = './img/RAJU.pdf';
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Raju</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. My journey in software development began with a curiosity to build things from scratch, and it has evolved into a deep-seated commitment to creating robust and scalable web applications.
          </p>
        </div>
        <button className="btn btn-primary" onClick={downloadPDF}>Download Resume</button>
      </div>
      <div className="hero--section--img lg:w-[600px] lg:h-[650px]">
        <img src="./img/rajuk.jpeg" alt="Hero Section" className="rounded-md" />
      </div>
    </section>
  );
};

export default HeroSection;
