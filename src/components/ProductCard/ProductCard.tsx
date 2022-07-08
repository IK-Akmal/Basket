import { FC } from 'react';
import { useProductContext } from '../../context/ProductContext';
import { IProduct } from '../../model/IProduct';
import { ReactComponent as TrashIcon } from '../../assets/trash.svg';
import styles from './ProductCard.module.css';

const ProductCard: FC<IProduct> = ({
  barCode, id, name, price,
}) => {
  const { removeProduct } = useProductContext();

  return (
    <tr className={styles.row}>
      <td>{barCode}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button type="button" onClick={() => removeProduct(id)}>
          <TrashIcon />
        </button>
      </td>
    </tr>
  );
};

export default ProductCard;
