import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const MonthChart = () => {
  const data = [
    { month: "Jan", expanses: 1320, incomes: 2150 },
    { month: "Feb", expanses: 1450, incomes: 1980 },
    { month: "Mar", expanses: 1650, incomes: 2230 },
    { month: "Apr", expanses: 1230, incomes: 1790 },
    { month: "May", expanses: 1870, incomes: 2050 },
    { month: "Jun", expanses: 1580, incomes: 1920 },
    { month: "Jul", expanses: 1710, incomes: 2100 },
    { month: "Aug", expanses: 1390, incomes: 1850 },
    { month: "Sep", expanses: 1600, incomes: 2000 },
    { month: "Oct", expanses: 1740, incomes: 2190 },
    { month: "Nov", expanses: 1430, incomes: 1970 },
    { month: "Dec", expanses: 1550, incomes: 2120 },
  ];

  return (
    <div className="w-full capitalize h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" className="text-xs" />
          <YAxis width={40} className="text-xs" />
          <Tooltip
            contentStyle={{ borderRadius: "10px" }}
            formatter={(value: number) =>
              value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }
          />
          <Legend wrapperStyle={{ fontSize: 10 }} />
          <Bar dataKey="expanses" fill="oklch(50.5% 0.213 27.518)" />
          <Bar dataKey="incomes" fill="oklch(59.6% 0.145 163.225)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthChart;
