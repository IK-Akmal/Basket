import { FC } from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import styles from './AddProduct.module.css';
import AddProductProps from './AddProduct.props';
import { IProduct } from '../../model/IProduct';
import { useProductContext } from '../../context/ProductContext';
import Input from '../Input/Input';

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
          Числовой идентификатор товара
          <Input {...register('barCode', { required: true })} id="id-product" type="number" />
          {
            errors.barCode && (
              <span className={styles.error}>
                Пожалуйста, введите идентификатор продукта
              </span>
            )
          }
        </label>

        <label className={styles.label} htmlFor="name-product">
          Название товара
          <Input
            id="name-product"
            type="text"
            {...register('name', { required: true, validate: (value) => !!value.trim() })}
          />
          {
            errors.name && (
              <span className={styles.error}>
                Пожалуйста, введите название продукта
              </span>
            )
          }
        </label>

        <label className={styles.label} htmlFor="price-product">
          Цена товара
          <Input {...register('price', { required: true })} id="price-product" type="number" />
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
