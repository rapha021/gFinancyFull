import CategoryChart from "../components/CategoryChart";
import MonthChart from "../components/MonthChart";
import TopSpendingCategory from "../components/TopSpendingCategory";

const Stats = () => {
  return (
    <section className="flex flex-col gap-5 px-4">
      <div className="w-full flex justify-between">
        <p>Estatisticas</p>

        <select
          name="date-filter"
          className="bg-gray-200/50 rounded-xl px-2 min-w-fit h-10 text-sm outline-emerald-400"
        >
          <option value="this-week">This week</option>
          <option value="last-week">Last week</option>
          <option value="this-month">This month</option>
          <option value="last-month">Last month</option>
          <option value="last-3-month">Last 3 months</option>
          <option value="this-year">This year</option>
        </select>
      </div>

      <div className="w-full rounded-lg shadow-sm ">
        <p className="pb-4 font-semibold">Income vs Expanse</p>
        <MonthChart />
      </div>

      <div className="w-full px-4 rounded-lg shadow-sm ">
        <p className="pb-4 font-semibold">Expanse by Category</p>

        <CategoryChart />
      </div>

      <div className="w-full px-4 rounded-lg shadow-sm">
        <p className="pb-4 font-semibold">Expanse by Category</p>

        <TopSpendingCategory />
      </div>
    </section>
  );
};

export default Stats;
