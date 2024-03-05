import React from "react";
import PlayIcon from "./PlayIcon";
import DefinitionsList from "./DefinitionsList";

function DefinitionResult({
  word,
  phonetic,
  meanings,
  sources,
  font,
  ...props
}) {
  const everyPartOfSpeech = meanings.map((meaning, index) => (
    <DefinitionsList
      key={index * (Math.random() * 1000)}
      {...meaning}
      font={font}
      {...props}
    />
  ));
  const everySource = sources.map((source, index) => {
    return (
      <a
        key={index * (Math.random() * 1000)}
        className="border-b border-b-lightGrey leading-none font-light dark:text-white dark:border-b-grey"
        href={source}
      >
        {source}
      </a>
    );
  });
  return (
    <section className="max-w-3xl mx-auto py-12  px-6 tablet:px-10 desktop:px-0">
      <div className="flex justify-between items">
        <div>
          <h1 className={`text-5xl font-semibold ${font} dark:text-white`}>
            {word}
          </h1>
          <p className="mt-2 text-amethyst font-light">{phonetic}</p>
        </div>
        <PlayIcon sound={word} />
      </div>
      {everyPartOfSpeech}
      <div className="w-full h-0 border-t border-lightGrey dark:border-grey"></div>
      <div className="max-w-3xl mx-auto mt-6 flex justify-start items-center flex-wrap gap-4">
        <p className="text-grey font-light border-b border-b-lightGrey leading-none dark:border-b-grey">
          Source
        </p>
        {everySource}
        <img src="./src/assets/images/icon-new-window.svg" alt="" />
      </div>
    </section>
  );
}

export default DefinitionResult;
