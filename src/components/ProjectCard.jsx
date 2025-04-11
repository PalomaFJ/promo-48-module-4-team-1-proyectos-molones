import imgAuthor from "../images/avatar.webp";

const ProjectCard = () => {
  return (
    <article className="card cardComponent">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal project card</span>
      </h2>

      <div className="card__author">
        <div className="card__authorPhoto">
          <img src={imgAuthor} alt="imagen del autor" />
        </div>
        <p className="card__job">Full stack Developer</p>
        <h3 className="card__name">Emmelie Bjôrklund</h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">Elegant Workspace</h3>
        <p className="card__slogan">Diseños exclusivos</p>
        <h3 className="card__descriptionTitle">Product Description</h3>
        <p className="card__description">
          Tiene musho peligro caballo blanco caballo negroorl te voy a borrar el
          cerito está la cosa muy malar qué dise usteer llevame al sircoo.
        </p>

        <div className="card__technicalInfo">
          <p className="card__technologies">React JS - HTML - CSS"</p>

          <a
            className="icon icon__www"
            href=""
            target="_blank"
            title="Haz click para ver el proyecto online"
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href=""
            target="_blank"
            title="Haz click para ver el código del proyecto"
          >
            GitHub link
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
