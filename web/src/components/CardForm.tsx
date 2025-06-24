import { useForm } from "react-hook-form";
import { useCardContext } from "../contexts/CardContext";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import Input from "./ui/Input";
import Select from "./ui/Select";

export interface ICardForm {
  name: string;
  brand: "Visa" | "MasterCard" | "Elo" | "Amex" | "Hipercard" | "Outros";
  bank: string;
  finalDigits: string;
  cardLimit: number;
  cardClosingDay: number;
  cardDueDate: number;
}

interface ICardFormProps {
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardForm = ({ setIsFormOpen }: ICardFormProps) => {
  const { newCardSubmit } = useCardContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ICardForm>();

  const containerVariants = {
    hiddenDiv: { opacity: 0, y: -30 },
    showDiv: {
      opacity: 1,
      y: 0,
    },
    hiddenSection: { opacity: 0 },
    showSection: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
    reset();
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hiddenSection"
      animate="showSection"
      exit="hiddenSection"
      className="absolute top-0 w-dvw h-dvh bg-black/30 z-50 px-4 flex justify-center items-center"
    >
      <motion.div
        variants={containerVariants}
        initial="hiddenDiv"
        animate="showDiv"
        exit="hiddenDiv"
        className="w-full h-fit bg-gray-100 rounded-2xl"
      >
        <div className="flex justify-between text-lg border-b-1 border-gray-400 p-4">
          <p className="font-semibold text-lg">Novo cartão</p>
          <X onClick={handleCloseForm} />
        </div>
        <form onSubmit={handleSubmit(newCardSubmit)} className="p-4">
          <Input
            type="text"
            placeholder="Ex:. Nubank"
            label="Nome"
            id="name"
            errors={errors.name}
            {...register("name", { required: true })}
          />

          <Select
            id="brand"
            label="Bandeira"
            options={[
              "Visa",
              "MasterCard",
              "Elo",
              "Amex",
              "Hipercard",
              "Outros",
            ]}
            {...register("brand")}
          />

          <Select
            id="bank"
            label="Conta associada"
            options={["Nubank", "Itau", "Inter"]}
            {...register("bank")}
          />

          <Input
            id="finalDigits"
            label="Ultimos números"
            placeholder="Ex:. 5690"
            type="string"
            errors={errors.finalDigits}
            {...register("finalDigits", { required: true })}
          />
          <Input
            id="closingDay"
            label="Dia de fechamento"
            placeholder="Ex:. 21"
            type="number"
            errors={errors.cardClosingDay}
            {...register("cardClosingDay", { required: true })}
          />
          <Input
            id="dueDate"
            label="Dia do vencimento da fatura"
            placeholder="Ex:. 10"
            type="number"
            errors={errors.cardDueDate}
            {...register("cardDueDate", { required: true })}
          />

          <Input
            id="cardLimit"
            label="Limite do cartão"
            placeholder="Ex:. R$ 1.500,00"
            type="number"
            errors={errors.cardLimit}
            {...register("cardLimit", { required: true })}
          />

          <div className="flex gap-2 justify-end mt-2">
            <button
              className="w-1/4 h-12 bg-red-700 rounded-lg text-white font-semibold"
              onClick={handleCloseForm}
            >
              Fechar
            </button>

            <button className="w-1/4 h-12 bg-emerald-500 rounded-lg text-white font-semibold">
              Salvar
            </button>
          </div>
        </form>
      </motion.div>
    </motion.section>
  );
};

export default CardForm;
