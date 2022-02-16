import logoSmall from '../images/awesome-cards-footer.png';
import '../style/Footer.scss';

function Footer(props) {
  return (
    <footer className="footer">
      <small className="copyFooter">Awesome profile-cards &copy; 2021</small>
      <img className="logoFooter" src={logoSmall} alt="Logo Adalab" />
    </footer>
  );
}

export default Footer;
