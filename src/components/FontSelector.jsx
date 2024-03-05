import { useState } from "react";
import FontSelectorItem from "./FontSelectorItem";
import imageUrl from "/images/icon-arrow-down.svg";

function FontSelector({ onSelect, font }) {
  const [isOpen, setIsOpen] = useState(false);
  const fonts = [
    { name: "Sans-serif", value: "font-sans" },
    { name: "Serif", value: "font-serif" },
    { name: "Mono", value: "font-mono" },
  ];

  const selectedFont = fonts.find((currFont) => currFont.value === font);

  function handleOpenFontSelect() {
    setIsOpen(true);
  }

  function handleCloseFontSelect() {
    setIsOpen(false);
  }

  function handleFontSelect(value) {
    onSelect(value);
    handleCloseFontSelect();
  }

  const everyFont = fonts.map((item, index) => {
    return (
      <FontSelectorItem
        key={index + Math.random() * 1000}
        onFontSelect={() => {
          handleFontSelect(item.value);
        }}
        name={item.name}
        value={item.value}
      />
    );
  });

  return (
    <div className="relative max-w-24">
      <button
        onClick={handleOpenFontSelect}
        className="w-full flex justify-between items-center gap-4 text-sm dark:text-white"
      >
        <span className="shrink-0 font-semibold">{selectedFont.name}</span>
        <img src={imageUrl} alt="" />
      </button>
      <ul
        className={`${
          isOpen ? "" : "hidden"
        } absolute right-0 w-44 p-4 flex flex-col gap-2 rounded-lg shadow-lg bg-white dark:bg-darkGrey dark:text-white dark:shadow-amethyst`}
      >
        {everyFont}
      </ul>
    </div>
  );
}

export default FontSelector;
