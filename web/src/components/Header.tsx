import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full h-20 border-b-1 border-gray-200 bg-white flex justify-between items-center px-4 fixed top-0">
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
