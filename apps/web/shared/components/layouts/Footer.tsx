export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6 text-xs text-white/50">
        <span>
          © {new Date().getFullYear()} Arctis. Crafted by Ranaufal Muha.
        </span>

        <div className="flex gap-3">
          <a
            href="https://x.com/..."
            className="hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
          <a
            href="https://github.com/..."
            className="hover:text-white"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
