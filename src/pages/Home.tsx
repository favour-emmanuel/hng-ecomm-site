import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
};

export default Home;
