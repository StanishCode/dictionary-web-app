import { forwardRef } from "react";

const SearchInput = forwardRef(function SearchInput(
  { onRequest, font, searchErr },
  ref
) {
  const formClasses =
    searchErr.type === "blank" ? "border-red-500" : "border-transparent";

  return (
    <div className="max-w-3xl mx-auto mt-8 mobile:px-10 desktop:px-0">
      <form
        onSubmit={onRequest}
        className={`flex justify-center bg-lightGrey rounded-2xl border focus-within:border focus-within:border-amethyst dark:bg-darkGrey ${formClasses}`}
      >
        <input
          ref={ref}
          className={`w-11/12 py-4 font-semibold ${font} bg-transparent focus:outline-none dark:text-white`}
          type="text"
          placeholder="Search for any word..."
        />
        <button>
          <img
            className="w-3.5 h-3.5"
            src="./assets/images/icon-search.svg"
            alt=""
          />
        </button>
      </form>
      {searchErr.type === "blank" && (
        <p className="mt-2 text-sm font-light text-red-500">
          Whoops, can't be empty...
        </p>
      )}
    </div>
  );
});

export default SearchInput;
