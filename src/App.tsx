import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/products/ProductPage";
import ProductInfo from "./pages/products/ProductInfo";
import Cart from "./pages/cart/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path=":slug" element={<ProductInfo />} />
          </Route>
          <Route path="checkout" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
