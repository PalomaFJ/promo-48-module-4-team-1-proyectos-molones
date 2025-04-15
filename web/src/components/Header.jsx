import logoAdalab from "../images/adalab.png";
import companyLogo from "../images/laptop-code-solid.svg";

function Header () {
    return (
        <header className="header">
        <a
          className="header__brand"
          href="./"
          title="Haz click para volver a la página inicial"
        >
          <img
            className="header__companyLogo"
            src={companyLogo}
            alt="Logo proyectos molones"
          />
          <h1 className="header__title">Proyectos molones</h1>
        </a>
        <img className="logoSponsor" src={logoAdalab} alt="Logo Adalab" />
      </header>
    )
}

export default Header;