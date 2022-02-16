import { Link } from 'react-router-dom';
import logoLanding from '../images/awesome-cards.png';
const Landing = () => {
  return (
    <section className="main">
      <img
        className="logo"
        src={logoLanding}
        alt="Logo Awesome Profile-Cards"
      />
      <h1 className="h1">Crea tu tarjeta de visita</h1>
      <p className="description">
        Crea mejores contactos profesionales de forma fácil y cómoda
      </p>
      <article>
        <ul className="indexList">
          <li className="listItem">
            <i className="fas fa-palette indexIcon"></i>Diseña
          </li>
          <li className="listItem">
            <i className="fas fa-fill-drip indexIcon"></i>Rellena
          </li>
          <li className="listItem ">
            <i className="fas fa-share-alt indexIcon"></i>Comparte
          </li>
        </ul>
      </article>
      <Link to="/card">
        <button className="startButton">Comenzar</button>
      </Link>
    </section>
  );
};
export default Landing;
