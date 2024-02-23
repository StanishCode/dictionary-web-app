import { useState, useRef } from "react";
import SettingsMenu from "./components/SettingsMenu";
import DefinitionResult from "./components/DefinitionResult";

function App() {
  const [results, setResults] = useState([]);
  const search = useRef();

  async function submitRequestHandler(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${search.current.value}`
      );
      if (!response.ok) {
        throw new Error("No Definitions Found");
      }
      const searchResults = await response.json();
      console.log(searchResults);

      setResults(searchResults);
      console.log(...searchResults);
    } catch (error) {
      console.log(error.message);
    }
  }

  const definitionResults = results.map((result, index) => (
    <DefinitionResult
      key={index}
      word={result.word}
      phonetic={result.phonetic}
      meanings={result.meanings}
    />
  ));

  return (
    <>
      <header>
        <SettingsMenu />
        {/* keyword search input */}
        <div className="max-w-3xl mx-auto mt-8 tablet:px-10 desktop:px-0">
          <form
            onSubmit={submitRequestHandler}
            className="flex justify-center bg-lightGrey rounded-2xl focus-within:ring-1 focus-within:ring-amethyst"
          >
            <input
              ref={search}
              className="w-11/12 py-4 bg-transparent focus:outline-none"
              type="text"
            />
            <button>
              <img
                className="w-3.5 h-3.5"
                src="./src/assets/images/icon-search.svg"
                alt=""
              />
            </button>
          </form>
        </div>
      </header>
      <main>{definitionResults}</main>
    </>
  );
}

export default App;
