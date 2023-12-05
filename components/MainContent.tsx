"use client";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";

interface Thesaurus {
  word: string;
  synonyms: string[];
}

const MainContent: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<Thesaurus | null>(null);
  const [word, setWord] = useState("");
  const [wordError, setWordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  const handleChangeWord = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    setWordError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!word) {
      setWordError("Please enter a valid word");
      // setIsLoading(false);
      return;
    }

    setIsLoading(true);

    try {
      const response: AxiosResponse = await axios.get<Thesaurus>(
        `https://api.api-ninjas.com/v1/thesaurus?word=${word}`,
        {
          headers: {
            "X-Api-Key": "52BUJsSriVSmtPiBYuLDcA==1a7LRurgWFOghhzN",
          },
        }
      );
      console.log(response.data);
      setSelectedWord(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setApiError("No Data Available ...");
    }
  };

  // axios
  //   .get<Thesaurus>(`https://api.api-ninjas.com/v1/thesaurus?word=${word}`, {
  //     headers: {
  //       "X-Api-Key": "52BUJsSriVSmtPiBYuLDcA==1a7LRurgWFOghhzN",
  //     },
  //   })
  //   .then((res) => {
  //     // const selectedWord: Thesaurus = res.data;
  //     // console.log(selectedWord);
  //    setSelectedWord(res.data)
  //   })
  //   .catch((err) => console.log(err));
  // };
  return (
    <main>
      <section className="px-4 pb-10 relative sm:px-8 lg:max-w-screen-lg m-auto border-b border-gray-200">
        <div className="relative flex mb-2">
          <div className="circle-lg"></div>
          <div className="circle-sm"></div>
        </div>
        <h2 className="text-primary text-4xl font-light leading-tight inline lg:text-6xl">
          Expand your vocabulary
        </h2>
        <p className="text-secondary text-base font-light pt-6 max-w-xs lg:pt-8 lg:text-xl lg:max-w-lg ">
          {" "}
          Use the Thesaurus API to vary and improve your language.
        </p>
        <div>
          <form
            onSubmit={handleSubmit}
            className="mt-4 max-w-fit flex relative"
          >
            <input
              className="w-max rounded-md border shadow-lg text-xs font-light py-1.5 pl-3 pr-10 focus:border-gray-400 outline-none"
              placeholder="Start typing any word"
              id="word"
              onChange={handleChangeWord}
              value={word}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="grey"
              className="w-5 absolute right-14 top-2 cursor-pointer hover:stroke-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <button className="ml-3 border rounded-md flex p-2 shadow-lg cursor-pointer hover:border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="grey"
                className="w-4 hover:stroke-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </form>
          {wordError && (
            <p className="text-red-500 text-xs mt-2 ml-0.5">{wordError}</p>
          )}
        </div>
      </section>
      <section className="px-4 pt-3 relative sm:px-8 lg:max-w-screen-lg m-auto">
        {isLoading ? (
          <div className="absolute top-0 transform translate-x-1/2 translate-y-1/2 ">
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-orange-500 border-4 h-24 w-24"></div>
          </div>
        ) : selectedWord ? (
          <div>
            <h2 className="text-lg text-primary inline-block lg:text-xl underline underline-offset-4">
              {selectedWord.word}
            </h2>{" "}
            <span className="text-title text-lg font-light inline-block lg:text-xl no-underline">
              - synonyms
            </span>
            <div>
              <ul className="list-none flex flex-wrap grid-cols-2 gap-2 mt-4">
                <li className="p-4 rounded-s-3xl shadow-md bg-title text-white">
                  {selectedWord.synonyms[0]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md bg-title text-white">
                  {selectedWord.synonyms[1]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md bg-title text-white">
                  {selectedWord.synonyms[2]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md bg-tertiary">
                  {selectedWord.synonyms[3]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md bg-tertiary">
                  {selectedWord.synonyms[4]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md bg-tertiary">
                  {selectedWord.synonyms[5]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md bg-tertiary">
                  {selectedWord.synonyms[6]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md">
                  {selectedWord.synonyms[7]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md">
                  {selectedWord.synonyms[8]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md">
                  {selectedWord.synonyms[9]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md">
                  {selectedWord.synonyms[10]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md">
                  {selectedWord.synonyms[11]}
                </li>
                <li className="p-4 rounded-s-3xl shadow-md">
                  {selectedWord.synonyms[12]}
                </li>
              </ul>
            </div>
          </div>
        ) : apiError ? (
          <p className="text-lg text-primary lg:text-xl">{apiError}</p>
        ) : (
          <p></p>
        )}
      </section>
    </main>
  );
};

export default MainContent;
