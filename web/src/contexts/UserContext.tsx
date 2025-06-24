import { createContext, useContext, type ReactNode } from "react";

interface IUserProvider {
  children: ReactNode;
}

interface IUserContext {
  getUserBankAccounts: () => void;
  getUserCards: () => void;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

const UserProvider = ({ children }: IUserProvider) => {
  const getUserBankAccounts = () => {};
  const getUserCards = () => {};

  return (
    <UserContext.Provider value={{ getUserBankAccounts, getUserCards }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);

export default UserProvider;
