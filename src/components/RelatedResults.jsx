import RelatedResultsList from "./RelatedResultsList";

function RelatedResults() {
  return (
    <div className="mt-6 flex justify-start items-center gap-4">
      <p className="text-grey font-light">Synonyms</p>
      <RelatedResultsList />
    </div>
  );
}

export default RelatedResults;
