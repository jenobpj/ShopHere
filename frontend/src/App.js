import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import Homescreen from "./Pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productscreen from "./Pages/ProductScreen";
import Cartscreen from "./Pages/CartScreen";
import Loginscreen from "./Pages/LoginScreen";
import RegisterScreen from "./Pages/RegisterScreen";
import ProfileScreen from "./Pages/ProfileScreen";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/login" element={<Loginscreen />} />
            <Route path="/register" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/product/:id" element={<Productscreen />} />
            <Route path="/cart">
              <Route path=":id" element={<Cartscreen />} />
              <Route path="" element={<Cartscreen />} />
            </Route>
            <Route path="/" element={<Homescreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
