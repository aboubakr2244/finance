import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem]  px-4 bg-white">
      <div className="max-w-[1240px] grid mx-auto md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl p-4 my-4 flex flex-col rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md w-[200px] font-medium mx-auto my-6 py-3 text-black hover:bg-[#009c6b] hover:text-white duration-300 ease-in-out">
            Start Trial
          </button>
        </div>
        <div className="w-full bg-gray-100 shadow-xl p-4 flex flex-col md:my-0  my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Partnership</h2>
          <p className="text-center text-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-zinc-900 text-[#00df9a] rounded-md w-[200px] font-medium mx-auto my-6 py-3 hover:bg-zinc-700 hover:text-white duration-300 ease-in-out">
            Start Trial
          </button>
        </div>
        <div className="w-full shadow-xl p-4 my-4 flex flex-col rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Group Account</h2>
          <p className="text-center text-4xl font-bold">$299</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8">1 Granted User</p>
            <p className="py-2 border-b mx-8">Send up to 2 GB</p>
          </div>
          <button className="bg-[#00df9a] rounded-md w-[200px] font-medium mx-auto my-6 py-3 text-black hover:bg-[#009c6b] hover:text-white duration-300 ease-in-out">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
