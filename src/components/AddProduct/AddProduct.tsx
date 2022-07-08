import { FC } from 'react';
import styles from './AddProduct.module.css';
import AddProductProps from './AddProduct.props';

const AddProduct: FC<AddProductProps> = ({ className, ...props }) => (
  <div className={styles.addproduct} {...props}>
    <form className={styles.form}>
      <label className={styles.label} htmlFor="id-product">
        Числовой идентификатор товара:
        <input className={styles.input} id="id-product" name="id" type="number" />
      </label>

      <label className={styles.label} htmlFor="name-product">
        Название товара:
        <input className={styles.input} id="name-product" name="name" type="text" />
      </label>
      <label className={styles.label} htmlFor="price-product">
        Цена товара:
        <input className={styles.input} id="price-product" name="price" type="number" />
      </label>
    </form>
  </div>
);

export default AddProduct;
