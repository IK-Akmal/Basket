import React from 'react';
import { useForm } from 'react-hook-form';
import { useProductContext } from '../../context/ProductContext';
import Input from '../Input/Input';

import styles from './AddDiscount.module.css';

const AddDiscount = () => {
  const {
    register, handleSubmit, reset, formState: { errors },
  } = useForm<{ discount: number }>();

  const { addDiscount, removeDiscount } = useProductContext();

  const onSubmit = handleSubmit((state) => {
    addDiscount(state.discount);
    reset();
  });

  return (
    <section className={styles.addDiscount}>
      <h2>Установить скидку</h2>
      <form onSubmit={onSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="discount">
          Скидка
          <Input
            {
            ...register(
              'discount',
              {
                required: { message: 'Обязательное поле', value: true },
                max: { message: 'значение поля не должно превышать 100', value: 100 },
                min: { message: 'значение поля не должно быть меньше 0', value: 0 },
              },
            )}
            id="discount"
            type="number"
          />
          {
            errors.discount && (
              <span className={styles.error}>
                {errors.discount.message}
              </span>
            )
          }
        </label>
        <div role="group" className={styles.btnWrapper}>
          <button type="submit">Установить скидку</button>
          <button onClick={removeDiscount} type="button">Убрать скидки</button>
        </div>
      </form>
    </section>
  );
};

export default AddDiscount;
