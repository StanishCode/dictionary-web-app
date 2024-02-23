import Definition from "./Definition";
import RelatedResults from "./RelatedResults";

function DefinitionsList({ partOfSpeech, definitions, ...props }) {
  console.log(props);
  const everyDefinition = definitions.map((entry, index) => (
    <Definition key={index * (Math.random() * 1000)} def={entry.definition} />
  ));

  return (
    <div>
      <div className="mt-8 flex items-center gap-6">
        <p className="text-lg font-semibold font-sans italic">{partOfSpeech}</p>
        <div className="w-full h-0 border-t border-lightGrey"></div>
      </div>
      <div className="mt-6">
        <h2 className="text-grey font-light">Meaning</h2>
        <ul className="ml-8 p-4 space-y-2 list-disc marker:text-amethyst">
          {everyDefinition}
        </ul>
      </div>
      <RelatedResults {...props} />
    </div>
  );
}

export default DefinitionsList;
