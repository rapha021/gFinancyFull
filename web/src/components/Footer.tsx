import { ChartColumn, House, Plus, User, WalletCards } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="w-full h-14 fixed bottom-0">
      <ul className="w-full h-full flex justify-between gap-2 px-6 items-center **:flex **:items-center **:flex-col">
        <Link to="/">
          <li className={`${location.pathname === "/" && "text-emerald-500"}`}>
            <House />
            <p>Home</p>
          </li>
        </Link>

        <Link to="/stats">
          <li
            className={`${
              location.pathname === "/stats" && "text-emerald-500"
            }`}
          >
            <ChartColumn />
            <p>Stats</p>
          </li>
        </Link>

        <Link to="/add">
          <li className="pb-4">
            <Plus className="w-10 h-10 rounded-full bg-emerald-400" />
            <p
              className={`${
                location.pathname === "/add" && "text-emerald-500"
              }`}
            >
              Add
            </p>
          </li>
        </Link>

        <Link to="/cards">
          <li
            className={`${
              location.pathname === "/cards" && "text-emerald-500"
            }`}
          >
            <WalletCards />
            <p>Cards</p>
          </li>
        </Link>

        <Link to="/profile">
          <li
            className={`${
              location.pathname === "/profile" && "text-emerald-500"
            }`}
          >
            <User />
            <p>Profile</p>
          </li>
        </Link>
      </ul>
    </footer>
  );
};

export default Footer;
