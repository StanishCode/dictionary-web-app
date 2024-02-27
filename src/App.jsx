import { useState, useRef, useEffect } from "react";
import SettingsMenu from "./components/SettingsMenu";
import DefinitionResult from "./components/DefinitionResult";

function App() {
  const [results, setResults] = useState([]);
  const [searchError, setSearchError] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [theme, setTheme] = useState("light");
  const search = useRef();
  const formClasses =
    searchError === "blank" ? "border-red-500" : "border-transparent";

  // dark mode DOM manipulation
  //TODO refactor
  useEffect(() => {
    const currentTheme = theme === "dark" ? "light" : "dark";
    const root = window.document.documentElement;

    root.classList.remove(currentTheme);
    root.classList.add(theme);
  }, [theme]);

  function darkModeToggleHandler() {
    setIsToggled((prevState) => {
      return !prevState;
    });

    setTheme((prevTheme) => {
      return prevTheme === "dark" ? "light" : "dark";
    });
  }

  async function submitRequestHandler(event) {
    event.preventDefault();

    const isBlank = search.current.value.trim() === "";
    try {
      if (isBlank) {
        search.current.blur();
        setSearchError("blank");
      } else {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search.current.value}`
        );
        if (!response.ok) {
          throw new Error("No Definitions Found");
        }
        setSearchError("");
        const searchResults = await response.json();
        console.log(searchResults);

        setResults(searchResults);
        console.log(...searchResults);
      }
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
        <SettingsMenu onToggle={darkModeToggleHandler} toggled={isToggled} />
        {/* keyword search input */}
        <div className="max-w-3xl mx-auto mt-8 tablet:px-10 desktop:px-0">
          <form
            onSubmit={submitRequestHandler}
            className={`flex justify-center bg-lightGrey rounded-2xl border focus-within:border focus-within:border-amethyst dark:bg-darkGrey ${formClasses}`}
          >
            <input
              ref={search}
              className="w-11/12 py-4 font-semibold bg-transparent focus:outline-none dark:text-white"
              type="text"
              placeholder="Search for any word..."
            />
            <button>
              <img
                className="w-3.5 h-3.5"
                src="./src/assets/images/icon-search.svg"
                alt=""
              />
            </button>
          </form>
          {searchError === "blank" && (
            <p className="mt-2 text-sm font-light text-red-500">
              Whoops, can't be empty...
            </p>
          )}
        </div>
      </header>
      <main className="dark:bg-black">{definitionResults}</main>
    </>
  );
}

export default App;
