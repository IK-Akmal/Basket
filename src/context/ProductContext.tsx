import { nanoid } from 'nanoid';
import {
  createContext, FC, ReactNode, useContext, useMemo, useState,
} from 'react';

import { IProduct } from '../model/IProduct';

type Product = Omit<IProduct, 'id'>;

type ProductContextType = {
  state: IProduct[],
  addProduct(product: Product): void;
  removeProduct(id: string): void;
};

type ProductContextTypeProps = {
  children: ReactNode
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => useContext(ProductContext) as ProductContextType;

export const ProductContextProvider: FC<ProductContextTypeProps> = ({ children }) => {
  const [state, setState] = useState<IProduct[]>([]);

  function addProduct({ name, price, barCode }: Product): void {
    const newProduct: IProduct = {
      id: nanoid(),
      barCode,
      name,
      price,
    };
    setState((pre) => [...pre, newProduct]);
  }

  function removeProduct(id: string): void {
    setState(state.filter((todo) => todo.id !== id));
  }

  const TodoContextProviderValueMemo = useMemo(
    () => ({
      state,
      addProduct,
      removeProduct,
    }),
    [state],
  );

  return (
    <ProductContext.Provider value={TodoContextProviderValueMemo}>
      {children}
    </ProductContext.Provider>
  );
};
