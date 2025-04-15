import "../scss/App.scss";
import landingImg from "../images/landing_img.jpg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <main className="landing">
      <section className="landing_text">
        <h1 className="landing_text_title">PROYECTOS MOLONES</h1>
        <h2 className="landing_text_title">
          Tu espacio para guardar y compartir tus proyectos
        </h2>

        <Link className="landing_text_link" to="/start">
          Comenzar
        </Link>
      </section>
      <div className="landing_image">
        <img
          className="landing_image_src"
          src={landingImg}
          alt="Ilustración tech projects"
        />
      </div>
    </main>
  );
};

export default Landing;
