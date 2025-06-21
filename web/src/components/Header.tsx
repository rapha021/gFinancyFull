import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-between w-full h-20 px-4 bg-white border-gray-200 border-b-1">
      <div>
        <Link to="/">
          <h2>gFinancy</h2>
        </Link>
      </div>

      <div className="w-12 h-12 rounded-full bg-emerald-500"></div>
    </header>
  );
};

export default Header;
