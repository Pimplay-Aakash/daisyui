import React from "react";
import CardCom from "./components/card";
import CardTwo from "./components/Card2";
import Carousel from "./components/ImgCarosal";
// import cardCom from "./components/card";
// import ExampleSection from "./HomeSection/page";
// cardCom
// CardCom

const Home = () => {
  return (
    <>
      <div
        className="hero h-[92vh]"
        style={{
          backgroundImage:
            "url(https://raw.githubusercontent.com/saadeghi/files/main/daisyui/presentation/dark-theme-wide.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-bold ">Welcome To Daisy UI</h1>
            <p className="mb-5">
            Daisy UI adds class names to Tailwind CSS for various UI elements, such as buttons, cards, toggles, and more.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <Carousel/>
      {/* <ExampleSection/> */}
      <div className="flex justify-between items-center flex-wrap m-4">
        <CardCom />
        <CardCom />
        <CardCom />

        <CardTwo />
        <CardTwo />
        <CardTwo />
        <CardTwo />
        <CardTwo />
        <CardTwo />
      </div>
    </>
  );
};

export default Home;
