function MainContent() {
  return (
    <main className="px-4 py-10 sm:px-8 lg:max-w-screen-lg m-auto border-b border-gray-200">
      <h2 className="text-primary text-4xl font-light leading-tight lg:text-6xl ">
        Expand your vocabulary
      </h2>
      <p className="text-secondary text-base font-light pt-6 max-w-xs lg:pt-8 lg:text-xl lg:max-w-lg ">
        {" "}
        Use the Thesaurus API to vary and improve your language.
      </p>
      <div>
        <form action="submit" className="mt-4 max-w-fit flex relative">
          <input
            className="w-max rounded-md border shadow-lg text-xs font-light py-1.5 pl-3 pr-10 focus:border-gray-400 outline-none"
            placeholder="Start typing any word"
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
      </div>
    </main>
  );
}

export default MainContent;
