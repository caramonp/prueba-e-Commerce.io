import { Outlet} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { CartProvider } from "./context/CartContext";


import './App.css';


function App() {
  return (
    <>
    <CartProvider>
      <div className="App">
          <Header/>
            <Outlet/>
          <Footer/>
        </div>
    </CartProvider>
    </>
  );
}

export default App;
