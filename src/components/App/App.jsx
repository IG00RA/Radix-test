import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { PageContainer } from "./App.styled";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import HomePage from "../../pages/HomePage/HomePage";
import ChairsPage from "../../pages/ChairsPage/ChairsPage";
import BedsPage from "../../pages/BedsPage/BedsPage";
import CabinetsPage from "../../pages/CabinetsPage/CabinetsPage";
import TablesPage from "../../pages/TablesPage/TablesPage";
import DressersPage from "../../pages/DressersPage/DressersPage";
import SofasPage from "../../pages/SofasPage/SofasPage";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };
  return (
    <Router>
      <PageContainer>
        <Header cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/chairs"
            element={<ChairsPage handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/beds"
            element={<BedsPage handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cabinets"
            element={<CabinetsPage handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/tables"
            element={<TablesPage handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/dressers"
            element={<DressersPage handleAddToCart={handleAddToCart} />}
          />
          <Route
            path="/sofas"
            element={<SofasPage handleAddToCart={handleAddToCart} />}
          />
        </Routes>
        <Footer />
      </PageContainer>
    </Router>
  );
}

export default App;
