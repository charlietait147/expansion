"use client";
import { useState, ChangeEvent, FormEvent} from "react";
import axios, { AxiosResponse } from "axios";

interface Thesaurus {
  word: string;
  synonyms: string[];
}

const MainContent: React.FC = () => {
  const [selectedWord, setSelectedWord] = useState<Thesaurus | null>(null);
  const [word, setWord] = useState<string>("");
  const [wordError, setWordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChangeWord = (e: ChangeEvent<HTMLInputElement>) => {
    setWordError("");
    setWord(e.target.value);
  };

  const removeText = () => {
    setWord((prevWord) => prevWord.replace(/[a-zA-Z\s]/g, ''));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!word) {
      setWordError("Please enter a valid word");
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
      setApiError("There has been an error fetching data. Sorry!");
    }
  };
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
              className="w-max rounded-md border shadow-lg text-xs font-light py-1.5 pl-3 pr-10 focus:border-gray-400 outline-none lg:text-base lg:py-2 lg:pl-4 lg:pr-12"
              placeholder="Start typing any word"
              id="word"
              value={word}
              onChange={handleChangeWord}
            />
            <div>
              <svg onClick={removeText}
              className="w-5 absolute right-14 top-2 cursor-pointer hover:stroke-black lg:w-6 lg:top-2.5 lg:right-16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="grey"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <button className="ml-3 border rounded-md flex p-2 shadow-lg cursor-pointer hover:border-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="grey"
                className="w-4 hover:stroke-black lg:w-6"
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
            <div className="border-t-transparent border-solid animate-spin  rounded-full border-orange-500 border-4 h-16 w-16 md:h-24 md:w-24"></div>
          </div>
        ) : selectedWord ? (
          <div>
            <h2 className="text-lg text-primary font-medium inline-block md:text-2xl underline underline-offset-8">
              {selectedWord.word}
            </h2>{" "}
            <span className="text-title text-lg font-light inline-block md:text-2xl no-underline">
              - synonyms
            </span>
            {selectedWord.synonyms && selectedWord.synonyms.length > 0 ? (
               <div>
               <ul className="list-none flex flex-wrap grid-cols-2 gap-2 mt-4 md:mt-8 md:gap-4">
                 <li className="p-3 rounded-s-3xl shadow-md bg-title text-white md:p-4">
                   {selectedWord.synonyms[0]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md bg-title text-white md:p-4 ">
                   {selectedWord.synonyms[1]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md bg-title text-white md:p-4">
                   {selectedWord.synonyms[2]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md bg-tertiary md:p-4">
                   {selectedWord.synonyms[3]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md bg-tertiary md:p-4">
                   {selectedWord.synonyms[4]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md bg-tertiary md:p-4">
                   {selectedWord.synonyms[5]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md bg-tertiary md:p-4">
                   {selectedWord.synonyms[6]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md md:p-4">
                   {selectedWord.synonyms[7]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md md:p-4">
                   {selectedWord.synonyms[8]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md md:p-4">
                   {selectedWord.synonyms[9]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md md:p-4">
                   {selectedWord.synonyms[10]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md md:p-4">
                   {selectedWord.synonyms[11]}
                 </li>
                 <li className="p-3 rounded-s-3xl shadow-md md:p-4">
                   {selectedWord.synonyms[12]}
                 </li>
               </ul>
             </div>
            ) : (
              <p className="text-sm font-light text-primary mt-4 lg:text-base"> No data is available for this word. Try another one!</p>
            )}
          </div>
        ) : apiError ? (
          <p className="text-sm font-light text-primary mt-4 lg:text-base">{apiError}</p>
        ) : (
          <p></p>
        )}
      </section>
    </main>
  );
};

export default MainContent;
