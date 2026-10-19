
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import technologiesData from "./data/technologies.json";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

type Technology = {
  id: number;
  name: string;
  category: string;
  description: string;
  rating: number;
  difficulty: string;
  badge: string;
  icon: string;
};

export default function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTechnologies(technologiesData as Technology[]);
    setLoading(false);
  }, []);

  function handleAdd(technology: Technology) {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack.`);
      return;
    }

    setStack((previous) => [...previous, technology]);
    toast.success(`${technology.name} added to your stack!`);
  }

  function handleRemove(id: number) {
    const removed = stack.find((item) => item.id === id);

    setStack((previous) =>
      previous.filter((item) => item.id !== id)
    );

    if (removed) {
      toast.info(`${removed.name} removed from your stack.`);
    }
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;

    setStack([]);
    toast.success("All technologies removed from your stack.");
  }

  return (
    <section id="technologies" className="container py-12 md:py-16">
      <div className="mb-7">
        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
          Explore the{" "}
          <span className="gradient-text">Technologies</span>
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <p className="py-10 text-center text-sm text-slate-500">
          Loading technologies...
        </p>
      ) : (
        <div className="grid items-start gap-5 lg:grid-cols-[minmax(0,1fr)_190px]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((technology) => (
              <TechCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAdd={handleAdd}
              />
            ))}
          </div>

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      )}
    </section>
  );
}
