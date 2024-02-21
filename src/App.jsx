import PlayIcon from "./components/PlayIcon";

function App() {
  return (
    <>
      <header>
        {/* top header */}
        <div className="max-w-3xl mx-auto pt-6 px-6 flex justify-between tablet:pt-14 tablet:px-10 desktop:px-0">
          <img className="size-9" src="./src/assets/images/logo.svg" alt="" />
          <div className="flex items-center gap-6">
            {/* font selector */}
            <select name="fonts" id="font-select">
              <option value="font-sans">Sans</option>
              <option value="font-serif">Sans-serif</option>
              <option value="font-mono">Mono</option>
            </select>

            {/* Dark theme toggle */}
            <div className="flex gap-4 pl-6 border-l-2 border-lightGrey">
              <button className="w-10 h-5 px-0.5 bg-grey rounded-full hover:bg-amethyst">
                <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
              </button>
              <img src="./src/assets/images/icon-moon.svg" alt="" />
            </div>
          </div>
        </div>

        {/* keyword search input */}
        <div className="max-w-3xl mx-auto mt-6 tablet:px-10 desktop:px-0">
          <div className="flex justify-center bg-lightGrey rounded-2xl focus-within:ring-1 focus-within:ring-amethyst">
            <input
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
          </div>
        </div>
      </header>
      <main>
        {/* Word title, phoenetics, and audio */}
        <section className="max-w-3xl mx-auto mt-12 px-6 tablet:px-10 desktop:px-0">
          <div className="flex justify-between items">
            <div>
              <h1 className="text-5xl font-semibold font-sans">keyboard</h1>
              <p className="mt-2 text-amethyst font-light">/ˈkiːbɔːd/</p>
            </div>
            <PlayIcon />
          </div>
          <div className="mt-8 flex items-center gap-6">
            <p className="text-lg font-semibold font-sans italic">noun</p>
            <div className="w-full h-0 border-t border-lightGrey"></div>
          </div>

          {/* Definition(s) */}
          <div className="mt-6">
            <h2 className="text-grey font-light">Meaning</h2>
            <ul className="ml-8 p-4 space-y-2 list-disc marker:text-amethyst">
              <li className="pl-2 text-veryMedGrey font-light">
                (etc.) A set of keys used to operate a typewriter, computer etc.
              </li>
              <li className="pl-2 text-veryMedGrey font-light">
                A component of many instruments including the piano, organ, and
                harpsichord consisting of usually black and white keys that
                cause different tones to be produced when struck.
              </li>
              <li className="pl-2 text-veryMedGrey font-light">
                A device with keys of a musical keyboard, used to control
                electronic sound-producing devices which may be built into or
                separate from the keyboard device.
              </li>
            </ul>
          </div>

          {/* Synonyms and antonyms lists */}
          <div className="mt-6 flex justify-start items-center gap-4">
            <p className="text-grey font-light">Synonyms</p>
            <button className="text-amethyst font-semibold font-sans leading-none border-b border-transparent transition-colors duration-200 hover:border-amethyst">
              electronic keyboard
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
