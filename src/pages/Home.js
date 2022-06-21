import Search from "../components/Search";
import Header from "../components/Header";
import "./Home.css";

const Home = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <div className="home">
      <Header />
      <div className="home__body">
        <img
          src="https://1000marcas.net/wp-content/uploads/2020/02/logo-Google.png"
          alt="Google Logo"
        />
        <Search />
      </div>
      <footer className="home_footer">
        <p>Desarrollado por: Ciro Pérez Iglesias &copy; {year}</p>
      </footer>
    </div>
  );
};

export default Home;
