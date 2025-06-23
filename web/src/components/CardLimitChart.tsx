import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { creditCards } from "../pages/MyCards";

const CardLimitChart = () => {
  const totalCardsLimit = creditCards.reduce(
    (acc, next) => {
      return {
        totalLimit: acc.totalLimit + next.Limit,
        totalSpent: acc.totalSpent + next.Spent,
      };
    },

    { totalLimit: 0, totalSpent: 0 }
  );

  const data = [
    {
      name: "totalAvailableLimit",
      value: totalCardsLimit.totalLimit - totalCardsLimit.totalSpent,
    },
    { name: "totalSpent", value: totalCardsLimit.totalSpent },
  ];

  const COLORS = ["oklch(0.596 0.145 163.225)", "oklch(0.505 0.213 27.518)"];

  return (
    <div className="flex w-full h-full items-center justify-between">
      <div className="font-semibold">
        <p className="text-emerald-600">Limite Disponivel:</p>
        <p className="font-normal">
          {data[0].value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <p className="text-red-700">Limite Usado</p>
        <p className="font-normal">
          {data[1].value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <p className="text-green-500">Limite Total</p>
        <p className="font-normal">
          {(data[1].value + data[0].value).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>
      <section className="w-32 h-32">
        <ResponsiveContainer
          width="100%"
          height="100%"
          className="pointer-events-none"
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={40}
              paddingAngle={2}
              cornerRadius={1}
              stroke="none"
              fill="#dd0101"
              dataKey="value"
            >
              {data.map((e, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CardLimitChart;
