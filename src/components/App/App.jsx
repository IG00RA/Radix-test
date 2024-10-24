import ProductPage from "../ProductPage/ProductPage";
import { useState } from "react";
import { PageContainer } from "./App.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <PageContainer>
      <Header cartCount={cartCount} />
      <ProductPage handleAddToCart={handleAddToCart} />
      <Footer />
    </PageContainer>
  );
}

export default App;
