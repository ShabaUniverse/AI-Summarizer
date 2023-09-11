import React from "react";

const Header = () => {
  return (
    <div className="header max-w-5xl flex justify-between items-center py-5 px-2 lg:px-0 mx-auto">
      <div className="logo">
        <h1 className=" font-bold text-xl text-orange-400">
          AI<span className="text-black">SUMMARIZE</span>
        </h1>
      </div>

      <div className="git-link">
        <button className=" text-white bg-black px-3 py-1 rounded-3xl hover:text-orange-400"
        type="button"
        onClick={() => window.open("https://github.com/ShabaUniverse")}>
          GitHub
        </button>
      </div>
    </div>
  );
};

export default Header;
