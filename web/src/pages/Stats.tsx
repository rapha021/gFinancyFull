import CategoryChart from "../components/CategoryChart";
import MonthChart from "../components/MonthChart";
import TopSpendingCategory from "../components/TopSpendingCategory";

const Stats = () => {
  return (
    <section className="flex flex-col gap-5 px-4">
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
