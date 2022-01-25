import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container, Form } from "react-bootstrap";
import Homescreen from "./Pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productscreen from "./Pages/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/product/:id" element={<Productscreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
