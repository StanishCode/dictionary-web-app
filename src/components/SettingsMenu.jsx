import MoonIcon from "./MoonIcon";

function SettingsMenu({ onToggle, onSelect, toggled }) {
  return (
    <div className="max-w-3xl mx-auto pt-6 px-6 flex justify-between tablet:pt-14 tablet:px-10 desktop:px-0">
      <img className="size-9" src="./src/assets/images/logo.svg" alt="" />
      <div className="flex items-center gap-6">
        {/* font selector */}
        <select
          onChange={() => {
            onSelect(event.target.value);
          }}
          className="dark:bg-black dark:text-white"
          name="fonts"
          id="font-select"
        >
          <option className="dark:text-white" value="font-sans">
            Sans
          </option>
          <option className="dark:text-white" value="font-serif">
            Sans-serif
          </option>
          <option className="dark:text-white" value="font-mono">
            Mono
          </option>
        </select>

        {/* Dark theme toggle */}
        <div className="flex gap-4 pl-6 border-l-2 border-lightGrey dark:border-grey">
          <button
            onClick={onToggle}
            className={`flex items-center ${
              toggled ? "bg-amethyst justify-end" : "bg-grey justify-start"
            }  w-10 h-5 px-0.5 rounded-full transition-all duration-200 hover:bg-amethyst`}
          >
            <div className={`w-3.5 h-3.5 bg-white rounded-full`}></div>
          </button>
          <MoonIcon />
        </div>
      </div>
    </div>
  );
}

export default SettingsMenu;
