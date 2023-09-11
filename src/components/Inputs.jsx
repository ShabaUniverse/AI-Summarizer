import React, { useEffect, useState } from "react";
import { FiLink2 } from "react-icons/fi";
import axios from "axios";
import Typewriter from "typewriter-effect";

const Inputs = () => {
  const [link, setLink] = useState("");
  const [finalUrl, setFinalUrl] = useState("");
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setFinalUrl(link);
  };

  useEffect(() => {
    const fetchArticle = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          "https://article-extractor-and-summarizer.p.rapidapi.com/summarize",
          {
            params: { url: `${finalUrl}`, length: 1 },
            headers: {
              "X-RapidAPI-Key":
                "932a8048edmsh4ce038164cc43e2p13bd5cjsna81bf699f9d3",
              "X-RapidAPI-Host":
                "article-extractor-and-summarizer.p.rapidapi.com",
            },
          },
        );
        console.log(response);
        setArticle(response.data.summary);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (finalUrl) {
      fetchArticle();
    }
  }, [finalUrl]);

  return (
    <div className=" max-w-3xl mx-auto mt-10">
      <form className="box relative flex items-center" onSubmit={submitHandler}>
        <FiLink2 className=" absolute left-5" />
        <input
          className=" outline-none w-full py-2 pl-10 mx-2 rounded-lg border border-gray-300"
          type="url"
          placeholder="Pass URL..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button
          type="sumbit"
          className=" absolute right-4 text-2xl px-3 semibold bg-gray-100 rounded-lg">
          &#10550;
        </button>
      </form>

      {isLoading === true && (
        <div className=" mx-2 mt-10 text-orange-500 text-center">
          
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("On it, please chill out!")
                .pauseFor(1500)
                .deleteAll()
                .start();
            }}
          />
        </div>
      )}

      {article && (
        <div className="result mt-10 mx-2">
          <h1 className=" text-orange-500 font-bold">Article Summary</h1>
          <p>{article}</p>
        </div>
      )}
    </div>
  );
};

export default Inputs;
