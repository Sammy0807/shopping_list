import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import InputBox from './components/InputBox';
import ShoppingList from './components/ShoppingList';
import { Provider as ShoppingListProvider } from './context/shoppingContext';
import { ModalProvider } from './components/modal/modalContext';

function App() {
  return (
    <ShoppingListProvider>
      <ModalProvider>
        <Header />
        <div className="container">
          <Balance />
          <InputBox />
          <ShoppingList />
        </div>
      </ModalProvider>
    </ShoppingListProvider>
  );
}

export default App;
