import { useEffect, useState } from "react";
import { COLORS } from "../utils/colors";

const TopSpendingCategory = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  });

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

  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <section>
      {data
        .sort((a, b) => (a.value > b.value ? -1 : 1))
        .map((i) => {
          const percent = ((i.value / maxValue) * 100).toFixed(2);

          return (
            <div className="mb-2">
              <div className="flex justify-between">
                <p className="text-sm font-semibold">{i.name}</p>
                <p className="text-sm font-semibold">
                  {i.value.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-xl">
                <span
                  className={`block h-full rounded-xl transition-all duration-700`}
                  style={{
                    width: loaded ? `${percent}%` : 0,
                    backgroundColor: COLORS.find((c) => c.category === i.name)?.color || "#d509cf",
                  }}
                ></span>
              </div>
            </div>
          );
        })}
    </section>
  );
};

export default TopSpendingCategory;
