import { FC } from 'react';
import { IProduct } from '../../model/IProduct';
import ProductCard from '../ProductCard/ProductCard';
import styles from './ProductList.module.css';

type ProductListProps = {
  products: IProduct[];
};

const ProductList: FC<ProductListProps> = ({ products }) => (
  products.length === 0
    ? (
      <div className={styles.wrapperEmpty}>
        <span>Список продуктов пуст</span>
      </div>
    )

    : (
      <div className={styles.wrapper}>

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
        </table>
        <div className={styles.statusBar}>
          <span>
            количество:
            {products.length}
          </span>
          <span>
            Итоговая цена:
            {products.reduce((acc, b) => acc + Number(b.price), 0)}
          </span>
        </div>
      </div>
    )
);

export default ProductList;
