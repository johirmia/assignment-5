
export default function Hero() {
  return (
    <section id="home" className="container py-20 md:py-24">
      <div className="grid min-h-[320px] items-center gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl">
            Build Your Ideal
            <span className="gradient-text block">
              Development Stack
            </span>
          </h1>

          <p className="mt-5 max-w-[440px] text-sm leading-6 text-slate-500 sm:text-base">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="technologies"
              className="button-gradient inline-flex items-center justify-center rounded-md px-4 py-3 text-xs font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:brightness-110 active:translate-y-0"
            >
              Explore Technologies
            </a>

            <a
              href="about"
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-xs font-medium text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400 hover:bg-pink-50 hover:text-pink-600 hover:shadow-md active:translate-y-0"
            >
              Learn More
            </a>
          </div>
        </div>

    
        <div className="flex items-center justify-center">
          <img
            src="/banner-stack.png"
            className="h-auto w-full max-w-[360px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

      </div>
    </section>
  );
}
