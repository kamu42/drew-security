import { Home } from 'src/homepage/homepage';
import styles from './app.module.css';


import Header from 'src/header/header';

export function App() {
  return (
    
    <div className={styles['page']} >
      <link href="https://fonts.cdnfonts.com/css/satoshi" rel="stylesheet"></link>
      <Header />
      <Home />
    </div>
  );
}

export default App;
