function SettingsMenu() {
  return (
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
  );
}

export default SettingsMenu;
