import PlayIcon from "./PlayIcon";
import DefinitionsList from "./DefinitionsList";

function DefinitionResult({ word, phonetic, meanings, ...props }) {
  const everyPartOfSpeech = meanings.map((meaning, index) => (
    <DefinitionsList
      key={index * (Math.random() * 1000)}
      {...meaning}
      {...props}
    />
  ));
  return (
    <section className="max-w-3xl mx-auto pt-12 px-6 tablet:px-10 desktop:px-0">
      <div className="flex justify-between items">
        <div>
          <h1 className="text-5xl font-semibold font-sans dark:text-white">
            {word}
          </h1>
          <p className="mt-2 text-amethyst font-light">{phonetic}</p>
        </div>
        <PlayIcon sound={word} />
      </div>
      {everyPartOfSpeech}
    </section>
  );
}

export default DefinitionResult;
