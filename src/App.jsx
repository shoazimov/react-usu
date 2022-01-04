import { useContext } from "react";
import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import ProductList from "./components/productList/ProductList";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div>
      <Intro />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
