import { createContext, useContext, type ReactNode } from "react";

interface ICardProvider {
  children: ReactNode;
}

interface ICardContext {
  newCardSubmit: () => void;
}

export const CardContext = createContext<ICardContext>({} as ICardContext);

const CardProvider = ({ children }: ICardProvider) => {
  const newCardSubmit = async () => {
    console.log("Cartao criado");
  };

  return (
    <CardContext.Provider value={{ newCardSubmit }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => useContext(CardContext);

export default CardProvider;
