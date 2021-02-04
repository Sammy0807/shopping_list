import './App.css';
import { Header } from './components/Header';
import { Provider as ShoppingListProvider } from './context/shoppingContext';

function App() {
  return (
    <ShoppingListProvider>
      <Header />
    </ShoppingListProvider>
  );
}

export default App;
