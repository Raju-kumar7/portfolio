import React, { useEffect, useState } from "react";
import data from "../../data/index.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "./Footer";

const PortfolioDetail = ({ match }) => {
  const { id } = useParams();
  const [item, setItem] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const selectedItem = data.portfolio.find((item) => item.id === id);
    setItem(selectedItem);
  }, [id]);
  console.log("item", item);

  const goToHome = () => {
    navigate("/");
  };

  // const item = data.portfolio.find((p) => p.id == id);

  return (
    <div className="mydetail--section border w-full h-16 bg-[#f5fcff] mt-20 ">
      <div className=" detail--section--title flex justify-between mx-60">
        <h3 className="detail--title text-2xl my-3">{item.title}</h3>
        <h5 className="text-md my-4">
          <span
            className="underline text-blue-600 hover:font-semibold cursor-pointer"
            onClick={goToHome}
          >
            Home/
          </span>
          <span>{item.title}</span>
        </h5>
      </div>

      <div className="detail--section--img--info mt-20 ml-20 flex justify-between mr-20">
        <div className="detail--section--img w-[55%] h-[50%]">
          <img
            className="rounded-lg border border-black"
            src={`../${item.image}`}
            alt="image"
          />
        </div>
        <div className="shadow-lg">
          <h3 className="text-2xl text-center my-3 border-2 border-b-2 py-3">
            Project information
          </h3>
          <p className="text-md px-2 py-2 font-semibold">
            Category: Web Development
          </p>
          <p className="text-md px-2 py-2 font-semibold">
            Language: HTML,CSS,JavaScript,React
          </p>
          <span className="flex mx-2">
            <Link
              className="btn-primary px-3 py-2 rounded-2xl mr-4"
              to={item.url}
              target="_blank"
            >
              GitHub Link
            </Link>
            <br />
            {item.live ? (
              <Link
                className="btn-primary px-3 py-2 rounded-2xl"
                to={item.live}
                target="_blank"
              >
                Demo
              </Link>
            ) : (
              <p></p>
            )}
          </span>
        </div>
      </div>

      <div className="detail--section--project bottom--detail mt-10 mx-20">
        <h2 className="mx-3 my-6">Project Detail</h2>
        <p className="detail--section--desc w-[60%] leading-7">
          {item.description}

          <p className="font-bold">Key Features:</p>
          <ul className="list-disc ml-10">
            <li>{item.key1}</li>
            <li>{item.key2}</li>
          </ul>
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default PortfolioDetail;
