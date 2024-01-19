import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/products/ProductPage";
import Cart from "./pages/cart/Cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="products" element={<ProductPage />}></Route>
          <Route path="checkout" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
