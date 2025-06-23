import { motion } from "framer-motion";

import { Plus } from "lucide-react";
import Card from "../components/Card";
import CardLimitChart from "../components/CardLimitChart";

export const creditCards = [
  {
    Name: "Nubank",
    FinalNum: "1234",
    Limit: 3000,
    Spent: 0,
    ClosingDate: new Date("2025-06-25"),
    color: "#8A05BE", // Roxo Nubank
  },
  {
    Name: "Itaú Click",
    FinalNum: "5678",
    Limit: 5000,
    Spent: 0,
    ClosingDate: new Date("2025-06-20"),
    color: "#FF6B00", // Laranja Itaú
  },
  {
    Name: "Inter Black",
    FinalNum: "9012",
    Limit: 10000,
    Spent: 10000,
    ClosingDate: new Date("2025-06-28"),
    color: "#FF9D00", // Laranja Inter
  },
];

const MyCards = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="px-4">
      <div className="flex items-center justify-between mb-4 font-semibold">
        <p className="text-lg">Meus cartoes</p>
        <button className="flex items-center justify-center w-32 h-10 gap-2 text-sm font-semibold text-white bg-emerald-400 rounded-xl">
          <Plus />
          <p>Add Card</p>
        </button>
      </div>

      <div className="w-full mb-4 bg-gray-200/50 rounded-2xl p-4">
        <CardLimitChart />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex flex-col gap-4"
      >
        {creditCards.map((c) => (
          <Card
            closingDate={c.ClosingDate}
            finalNum={c.FinalNum}
            limit={c.Limit}
            name={c.Name}
            spent={c.Spent}
            color={c.color}
            key={c.Name}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default MyCards;
