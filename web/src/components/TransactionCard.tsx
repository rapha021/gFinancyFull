import { Utensils } from "lucide-react";

interface ITransactionProps {
  category: string;
  title: string;
  date: string;
  type: "expense" | "income";
  value: number;
}

const TransactionCard = (transaction: ITransactionProps) => {
  return (
    <li className="flex items-center justify-between w-full h-16 px-4 mt-4 rounded-lg shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-8 h-10 rounded-full bg-emerald-500/30 text-emerald-500">
          <Utensils size={18} />
        </div>

        <div>
          <p className="text-sm font-semibold">{transaction.title}</p>
          <p className="text-xs text-gray-500">Hoje, 2:15 PM</p>
        </div>
      </div>

      <p
        className={`font-bold ${
          transaction.type === "expense" ? "text-red-600" : "text-green-600"
        }`}
      >
        {transaction.type === "expense" ? "-" : ""}
        {transaction.value.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
    </li>
  );
};

export default TransactionCard;
