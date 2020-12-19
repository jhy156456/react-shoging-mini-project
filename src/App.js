import logo from "./logo.svg";
import "./App.css";
import "./pages/Home";
import { Route } from "react-router-dom";
import ManufacturerDetail from "./pages/ManufacturerDetail";
import Home from "./pages/Home";
import { Container } from "@material-ui/core";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" style={{ paddingLeft: 40, paddingRight: 40 }}>
        <Header title="Blog" />
        <Route path="/" component={Home} exact={true}/>
        <Route path="/store/:id" component={ManufacturerDetail} />
      </Container>

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </div>
  );
}

export default App;
