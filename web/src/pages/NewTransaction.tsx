import Input from "../components/Input";

const NewTransaction = () => {
  return (
    <section className="w-full px-4">
      <p className="mb-4 text-2xl font-semibold">New Transaction</p>

      <form>
        <div className="flex items-center justify-center w-full gap-4 p-2 mb-6 bg-gray-200 rounded-lg h-14">
          <input
            type="radio"
            value="expanse"
            className="hidden peer/expanse"
            name="transactionType"
            id="expanse"
            defaultChecked
          />
          <label
            className="flex items-center justify-center w-full h-full font-semibold transition-all duration-150 rounded-lg peer-checked/expanse:bg-white peer-checked/expanse:shadow-sm"
            htmlFor="expanse"
          >
            Expanse
          </label>

          <input
            type="radio"
            value="income"
            name="transactionType"
            className="hidden peer/income"
            id="income"
          />
          <label
            className="flex items-center justify-center w-full h-full font-semibold transition-all duration-150 rounded-lg peer-checked/income:bg-white peer-checked/income:shadow-sm"
            htmlFor="income"
          >
            Income
          </label>
        </div>

        <Input
          placeholder="0.00"
          title="Amount"
          inputIcon={true}
          type="number"
        />

        <label htmlFor="categorySelect">
          <p className="mb-2 font-semibold">Category</p>
        </label>
        <select
          className="w-full mb-6 bg-gray-200 rounded-lg h-14 focus:outline-2 outline-emerald-500/50"
          id="categorySelect"
        >
          <option value="food">Food & Dining</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="shopping">Shopping</option>
          <option value="utilities">Utilities</option>
          <option value="health">Health</option>
          <option value="travel">Travel</option>
          <option value="other">Other</option>
        </select>

        <Input title="Date" type="date" />

        <textarea
          placeholder="Add note"
          className="w-full p-4 mb-6 bg-gray-200 rounded-lg h-36 focus:outline-2 outline-emerald-500/50"
        ></textarea>

        <button className="w-full font-semibold text-white rounded-lg h-14 bg-emerald-500">
          Add transaction
        </button>
      </form>
    </section>
  );
};

export default NewTransaction;
