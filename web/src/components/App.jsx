import "../scss/App.scss";
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import Preview from "./Preview";
import localStorage from "../services/localStorage";
import { Routes, Route } from "react-router-dom";
import Landing from "./Landing";
import { Link } from "react-router-dom";
import ViewProjects from "./ViewProjects";

const URL_PRODUCTION =
  "https://promo-48-module-4-team-1-proyectos.onrender.com";
const URL_LOCAL = "http://localhost:5000";

const URL = process.env.NODE_ENV === "development" ? URL_PRODUCTION : URL_LOCAL;

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
  console.log(projectInfo);
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
  const [prove, setProve] = useState([]);

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
    fetch(`http://localhost:5000/api/project`, {
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

  //Hacer el fetch con el use Effect
  useEffect(() => {
    fetch(`http://localhost:5000/api/infoprojects`)
      .then((response) => response.json())
      .then((data) => {
        setProve(data.result);
      });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/start"
          element={
            <div className="container">
              <Header />

              <main className="main">
                <section className="hero">
                  <h2 className="title">Proyectos molones</h2>
                  <p className="hero__text">
                    Escaparate en línea para recoger ideas a través de la
                    tecnología
                  </p>
                  <Link className="button--link" to="/projects">
                    Ver proyectos
                  </Link>
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
          }
        />
        <Route path="/projects" element={<ViewProjects prove={prove} />} />
      </Routes>
    </>
  );
}

export default App;
