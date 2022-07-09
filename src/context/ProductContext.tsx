import { nanoid } from 'nanoid';
import {
  createContext, FC, ReactNode, useContext, useMemo, useState,
} from 'react';

import { IProduct } from '../model/IProduct';

type Product = Omit<IProduct, 'id'>;

type ProductContextType = {
  products: IProduct[],
  discount: number;
  addProduct(product: Product): void;
  removeProduct(id: string): void;
  addDiscount(discount: number): void;
  removeDiscount(): void;
};

type ProductContextTypeProps = {
  children: ReactNode
};

export const ProductContext = createContext<ProductContextType | null>(null);

export const useProductContext = () => useContext(ProductContext) as ProductContextType;

export const ProductContextProvider: FC<ProductContextTypeProps> = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [discount, setDiscount] = useState<number>(0);

  function addProduct({ name, price, barCode }: Product): void {
    const newProduct: IProduct = {
      id: nanoid(),
      barCode: Number(barCode),
      name,
      price: Number(price),
    };
    setProducts((pre) => [...pre, newProduct]);
  }

  function removeProduct(id: string): void {
    setProducts(products.filter((todo) => todo.id !== id));
  }

  function addDiscount(_discount: number): void {
    if (_discount >= 0 && _discount <= 100) {
      setDiscount(_discount);
    }
  }

  function removeDiscount(): void {
    addDiscount(0);
  }

  const TodoContextProviderValueMemo = useMemo(
    () => ({
      products,
      discount,
      addProduct,
      removeProduct,
      addDiscount,
      removeDiscount,
    }),
    [products, discount],
  );

  return (
    <ProductContext.Provider value={TodoContextProviderValueMemo}>
      {children}
    </ProductContext.Provider>
  );
};
