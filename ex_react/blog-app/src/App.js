import { Container, Title, Button } from "./styled";
import Modal from "./components/Modal";

import "./App.css";
import Header from "./components/Header";
import Nav from './components/Nav';
import ArticleList from './components/ArticleList';
import Footer from './components/Footer';


function App() {
  return (
    <Container>
      <Header/>
      <Nav />
      <ArticleList />
      <Footer />
    </Container>
  );
}

export default App;
