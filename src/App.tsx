import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductListPage from './pages/productListPage';
import ProductDetails from './pages/productDetails';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ErrorPage from './pages/error';
import ErrorBoundary from './utils/ErrorBoundary';

const App: React.FC = () => {
  return (
    <>
      <ErrorBoundary>
        <Navbar />
        <Routes>
          <Route index path="/" element={<ProductListPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
