
import { X } from "lucide-react";

type Technology = {
  id: number;
  name: string;
  category: string;
  icon: string;
};

type Props = {
  stack: Technology[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
};

export default function YourStack({
  stack,
  onRemove,
  onRemoveAll,
}: Props) {
  return (
    <aside className="h-fit rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
      <h3 className="text-sm font-bold text-slate-800">
        Your Stack
      </h3>

      <p className="mt-1 text-xs text-slate-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="mt-5 rounded-md bg-slate-50 p-4 text-center text-xs leading-5 text-slate-500">
          No technologies selected yet.
        </p>
      ) : (
        <div className="mt-3 flex flex-col gap-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between gap-2 rounded-md border border-slate-200 px-2.5 py-2"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="text-base">
                  {technology.icon}
                </span>

                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-slate-700">
                    {technology.name}
                  </p>

                  <p className="text-[10px] text-slate-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => onRemove(technology.id)}
                aria-label={`Remove ${technology.name}`}
                className="rounded p-1 text-slate-400 transition hover:bg-red-50 hover:text-red-500"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={onRemoveAll}
        disabled={stack.length === 0}
        className="mt-6 w-full rounded-md border border-red-200 px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Remove All
      </button>
    </aside>
  );
}
