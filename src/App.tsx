import styles from './App.module.css';
import AddProduct from './components/AddProduct/AddProduct';
import ProductList from './components/ProductList/ProductList';
import { useProductContext } from './context/ProductContext';

const App = () => {
  const { state } = useProductContext();
  return (
    <div className={styles.app}>
      <main className={styles.main}>
        <AddProduct />
        <ProductList products={state} />
      </main>
    </div>
  );
};

export default App;
