import { FC } from 'react';
import { IProduct } from '../../model/IProduct';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

type ProductListProps = {
  products: IProduct[];
  discount: number;
};

const ProductList: FC<ProductListProps> = ({ products, discount }) => {
  const totalPrice = products.reduce((acc, b) => acc + Number(b.price), 0);
  const discountedAmount = totalPrice - (totalPrice * discount) / 100;
  return (
    products.length === 0
      ? (
        <div className={styles.wrapperEmpty}>
          <span>Список продуктов пуст</span>
        </div>
      )

      : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Числовой идентификатор товара</th>
              <th>Название товара</th>
              <th>Цена товара</th>
              <th>Действия</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={1}>
                количество:
                {products.length}
              </td>
              <td colSpan={3}>
                {
                  discount > 0
                    ? (
                      <span className={styles.discount}>
                        Общая Сумма:
                        <s>
                          {totalPrice}
                        </s>
                        {' '}
                        Итоговая сумма со скидкой:
                        {' '}
                        {discountedAmount}
                        {' '}
                        Скидка:
                        {' '}
                        {discount}
                        %
                      </span>
                    )
                    : (
                      <span>
                        Итоговая Сумма:
                        {totalPrice}
                      </span>
                    )
                }
              </td>
            </tr>
          </tfoot>
        </table>
      )
  );
};

export default ProductList;
