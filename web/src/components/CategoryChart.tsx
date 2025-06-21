import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { COLORS } from "../utils/colors";

const CategoryChart = () => {
  const data = [
    { name: "Food", value: 720 },
    { name: "Transport", value: 430 },
    { name: "Rent", value: 1050 },
    { name: "Utilities", value: 310 },
    { name: "Health", value: 580 },
    { name: "Entertainment", value: 240 },
    { name: "Shopping", value: 670 },
    { name: "Education", value: 390 },
    { name: "Others", value: 190 },
  ];

  data.sort((a, b) => (a.value > b.value ? -1 : 1));

  return (
    <section className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            innerRadius={60}
            stroke="none"
            fill="#dd0101"
            dataKey="value"
          >
            {data.map((e, index) => (
              <Cell
                key={`cell-${index}`}
                fill={
                  COLORS.find((c) => c.category === e.name)?.color || "#d509cf"
                }
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ borderRadius: "10px" }}
            formatter={(value: number) =>
              value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })
            }
          />
          <Legend
            wrapperStyle={{ fontSize: 10 }}
            payload={data.map((e) => {
              return {
                id: e.name,
                value: e.name,
                type: "rect",
                color:
                  COLORS.find((c) => c.category === e.name)?.color || "#d509cf",
              };
            })}
          />
        </PieChart>
      </ResponsiveContainer>
    </section>
  );
};

export default CategoryChart;
