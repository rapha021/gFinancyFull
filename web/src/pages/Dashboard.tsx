import ShortcutsBar from "../components/ShortcutsBar";
import TotalBalanceCard from "../components/TotalBalanceCard";
import TransactionsList from "../components/TransactionsList";

const Dashboard = () => {
  return (
    <>
      <TotalBalanceCard balance={2500} income={3000} expenses={500} />
      <ShortcutsBar />
      <TransactionsList />
    </>
  );
};

export default Dashboard;
