
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

type Props = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

export default function TechCard({
  technology,
  isAdded,
  onAdd,
}: Props) {
  return (
    <article className="flex min-h-[190px] flex-col rounded-xl border border-slate-100 bg-white p-3.5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between gap-2">
  
        <span className="text-xl font-bold text-slate-800">
          {technology.icon}
        </span>

        {technology.badge && (
          <span className="rounded-full bg-pink-50 px-2 py-1 text-[10px] font-medium text-pink-600">
            {technology.badge}
          </span>
        )}
      </div>

      <h3 className="mt-3 text-sm font-bold text-slate-800">
        {technology.name}
      </h3>

    
      <p className="mt-2 flex-1 text-xs leading-[1.6] text-slate-500">
        {technology.description}
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3">
        <span className="rounded-sm bg-slate-100 px-1.5 py-1 text-[10px] text-slate-600">
          {technology.category}
        </span>

        <span className="text-[10px] text-slate-500">
          {technology.difficulty}
        </span>

        <span className="text-[10px] font-medium text-slate-700">
          <span className="text-amber-400">★</span>{" "}
          {technology.rating.toFixed(1)}
        </span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-3 w-full rounded-md px-3 py-2 text-xs font-medium text-white transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-400"
            : "bg-[#0b1020] hover:bg-pink-600"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </article>
  );
}
