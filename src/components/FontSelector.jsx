import { useState } from "react";

function FontSelector({ onSelect, font }) {
  const [isOpen, setIsOpen] = useState(false);
  const fonts = {
    ["font-sans"]: "Sans-serif",
    ["font-serif"]: "Serif",
    ["font-mono"]: "Mono",
  };

  function handleOpenFontSelect() {
    setIsOpen(true);
  }

  function handleCloseFontSelect() {
    setIsOpen(false);
  }

  function handleFontSelect(event) {
    onSelect(event.target.value);
    handleCloseFontSelect();
  }
  return (
    <div className="relative max-w-24">
      <button
        onClick={handleOpenFontSelect}
        className="w-full flex justify-between items-center gap-4 text-sm dark:text-white"
      >
        <span className="shrink-0 font-semibold">{fonts[font]}</span>
        <img src="./src/assets/images/icon-arrow-down.svg" alt="" />
      </button>
      {/* TODO dynamically render each font list item */}
      <ul
        className={`${
          isOpen ? "" : "hidden"
        } absolute right-0 w-44 p-4 flex flex-col gap-2 rounded-lg shadow-lg bg-white dark:bg-darkGrey dark:text-white dark:shadow-amethyst`}
      >
        <li className="w-full flex">
          <input
            onClick={handleFontSelect}
            className="invisible"
            type="radio"
            name="font"
            id="font-sans"
            value={"font-sans"}
          />
          <label
            className="w-full font-sans font-semibold cursor-pointer"
            htmlFor="font-sans"
          >
            Sans-serif
          </label>
        </li>
        <li className="w-full flex">
          <input
            onClick={handleFontSelect}
            className="invisible"
            type="radio"
            name="font"
            id="font-serif"
            value={"font-serif"}
          />
          <label
            className="w-full font-serif font-semibold cursor-pointer"
            htmlFor="font-serif"
          >
            Serif
          </label>
        </li>
        <li className="w-full flex">
          <input
            onClick={handleFontSelect}
            className="invisible"
            type="radio"
            name="font"
            id="font-mono"
            value={"font-mono"}
          />
          <label
            className="w-full font-mono font-semi-bold cursor-pointer"
            htmlFor="font-mono"
          >
            Mono
          </label>
        </li>
      </ul>
    </div>
  );
}

export default FontSelector;
