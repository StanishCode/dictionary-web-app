import { useState, useRef, useEffect } from "react";
import SettingsMenu from "./components/SettingsMenu";
import DefinitionResult from "./components/DefinitionResult";
import ErrorResult from "./components/ErrorResult";

function App() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [results, setResults] = useState([]);
  const [theme, setTheme] = useState(prefersDark ? "dark" : "light");
  const [isToggled, setIsToggled] = useState(prefersDark);
  const [searchError, setSearchError] = useState({ type: "" });
  const [currentFont, setCurrentFont] = useState("font-sans");
  const search = useRef();
  const formClasses =
    searchError.type === "blank" ? "border-red-500" : "border-transparent";

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

  function handleFontChange(font) {
    setCurrentFont(font);
  }

  async function submitRequestHandler(event) {
    event.preventDefault();

    const isBlank = search.current.value.trim() === "";
    try {
      if (isBlank) {
        search.current.blur();
        setSearchError({ type: "blank" });
      } else {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${search.current.value}`
        );
        if (!response.ok) {
          throw {
            name: "No Definitions Found",
            message:
              "Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at a later time or head to the web instead.",
          };
        }
        setSearchError({ type: "" });
        search.current.value = "";
        const searchResults = await response.json();

        setResults(searchResults);
      }
    } catch (error) {
      setSearchError({
        name: error.name,
        message: error.message,
        type: "invalid",
      });
    }
  }

  const definitionResults = results.map((result, index) => (
    <DefinitionResult
      key={index}
      word={result.word}
      phonetic={result.phonetic}
      meanings={result.meanings}
      sources={result.sourceUrls}
      font={currentFont}
    />
  ));

  return (
    <>
      <header>
        <SettingsMenu
          onToggle={darkModeToggleHandler}
          onSelect={handleFontChange}
          toggled={isToggled}
        />
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
          {searchError.type === "blank" && (
            <p className="mt-2 text-sm font-light text-red-500">
              Whoops, can't be empty...
            </p>
          )}
        </div>
      </header>
      <main className="dark:bg-black">
        {searchError.type === "invalid" && (
          <ErrorResult name={searchError.name} message={searchError.message} />
        )}
        {searchError.type !== "invalid" && definitionResults}
      </main>
    </>
  );
}

export default App;
