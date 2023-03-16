import ReactLogo from "../assets/react.svg";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-10 py-5">
      <div className="flex items-center space-x-4">
        <div>
          <img className="animate-spin" src={ReactLogo} alt="React Logo" />
        </div>
        <a href="#" className="hover:text-zinc-300">
          React <span className="font-bold">Todo</span>
        </a>
      </div>
      <div className="space-x-8">
        <a href="#" className="hover:text-zinc-300">
          <span className="">Todo</span>
        </a>

        <a href="#">
          <span className="">Login</span>
        </a>
      </div>
    </header>
  );
};
