import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section " id="mySkills">
      <div className="portfolio--container flex">
        {/* <p className="section--title">My Skills</p> */}
        <h2 className="skills--section--heading">My Skills</h2>
      </div>
      <p className="skills--details lg:text-xl">
        I specialize in full-stack web development, with expertise in MongoDB,
        Express.js, React.js, Node.js, Redux, and more. My skills encompass
        front-end technologies like HTML, CSS, and JavaScript, as well as
        libraries like Bootstrap and Tailwind. I'm proficient in authentication
        using JWT and have experience with Redux, Git, and asynchronous API
        requests with Axios.
      </p>
      <div className="skills--section--container mysection ">
        <div className="skills--section--card border mysection1 border-black ">
          <div className="skills--section--img">
            <img src="./img/product-chain-1.png" alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Web Stack</h3>
            <ul>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                HTML
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                CSS
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                JavaScript
              </span>
            </ul>
          </div>
        </div>

        {/* <div className="skills--section--container"> */}
        <div className="skills--section--card mysection1 border border-black w-[40rem] ">
          <div className="skills--section--img">
            <img src="./img/product-chain-1.png" alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Web Development</h3>
            <ul className="flex flex-wrap">
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                React Js
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                Redux
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                Node Js
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                JWT
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                Express Js
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                Axios
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                React routing
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                Bootstrap
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                Tailwind
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                MongoDB
              </span>
            </ul>
          </div>
        </div>
        {/* </div> */}

        {/* <div className="skills--section--container"> */}
        <div className="skills--section--card mysection1 border border-black w-96">
          <div className="skills--section--img">
            <img src="./img/product-chain-1.png" alt="Product Chain" />
          </div>
          <div className="skills--section--card--content">
            <h3 className="skills--section--title">Other Skills</h3>
            <ul className="flex flex-wrap">
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                Postman
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                REST API
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                JSON
              </span>
              <span className="skills--section--description border border-black mx-3 my-2 px-3 py-2 rounded-full bg-[#5e3bee] cursor-pointer">
                GitHub
              </span>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
