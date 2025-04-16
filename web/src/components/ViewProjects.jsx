import "../scss/App.scss";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ViewProjects = ({ prove }) => {
  console.log(prove);
  return (
    <div className="container containerComponent">
      <Header />
      <main className="view_projects">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">
            Escaparate en línea para recoger ideas a través de la tecnología
          </p>
          <Link className="button--link--view-proyects" to="/start">
            Nuevo Proyecto
          </Link>
        </section>
        <section className="projectCardBox">
          {prove.map((projectMates) => {
            return (
              <ProjectCard dataMate={projectMates} key={projectMates.autor} />
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ViewProjects;
