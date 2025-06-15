import {
  ChartColumn,
  House,
  Plus,
  User,
  WalletCards,
  type LucideProps,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface IAction {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  pathname: string;
  iconClassname?: string;
  liClassname?: string;
}

const Footer = () => {
  const location = useLocation();

  const actions: IAction[] = [
    {
      icon: House,
      pathname: "/",
      text: "Home",
    },
    {
      icon: ChartColumn,
      pathname: "/stats",
      text: "Stats",
    },
    {
      icon: Plus,
      pathname: "/add",
      text: "Add",
      iconClassname: "w-10 h-10 rounded-full bg-emerald-400",
      liClassname: "pb-4",
    },
    {
      icon: WalletCards,
      pathname: "/cards",
      text: "Cards",
    },
    {
      icon: User,
      pathname: "/profile",
      text: "Profile",
    },
  ];

  return (
    <footer className="w-full h-14 fixed bottom-0">
      <ul className="w-full h-full flex justify-between gap-2 px-4 items-center **:flex **:items-center **:flex-col">
        {actions.map((a) => (
          <Link to={a.pathname}>
            <li
              className={`${
                location.pathname === a.pathname && "text-emerald-500"
              } ${a.liClassname}`}
            >
              <a.icon className={a.iconClassname} />
              <p className="font-semibold">{a.text}</p>
            </li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
