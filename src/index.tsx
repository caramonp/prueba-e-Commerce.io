import React from 'react';
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductListScreen from './screens/ProductListScreen/ProductListScreen';
import reportWebVitals from './reportWebVitals';
import ProductDetailScreen from './screens/ProductDetailScreen/ProductDetailScreen';
import CheckoutScreen from './screens/CheckoutScreen/CheckoutScreen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} >
          <Route index element={<HomeScreen/>}/>
          <Route path="products" element={<ProductListScreen/>}/>
          <Route path='products/:productId' element={<ProductDetailScreen />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
          <Route path='checkout' element={<CheckoutScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
