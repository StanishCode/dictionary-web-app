function App() {
  return (
    <>
      <header>
        <div className="max-w-3xl mx-auto pt-6 px-6 flex justify-between tablet:pt-14 tablet:px-10 desktop:px-0">
          <img className="size-9" src="./src/assets/images/logo.svg" alt="" />
          <div className="flex items-center gap-6">
            <select name="fonts" id="font-select">
              <option value="font-sans">Sans</option>
              <option value="font-serif">Sans-serif</option>
              <option value="font-mono">Mono</option>
            </select>
            <div className="flex gap-4 pl-6 border-l-2 border-lightGrey">
              <button className="w-10 h-5 px-0.5 bg-grey rounded-full hover:bg-amethyst">
                <div className="w-3.5 h-3.5 bg-white rounded-full"></div>
              </button>
              <img src="./src/assets/images/icon-moon.svg" alt="" />
            </div>
          </div>
        </div>
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
    </>
  );
}

export default App;
