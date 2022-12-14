import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
// import { About } from "./pages/About";
import { Navbar } from "./components/Navbar";
import Fallback from "./components/Fallback";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import About from "./pages/About";

// const LazyAbout = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
