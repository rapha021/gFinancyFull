import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";

const TransactionsList = () => {
  return (
    <section className="px-4">
      <div className="flex justify-between">
        <p className="font-bold">Recent Transactions</p>
        <Link to="/transactions">
          <p className="font-semibold text-emerald-500">See All</p>
        </Link>
      </div>

      <ul>
        <TransactionCard
          category="Internet"
          date="15/06/2025"
          title="Internet"
          type="expense"
          value={20}
        />

        <TransactionCard
          category="Food"
          date="15/06/2025"
          title="Restaurante"
          type="expense"
          value={180}
        />

        <TransactionCard
          category="Food"
          date="15/06/2025"
          title="Mercado"
          type="expense"
          value={300}
        />

        <TransactionCard
          category="Salary"
          date="15/06/2025"
          title="Salário"
          type="income"
          value={3000}
        />
      </ul>
    </section>
  );
};

export default TransactionsList;
