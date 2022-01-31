import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import Homescreen from "./Pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productscreen from "./Pages/ProductScreen";
import Cartscreen from "./Pages/CartScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/product/:id" element={<Productscreen />} />
            <Route path="/cart">
              <Route path=":id" element={<Cartscreen />} />
              <Route path="" element={<Cartscreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
