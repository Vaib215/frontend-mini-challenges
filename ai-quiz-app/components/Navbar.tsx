import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <div className="navbar flex-0 z-50">
      <div className="navbar-end w-full">
        <ThemeToggle />
      </div>
    </div>
  );
}
