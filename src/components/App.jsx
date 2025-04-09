import "../scss/App.scss";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import localStorage from "../services/localStorage";

//inputs

function App() {
  /* const [avatar, setAvatar] = useState("");
  const updateAvatar = (avatar) => {
    setAvatar(avatar);
  }; */

  const [isLinkVisible, setIsLinkVisible] = useState(false);
  const [urlProject, setUrlProject] = useState({});
  const [projectInfo, setProjectInfo] = useState(
    localStorage.get("projectInfo", {
      photo: "",
      image: "",
      name: "",
      slogan: "",
      desc: "",
      repo: "",
      demo: "",
      technologies: "",
      autor: "",
      job: "",
    })
  );
  localStorage.set("projectInfo", projectInfo);

  function handleClickReset(ev) {
    ev.preventDefault();
    localStorage.clear();
    setProjectInfo({
      photo: "",
      image: "",
      name: "",
      slogan: "",
      desc: "",
      repo: "",
      demo: "",
      technologies: "",
      autor: "",
      job: "",
    });
  }

  const handleChangeImageAuthor = (value) => {
    setProjectInfo({
      ...projectInfo,
      photo: value,
    });
  };
  const handleChangeImageProject = (value) => {
    setProjectInfo({
      ...projectInfo,
      image: value,
    });
  };

  const handleChangeProjectName = (value) => {
    setProjectInfo({
      ...projectInfo,
      name: value,
    });
  };

  const handleChangeProjectSlogan = (value) => {
    setProjectInfo({
      ...projectInfo,
      slogan: value,
    });
  };

  const handleChangeProjectRepository = (value) => {
    setProjectInfo({
      ...projectInfo,
      repo: value,
    });
  };

  const handleChangeProjectDemo = (value) => {
    setProjectInfo({
      ...projectInfo,
      demo: value,
    });
  };

  const handleChangeProjectTechnologies = (value) => {
    setProjectInfo({
      ...projectInfo,
      technologies: value,
    });
  };

  const handleChangeProjectDescription = (value) => {
    setProjectInfo({
      ...projectInfo,
      desc: value,
    });
  };

  const handleChangeUserName = (value) => {
    setProjectInfo({
      ...projectInfo,
      autor: value,
    });
  };
  const handleChangeUserJob = (value) => {
    setProjectInfo({
      ...projectInfo,
      job: value,
    });
  };

  const handleSubmitProject = () => {
    const validFields = Object.values(projectInfo).every(
      (value) => value && value !== ""
    );
    if (!validFields) {
      alert(
        "Por favor, completa todos los campos antes de enviar el proyecto."
      );
      return;
    }
    fetch("https://dev.adalab.es/api/projectCard", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(projectInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUrlProject(data);
        setIsLinkVisible(true);
        alert("¡Proyecto enviado con éxito!");
      });
  };

  return (
    <>
      <div className="container">
        <Header />

        <main className="main">
          <section className="hero">
            <h2 className="title">Proyectos molones</h2>
            <p className="hero__text">
              Escaparate en línea para recoger ideas a través de la tecnología
            </p>
            <a className="button--link" href="./">
              Ver proyectos
            </a>
            <button
              className="button--link"
              onClick={handleClickReset}
              type="reset"
            >
              Reset
            </button>
          </section>

          <Preview project={projectInfo} />
          <Form
            onInputAuthorImage={handleChangeImageAuthor}
            onInputProjectImage={handleChangeImageProject}
            onInputProjectName={handleChangeProjectName}
            onInputProjectSlogan={handleChangeProjectSlogan}
            onInputProjectRepository={handleChangeProjectRepository}
            onInputProjectDemo={handleChangeProjectDemo}
            onInputProjectTechnologies={handleChangeProjectTechnologies}
            onInputProjectDescription={handleChangeProjectDescription}
            onInputUserName={handleChangeUserName}
            onInputUserJob={handleChangeUserJob}
            onSaveProject={handleSubmitProject}
            urlProject={urlProject}
            isLinkVisible={isLinkVisible}
            projectInfo={projectInfo}
          />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
