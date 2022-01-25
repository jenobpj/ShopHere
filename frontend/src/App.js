import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";
import Homescreen from "./Pages/HomeScreen";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Homescreen />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
