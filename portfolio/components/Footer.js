export default function Footer() {
  return (
    <footer className="bg-primary dark:bg-surface-dark w-full rounded-none border-t border-hairline dark:border-outline flex flex-col md:flex-row justify-between items-center px-margin py-xl mt-auto">
      <div className="font-mono-spec text-label-caps text-on-primary mb-md md:mb-0 text-center md:text-left">
        © 2024 JERMANE JIRO JABSON. ARCHITECTURAL PORTFOLIO.
      </div>
      <div className="flex flex-wrap justify-center items-center gap-gutter">
        <a className="font-mono-spec text-mono-spec uppercase tracking-widest text-on-primary-container/70 hover:text-secondary-container transition-colors duration-200" href="https://www.linkedin.com/in/jermanejiro/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        <a className="font-mono-spec text-mono-spec uppercase tracking-widest text-on-primary-container/70 hover:text-secondary-container transition-colors duration-200" href="#">CONTACT</a>
      </div>
    </footer>
  );
}
