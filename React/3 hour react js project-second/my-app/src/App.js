import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Lists from './components/Lists'
import CartProvider from './store/CartProvider';
function App() {
  return (
 <CartProvider>
 <Header />
  <Lists />
 </CartProvider>

 
     
    
  );
}

export default App;
