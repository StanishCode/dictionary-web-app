import React from "react";

function FontSelectorItem({ onFontSelect, name, value }) {
  return (
    <li className="w-full flex">
      <input
        onClick={onFontSelect}
        className="invisible"
        type="radio"
        name="font"
        id={value}
        value={value}
      />
      <label
        className="w-full font-sans font-semibold cursor-pointer"
        htmlFor={value}
      >
        {name}
      </label>
    </li>
  );
}

export default FontSelectorItem;
