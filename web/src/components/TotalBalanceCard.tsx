import { EllipsisVertical, MoveDown, MoveUp } from "lucide-react";

interface ITotalBalanceProps {
  income?: number;
  expenses?: number;
  balance?: number;
  month?: number;
}

const TotalBalanceCard = ({
  income = 0,
  expenses = 0,
  balance = 0,
  month,
}: ITotalBalanceProps) => {
  return (
    <section className="flex items-center justify-center w-full h-48 item">
      <div className="flex flex-col justify-between w-full h-full px-4 py-4 mx-4 text-white rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700">
        <div className="flex justify-between">
          <p className="text-white/85">Total Balance</p>
          <EllipsisVertical className="text-white/85" size={20} />
        </div>

        <div>
          <p className="text-3xl font-bold">
            {balance.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>

          <div>
            <p className="inline-block px-2 mr-2 text-sm rounded-full bg-white/30 w-fit">
              3.2%
            </p>
            <p className="inline text-sm font-light text-white/85">
              from last month
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between ">
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center w-6 h-8 rounded-full bg-white/30 ">
              <MoveDown size={18} />
            </div>

            <div>
              <p className="text-xs font-light text-white/85">Income</p>

              <p className="text-sm font-bold">
                {income.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center justify-center w-6 h-8 rounded-full bg-white/30 ">
              <MoveUp size={18} />
            </div>

            <div>
              <p className="text-xs font-light text-white/85">Expenses</p>

              <p className="text-sm font-bold">
                {expenses.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceCard;
