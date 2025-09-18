export default function Footer() {
  return (
    <footer className="border-t border-white/30 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-white">
        <p>© {new Date().getFullYear()} CodeCraft</p>
        <nav className="flex gap-4 text-sm">
          <a
            href="#"
            className="hover:text-orange-400 underline underline-offset-2"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-orange-400 underline underline-offset-2"
          >
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
