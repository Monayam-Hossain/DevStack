import { toast } from "react-toastify";
import type { Itechnology } from "../../types/technologyType";

interface IPropsTechnologyCard {
    tech: Itechnology;
    onAdd: (tech: Itechnology) => void;
    isAdded: boolean;
}

const TechnologyCard = ({ tech, onAdd, isAdded }: IPropsTechnologyCard) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 p-5 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow duration-200">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 flex items-center justify-center">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="max-w-full max-h-full object-contain"
                        />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                      {tech.badge}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                  {tech.description}
                </p>
            </div>

            <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4 pt-2">
                    <span className="bg-gray-50 text-gray-600 px-2.5 py-1 rounded-md border border-gray-100 font-medium">
                      {tech.category}
                    </span>
                    <span className="font-medium text-gray-400">{tech.difficulty}</span>
                    <div className="flex items-center gap-1 font-semibold text-gray-700">
                      <span className="text-amber-400">★</span>
                      <span>{tech.rating}</span>
                    </div>
                </div>

                <button
                  onClick={() => {
                    if (isAdded) {
                      toast.error(`${tech.name} already added to your stack, try again!`);
                    } else {
                      onAdd(tech);
                    }
                  }}
                  className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition-all duration-200 pointer-events-auto ${
                    isAdded
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed opacity-50"
                      : "bg-gray-900 hover:bg-black text-white active:scale-[0.98]"
                  }`}
                >
                  {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default TechnologyCard;