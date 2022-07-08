import { FC } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import styles from './AddProduct.module.css';
import AddProductProps from './AddProduct.props';
import { IProduct } from '../../model/IProduct';
import { useProductContext } from '../../context/ProductContext';

const AddProduct: FC<AddProductProps> = ({ className, ...props }) => {
  const { register, handleSubmit, reset } = useForm<Omit<IProduct, 'id'>>();
  const { addProduct } = useProductContext();

  const onSubmit = handleSubmit((product) => {
    addProduct(product);
    reset();
  });

  return (
    <div className={cn(className, styles.addproduct)} {...props}>
      <form onSubmit={onSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="id-product">
          Числовой идентификатор товара:
          <input {...register('barCode', { required: true })} className={styles.input} id="id-product" type="number" />
        </label>

        <label className={styles.label} htmlFor="name-product">
          Название товара:
          <input {...register('name', { required: true, validate: (value) => !!value.trim() })} className={styles.input} id="name-product" type="text" />
        </label>

        <label className={styles.label} htmlFor="price-product">
          Цена товара:
          <input {...register('price', { required: true })} className={styles.input} id="price-product" type="number" />
        </label>

        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddProduct;
