import { FC } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import styles from './AddProduct.module.css';
import AddProductProps from './AddProduct.props';
import { IProduct } from '../../model/IProduct';
import { useProductContext } from '../../context/ProductContext';

const AddProduct: FC<AddProductProps> = ({ className, ...props }) => {
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<Omit<IProduct, 'id'>>();
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
          {
            errors.barCode && (
              <span className={styles.error}>
                Пожалуйста, введите идентификатор продукта
              </span>
            )
          }
        </label>

        <label className={styles.label} htmlFor="name-product">
          Название товара:
          <input {...register('name', { required: true, validate: (value) => !!value.trim() })} className={styles.input} id="name-product" type="text" />
          {
            errors.name && (
              <span className={styles.error}>
                Пожалуйста, введите название продукта
              </span>
            )
          }
        </label>

        <label className={styles.label} htmlFor="price-product">
          Цена товара:
          <input {...register('price', { required: true })} className={styles.input} id="price-product" type="number" />
          {
            errors.price && (
              <span className={styles.error}>
                Пожалуйста, введите цену продукта
              </span>
            )
          }
        </label>

        <button type="submit">Добавить</button>
      </form>
    </div>
  );
};

export default AddProduct;
