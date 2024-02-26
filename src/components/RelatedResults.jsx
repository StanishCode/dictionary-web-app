import RelatedResultsList from "./RelatedResultsList";

function RelatedResults({ synonyms, antonyms }) {
  return (
    <>
      {synonyms.length >= 1 && (
        <div className="max-w-3xl mx-auto mt-6 flex justify-start items-center flex-wrap gap-4">
          <p className="text-grey font-light">Synonym</p>
          {synonyms.map((synonym, index) => (
            <RelatedResultsList
              key={index * (Math.random() * 1000)}
              result={synonym}
            />
          ))}
        </div>
      )}
      {antonyms.length >= 1 && (
        <div className="max-w-3xl mx-auto mt-6 flex justify-start items-center flex-wrap gap-4">
          <p className="text-grey font-light">Antonym</p>
          {antonyms.map((antonym, index) => (
            <RelatedResultsList
              key={index * (Math.random() * 1000)}
              result={antonym}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default RelatedResults;
