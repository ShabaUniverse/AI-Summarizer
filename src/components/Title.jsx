import React from "react";

const Title = () => {
  return (
    <div className="title max-w-5xl mx-auto px-2 lg:px-0">
      <div className="top text-center">
        <h2 className=" text-4xl font-bold">Summarize</h2>
        <h2 className=" text-4xl font-bold">Articles with</h2>
        <h2 className=" text-4xl font-bold text-orange-400">OpenAI GPT-4</h2>
      </div>

      <div className="bottom text-center">
        <p className=" max-w-3xl mx-auto">
          Simplify your reading with Summize, an open-source article summarizer
          that transforms lengthly articles into clear and consice summaries.
        </p>
      </div>
    </div>
  );
};

export default Title;
