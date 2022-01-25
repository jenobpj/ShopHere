import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to My shop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
