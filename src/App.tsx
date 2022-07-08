import styles from './App.module.css';
import AddProduct from './components/AddProduct/AddProduct';

const App = () => (
  <div className={styles.app}>
    <main className={styles.main}>
      <AddProduct />
      <div />
    </main>
  </div>
);

export default App;
