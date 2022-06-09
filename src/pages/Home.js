import Header from "../components/Header";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <img
          src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
          alt="Google Logo"
        />
        <p> Aqui va la búsqueda</p>
      </div>
    </div>
  );
};

export default Home;
