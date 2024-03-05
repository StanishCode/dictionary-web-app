import React from "react";

function ErrorResult({ name, message }) {
  return (
    <div className="max-w-3xl mx-auto mt-20 px-6 text-center tablet:px-10 desktop:px-0 dark:text-white">
      <div className="text-6xl">😕</div>
      <h2 className="mt-8 text-lg font-semibold">{name}</h2>
      <p className="mt-6 font-light text-grey dark:text-white">{message}</p>
    </div>
  );
}

export default ErrorResult;
