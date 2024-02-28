import Definition from "./Definition";
import RelatedResults from "./RelatedResults";

function DefinitionsList({ partOfSpeech, definitions, font, ...props }) {
  console.log(props);
  const everyDefinition = definitions.map((entry, index) => (
    <Definition
      key={index * (Math.random() * 1000)}
      def={entry.definition}
      font={font}
    />
  ));

  return (
    <div>
      <div className="mt-8 flex items-center gap-6">
        <p
          className={`text-lg ${
            font === "font-serif" ? "font-sans" : `font-semibold ${font}`
          } italic dark:text-white`}
        >
          {partOfSpeech}
        </p>
        <div className="w-full h-0 border-t border-lightGrey dark:border-grey"></div>
      </div>
      <div className="mt-6">
        <h2 className={`text-grey font-light ${font}`}>Meaning</h2>
        <ul className="ml-8 p-4 space-y-2 list-disc marker:text-amethyst">
          {everyDefinition}
        </ul>
      </div>
      <RelatedResults {...props} />
    </div>
  );
}

export default DefinitionsList;
