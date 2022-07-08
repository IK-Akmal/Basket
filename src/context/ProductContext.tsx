import { nanoid } from 'nanoid';
import {
  createContext, FC, ReactNode, useContext, useMemo, useState,
} from 'react';

import { IProduct } from '../model/IProduct';

type Product = Omit<IProduct, 'id'>;

type ProductContextType = {
  state: IProduct[],
  addTodo(product: Product): void;
  removeTodo(id: string): void;
};

type ProductContextTypeProps = {
  children: ReactNode
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => useContext(ProductContext) as ProductContextType;

export const ProductContextProvider: FC<ProductContextTypeProps> = ({ children }) => {
  const [state, setState] = useState<IProduct[]>([]);

  function addTodo({ name, price, barCode }: Product): void {
    const newTodo: IProduct = {
      id: nanoid(),
      barCode,
      name,
      price,
    };
    setState((pre) => [newTodo, ...pre]);
  }

  function removeTodo(id: string): void {
    setState(state.filter((todo) => todo.id !== id));
  }

  const TodoContextProviderValueMemo = useMemo(
    () => ({
      state,
      addTodo,
      removeTodo,
    }),
    [state],
  );

  return (
    <ProductContext.Provider value={TodoContextProviderValueMemo}>
      {children}
    </ProductContext.Provider>
  );
};
