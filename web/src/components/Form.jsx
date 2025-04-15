import GetAvatar from "./GetAvatar";

function Form(props) {
  const handleChangePrName = (event) => {
    props.onInputProjectName(event.target.value);
  };
  const handleChangePrSlogan = (event) => {
    props.onInputProjectSlogan(event.target.value);
  };
  const handleChangePrRepository = (event) => {
    props.onInputProjectRepository(event.target.value);
  };
  const handleChangePrDemo = (event) => {
    props.onInputProjectDemo(event.target.value);
  };
  const handleChangePrTechnologies = (event) => {
    props.onInputProjectTechnologies(event.target.value);
  };
  const handleChangePrDescription = (event) => {
    props.onInputProjectDescription(event.target.value);
  };
  const handleChangeUsName = (event) => {
    props.onInputUserName(event.target.value);
  };
  const handleChangeUsJob = (event) => {
    props.onInputUserJob(event.target.value);
  };
  const handleChangeImgProject = (avatar) => {
    props.onInputProjectImage(avatar);
  };
  const handleChangeImgAuthor = (avatar) => {
    props.onInputAuthorImage(avatar);
  };
  const handleSaveProject = (event) => {
    event.preventDefault();
    props.onSaveProject();
  };

  return (
    <form className="addForm">
      <h2 className="title">Información</h2>
      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
        <input
          className="addForm__input"
          type="text"
          onChange={handleChangePrName}
          name="name"
          id="name"
          placeholder="Nombre del proyecto"
          value={props.projectInfo.name}
        />
        <input
          className="addForm__input"
          type="text"
          onChange={handleChangePrSlogan}
          name="slogan"
          id="slogan"
          placeholder="Slogan"
          value={props.projectInfo.slogan}
        />
        <div className="addForm__2col">
          <input
            className="addForm__input"
            type="url"
            onChange={handleChangePrRepository}
            name="repo"
            id="repo"
            placeholder="https://github.com/nombre-repo"
            value={props.projectInfo.repo}
          />
          <input
            className="addForm__input"
            type="url"
            onChange={handleChangePrDemo}
            name="demo"
            id="demo"
            placeholder="https://nombre-proyecto.com"
            value={props.projectInfo.demo}
          />
        </div>
        <input
          className="addForm__input"
          type="text"
          onChange={handleChangePrTechnologies}
          name="technologies"
          id="technologies"
          placeholder="Tecnologías"
          value={props.projectInfo.technologies}
        />
        <textarea
          className="addForm__input"
          type="text"
          onChange={handleChangePrDescription}
          name="desc"
          id="desc"
          placeholder="Descripción"
          value={props.projectInfo.desc}
          rows="5"
        ></textarea>
      </fieldset>

      <fieldset className="addForm__group">
        <legend className="addForm__title">Cuéntanos sobre la autora</legend>
        <input
          className="addForm__input"
          type="text"
          onChange={handleChangeUsName}
          name="autor"
          id="autor"
          placeholder="Nombre"
          value={props.projectInfo.autor}
        />
        <input
          className="addForm__input"
          type="text"
          onChange={handleChangeUsJob}
          name="job"
          id="job"
          placeholder="Trabajo"
          value={props.projectInfo.job}
        />
      </fieldset>

      <fieldset className="addForm__group--upload">
        <GetAvatar
          text="Subir foto del proyecto"
          updateAvatar={handleChangeImgProject}
          avatar={props.projectInfo.image}
        />
        <GetAvatar
          text="Subir foto de la autora"
          updateAvatar={handleChangeImgAuthor}
          avatar={props.projectInfo.photo}
        />
        <button className="button--large" onClick={handleSaveProject}>
          Guardar proyecto
        </button>
      </fieldset>
      <div className="link-project">
        {/* Renderizar el enlace solo si isLinkVisible es true */}
        {props.isLinkVisible && (
          <a
            href={props.urlProject.cardURL}
            target="_blank"
            className="button-link"
          >
            Accede a tu tarjeta
          </a>
        )}
      </div>
    </form>
  );
}

export default Form;
