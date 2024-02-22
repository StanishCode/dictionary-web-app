import Definition from "./Definition";
import RelatedResults from "./RelatedResults";

function DefinitionsList() {
  return (
    <div>
      <div className="mt-8 flex items-center gap-6">
        <p className="text-lg font-semibold font-sans italic">noun</p>
        <div className="w-full h-0 border-t border-lightGrey"></div>
      </div>
      <div className="mt-6">
        <h2 className="text-grey font-light">Meaning</h2>
        <ul className="ml-8 p-4 space-y-2 list-disc marker:text-amethyst">
          <Definition />
        </ul>
      </div>
      <RelatedResults />
    </div>
  );
}

export default DefinitionsList;
