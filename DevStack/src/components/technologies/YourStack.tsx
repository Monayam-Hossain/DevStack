import type { Itechnology } from "../../types/technologyType";

interface Props {  
    selectedStack: Itechnology[];
    onRemove: (techId: Itechnology["id"]) => void;
    onRemoveAll: () => void;
}


const YourStack = ({ selectedStack, onRemove, onRemoveAll }: Props) => {

    const hasItems = selectedStack.length > 0;

    return (
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-xs sticky top-24">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Your Stack</h2>
          <p className="text-xs text-gray-400 mb-6">
            {hasItems
              ? `${selectedStack.length} ${
                  selectedStack.length === 1 ? "Technology" : "Technologies"
                } Selected`
              : "No technologies selected yet."}
          </p>

          {!hasItems ? (
            <div className="border border-dashed border-gray-200 rounded-2xl p-8 text-center my-4">
                <p className="text-sm text-gray-400 font-medium">Your stack is empty.</p>
            </div>
          ) : (
            <div className="space-y-3 mb-6">
              {selectedStack.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-3 border border-gray-100 rounded-2xl bg-white shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-8 h-8 object-contain"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-[11px] text-gray-400 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-gray-300 hover:text-gray-500 p-1 rounded-full transition-colors"
                    aria-label={`Remove ${item.name}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}

          {hasItems && (
            <button
              onClick={onRemoveAll}
              className="w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-rose-500 border border-rose-200 hover:bg-rose-50 transition-colors duration-200"
            >
              Remove All
            </button>
          )}
      </div>
    );
};

export default YourStack;