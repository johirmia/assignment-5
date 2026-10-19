
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-slate-100 bg-white">
      <div className="container grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        
        <div>
          <Logo />

          <p className="mt-4 max-w-xs text-xs leading-5 text-slate-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          <div className="mt-4 flex gap-4 text-xs text-slate-600">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pink-600"
            >
              GitHub
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pink-600"
            >
              Twitter
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-pink-600"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase text-slate-700">
            Product
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-xs text-slate-500">
            <a href="home" className="hover:text-pink-600">
              Home
            </a>

            <a href="technologies" className="hover:text-pink-600">
              Technologies
            </a>

            <a href="projects" className="hover:text-pink-600">
              Projects
            </a>
          </div>
        </div>

       
        <div>
          <h3 className="text-xs font-bold uppercase text-slate-700">
            Company
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-xs text-slate-500">
            <a href="about" className="hover:text-pink-600">
              About
            </a>

            <a href="contact" className="hover:text-pink-600">
              Contact
            </a>

            <a href="careers" className="hover:text-pink-600">
              Careers
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase text-slate-700">
            Legal
          </h3>

          <div className="mt-4 flex flex-col gap-3 text-xs text-slate-500">
            <a href="privacy" className="hover:text-pink-600">
              Privacy Policy
            </a>

            <a href="terms" className="hover:text-pink-600">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      <div className="container flex flex-col justify-between gap-3 border-t border-slate-100 py-5 text-xs text-slate-400 sm:flex-row">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="flex gap-5">
          <a href="#privacy" className="hover:text-pink-600">
            Privacy
          </a>

          <a href="#terms" className="hover:text-pink-600">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
