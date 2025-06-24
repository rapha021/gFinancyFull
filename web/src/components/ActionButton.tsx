import { type LucideProps } from "lucide-react";
import { Link } from "react-router-dom";

export interface IActionButtonProps {
  bgColor: string;
  iconColor: string;
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  text: string;
  pathname: string;
}

const ActionButton = (props: IActionButtonProps) => {
  return (
    <Link
      to={props.pathname}
      className="flex flex-col items-center justify-center gap-1 w-14"
    >
      <div
        className={`w-10 h-12 rounded-full flex justify-center items-center ${props.bgColor}`}
      >
        <props.icon className={`${props.iconColor}`} size={20} />
      </div>
      <p className="text-sm w-fit">{props.text}</p>
    </Link>
  );
};

export default ActionButton;
