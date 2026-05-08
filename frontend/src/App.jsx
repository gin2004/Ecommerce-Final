import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import OrderDetail from './pages/OrderDetail';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Login doesn't have the main Header/Footer */}
          <Route path="/login" element={<Login />} />
          
          {/* Main Layout */}
          <Route path="*" element={
            <>
              <Header />
              <main className="main-content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order/:id" element={<OrderDetail />} />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
