import { ChartPie, Plus, User, WalletCards } from "lucide-react";
import ActionButton, { type IActionButtonProps } from "./ActionButton";

const ShortcutsBar = () => {
  const actions: IActionButtonProps[] = [
    {
      bgColor: "bg-emerald-300/50",
      icon: Plus,
      iconColor: "text-emerald-600",
      text: "Add",
      pathname: "/add",
    },
    {
      bgColor: "bg-blue-300/50",
      icon: WalletCards,
      iconColor: "text-blue-600",
      text: "Cards",
      pathname: "/cards",
    },
    {
      bgColor: "bg-purple-300/50",
      icon: ChartPie,
      iconColor: "text-purple-600",
      text: "Stats",
      pathname: "/stats",
    },
    {
      bgColor: "bg-red-300/50",
      icon: User,
      iconColor: "text-red-600",
      text: "Profile",
      pathname: "/profile",
    },
  ];

  return (
    <section className="flex justify-between w-full h-24 px-8">
      {actions.map((a) => (
        <ActionButton
          bgColor={a.bgColor}
          icon={a.icon}
          iconColor={a.iconColor}
          text={a.text}
          pathname={a.pathname}
        />
      ))}
    </section>
  );
};

export default ShortcutsBar;
