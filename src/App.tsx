import styles from './App.module.css';
import AddDiscount from './components/AddDiscount/AddDiscount';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';
import { useProductContext } from './context/ProductContext';

const App = () => {
  const { products, discount } = useProductContext();
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <AddProduct />
        <AddDiscount />
      </header>
      <main className={styles.main}>
        <ProductList products={products} discount={discount} />
      </main>
    </div>
  );
};

export default App;
