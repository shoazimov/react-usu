import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import ProductList from "./components/productList/ProductList";
import Mentors from './components/mentors/Mentors';

const App = () => {
  return (
    <div>
      <Intro />
      <Mentors />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
};

export default App;
