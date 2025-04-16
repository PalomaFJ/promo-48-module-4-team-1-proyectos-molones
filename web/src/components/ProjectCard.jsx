//import imgAuthor from "../images/avatar.webp";

const ProjectCard = ({ dataMate }) => {
  console.log(dataMate);
  return (
    <article className="card cardComponent">
      <h2 className="card__projectTitle">
        <span className="card__projectTitle--text">Personal Project Card</span>
      </h2>

      <div className="card__author">
        <div className="card__authorPhoto">
          <img src={dataMate.photo} alt="imagen del autor" />
        </div>
        <p className="card__job">{dataMate.job}</p>
        <h3 className="card__name">{dataMate.autor}</h3>
      </div>

      <div className="card__project">
        <h3 className="card__name">{dataMate.name}</h3>
        <p className="card__slogan">{dataMate.slogan}</p>
        <h3 className="card__descriptionTitle">Product Description</h3>
        <p className="card__description">{dataMate.desc}</p>

        <div className="card__technicalInfo">
          <p className="card__technologies">{dataMate.technologies}</p>

          <a
            className="icon icon__www"
            href={dataMate.demo}
            target="_blank"
            title="Haz click para ver el proyecto online"
          >
            Web link
          </a>
          <a
            className="icon icon__github"
            href={dataMate.repo}
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
