import {  motion } from "framer-motion";

interface ICardProps {
  name: string;
  finalNum: string;
  limit: number;
  spent: number;
  closingDate: Date;
  color: string;
}

const Card = ({
  closingDate,
  finalNum,
  limit,
  name,
  spent,
  color,
}: ICardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: -30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <motion.div
      variants={cardVariants}
      transition={{ ease: "anticipate" }}
      className="flex flex-col justify-between w-full gap-2 p-4 text-white transition-all h-54 rounded-2xl"
      style={{ backgroundColor: color }}
    >
      <div className="flex justify-between">
        <div className="text-2xl font-semibold">
          <p className="font-bold">{name}</p>
          <p className="text-xl tracking-wider text-gray-100/70">
            •••• •••• •••• {finalNum}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs font-semibold text-gray-100/70">Credit Limit</p>
          <p className="text-xl font-bold">
            {limit.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>

      <div className="flex justify-between w-8/10">
        <div>
          <p className="text-xs font-semibold text-gray-100/70">Spent</p>
          <p className="text-lg font-semibold">
            {spent.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-100/70">Available</p>
          <p className="text-lg font-semibold">
            {(limit-spent).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-gray-100/70">Due Date</p>
          <p className="text-lg font-semibold">{closingDate.toDateString()}</p>
        </div>
        <button className="w-32 text-sm font-semibold h-9 bg-gray-200/30 rounded-xl">
          View Expanses
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
