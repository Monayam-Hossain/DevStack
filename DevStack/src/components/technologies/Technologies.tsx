import { use, useState } from "react";
import type { Itechnology } from "../../types/technologyType";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import { toast } from "react-toastify";

interface TechProps {
    technologyPromise: Promise<Itechnology[]>;
}

const Technologies = ({ technologyPromise }: TechProps) => {
    const technologies = use(technologyPromise);

    const [selectedStack, setSelectedStack] = useState<Itechnology[]>([]);

    const handleAddToStack = (tech: Itechnology) => {
        if (!selectedStack.some((item) => item.id === tech.id)) {
            setSelectedStack([...selectedStack, tech]);
            toast.success(`${tech.name} added to your stack!`);
        }
    };

    const handleRemoveFromStack = (techId: Itechnology["id"]) => {
        setSelectedStack(selectedStack.filter((item) => item.id !== techId));
        toast.warning(`${selectedStack.find((item) => item.id === techId)?.name} removed from your stack!`);
    };

    const handleRemoveAll = () => {
        setSelectedStack([]);
        toast.warning("All technologies removed from your stack!");
    };

    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Explore the{" "}
                        <span className="bg-brand-gradient bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="text-gray-400 text-sm sm:text-base mt-2">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
                    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {technologies.map((tech) => (
                            <TechnologyCard
                                key={tech.id}
                                tech={tech}
                                onAdd={handleAddToStack}
                                isAdded={selectedStack.some((item) => item.id === tech.id)}
                            />
                        ))}
                    </div>

                    <div className="lg:col-span-1">
                        <YourStack
                            selectedStack={selectedStack}
                            onRemove={handleRemoveFromStack}
                            onRemoveAll={handleRemoveAll}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Technologies;