import logoHeader from '../images/awesome-cards-header.png';
import '../style/Header.scss';

function Header() {
  return (
    <header className="header">
      <a href="./index.html">
        <img className="logoHeader" src={logoHeader} alt="Logo APC" />
      </a>
    </header>
  );
}

export default Header;
