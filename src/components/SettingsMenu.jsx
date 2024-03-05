import MoonIcon from "./MoonIcon";
import FontSelector from "./FontSelector";

function SettingsMenu({ onToggle, onSelect, toggled, font }) {
  return (
    <div className="max-w-3xl mx-auto flex justify-between mobile:pt-4 mobile:px-10 tablet:pt-16 desktop:px-0">
      <img className="size-9" src="./assets/images/logo.svg" alt="" />
      <div className="flex items-center gap-6">
        {/* font selector */}
        <FontSelector onSelect={onSelect} font={font} />

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
