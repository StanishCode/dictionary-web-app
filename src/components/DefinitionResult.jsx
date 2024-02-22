import PlayIcon from "./PlayIcon";
import DefinitionsList from "./DefinitionsList";

function DefinitionResult({ word, phonetic }) {
  return (
    <section className="max-w-3xl mx-auto mt-12 px-6 tablet:px-10 desktop:px-0">
      <div className="flex justify-between items">
        <div>
          <h1 className="text-5xl font-semibold font-sans">{word}</h1>
          <p className="mt-2 text-amethyst font-light">{phonetic}</p>
        </div>
        <PlayIcon sound={word} />
      </div>
      <DefinitionsList />
    </section>
  );
}

export default DefinitionResult;
