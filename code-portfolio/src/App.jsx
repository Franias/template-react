/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import profile from './assets/profile.jpg';
import cypress from './assets/cypress.jpg';
import selenium from './assets/selenium.png';
/**
 * Navbar component renders a navigation bar with a logo, navigation links, 
 * and icon images. The links include 'Sobre', 'Currículo', and 'Projetos'.
 */
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1G3V0mqC8VE7xqg" alt="Logo" width="87" height="60" />
      </div>
      <ul className="navbar-links">
        <li><a href="#sobreMim">Sobre</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#meusProjetos">Projetos</a></li>
      </ul>
      <div className="navbar-icons">
        <a href="https://github.com/Franias">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z1G3V0mqC8VE7xqh" alt="Icon 1" width="24" height="24" />
        </a>
        <a href="https://www.linkedin.com/in/francielli-pinheiro-dias-32b516187/">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z1G3V0mqC8VE7xqi" alt="Icon 2" width="24" height="24" />
        </a>
        <a href="mailto:francielli.dias@db.tec.br">
          <img src="https://dashboard.codeparrot.ai/api/assets/Z1G3V0mqC8VE7xqj" alt="Icon 3" width="24" height="24" />
        </a>
      </div>
    </nav>
  );
}

const ProfileCard = () => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.textContainer}>
        <h2 style={styles.greeting}>Olá, meu nome é</h2>
        <h1 style={styles.name}>Francielli Dias</h1>
        <p style={styles.description}>Sou analista de qualidade de software e automatizo testes na DBServer.</p>
      </div>
      <img 
        src={profile}
        alt="Profile" 
        style={styles.image}
      />
    </div>
  );
};

const SobreMimCard = () => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.textContainer}>
        <h2 id="sobreMim">Sobre mim</h2>
        <p style={styles.descriptionSobre}>
          Desenvolvo testes automatizados utilizando Java, Javascript e SQL, com as ferramentas de automação para front-end, back-end e banco de dados.  
Trabalho com garantia de qualidade há 5 anos e participo de projetos durante todo o ciclo de desenvolvimento do software, assegurando a execução de testes de código junto aos desenvolvedores e promovendo um melhor refinamento e escrita das histórias de usuário no projeto.
        </p>
        <p style={styles.descriptionSobre}>
        Elaboro critérios de aceitação junto aos Analistas de Negócios e PO, além de monitorar, evidenciar e documentar qualquer alteração no projeto.  
Na documentação e formalização de testes utilizo BDD, casos de teste, cenários de teste e scripts de teste com seus passo a passo.  
Crio estratégias de qualidade para as mudanças no código, identificando riscos potenciais e as áreas possivelmente afetadas.  
Tenho conhecimento em desenvolvimento de software com metodologias ágeis e em cascata.
        </p>
      </div>
    </div>
  );
};

const styles = {
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    maxWidth: '800px',
    margin: '20px auto',
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    paddingRight: '20px',
  },
  greeting: {
    fontSize: '36px',
    color: '#292929',
    fontFamily: 'TTSupermolot-Bold',
    lineHeight: '44.46px',
  },
  name: {
    fontSize: '80px',
    fontWeight: 'bold',
    color: '#292929',
    fontFamily: 'Roboto Flex',
    lineHeight: '93.75px',
  },
  description: {
    fontSize: '36px',
    color: '#292929',
    fontFamily: 'TTSupermolot-Regular',
    lineHeight: '44.28px',
  },
  descriptionSobre: {
    fontSize: '20px',
    color: '#292929',
    fontFamily:['TTSupermolot-Bold', 'Arial', 'sans-serif'],
    lineHeight: '44.28px',
    textIndent: '50px',
  },
  image: {
    width: '292px',
    height: '292px',
    borderRadius: '8px',
    objectFit: 'cover',
  }, 
  
};

const ProjectCard = ({ imageId, title, tags, description, url }) => {
  return (
    <div className="project-card">
      <img 
        src={imageId} 
        alt={title} 
        className="project-image"
      />
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-tags">{tags}</p>
        <p className="project-description">{description}</p>
        <a href={url}>
          <button  className="project-button">Acessar</button>
        </a>
      </div>
    </div>
  );
};

const skillsTest = [
  { name: 'Selenium', level: 4 },
  { name: 'Cypress', level: 4 },
  { name: 'Postman', level: 4 },
  { name: 'Robot', level: 1 },
  { name: 'Rest Assured', level: 3 }
];

const skillsLangague = [
  { name: 'Java', level: 5 },
  { name: 'Javascript', level: 4 },
  { name: 'Git', level: 4 },
  { name: 'React', level: 2 },
  { name: 'Node', level: 3 }
];

const SkillRating = ({ level, maxLevel = 5 }) => {
  const filledCircle = (
    <svg width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="#40E0D0" />
    </svg>
  );

  const outlinedCircle = (
    <svg width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="none" stroke="#40E0D0" strokeWidth="2" />
    </svg>
  );
  
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  };

  const circleStyle = {
    width: '24px',
    height: '24px',
  };
  

  return (
    <div style={containerStyle}>
      {[...Array(maxLevel)].map((_, index) => (
        <div key={index}>
          {index < level ? filledCircle : outlinedCircle}
        </div>
      ))}
    </div>
  );
};



const SkillTestList = () => {
  const containerStyle = {
    fontFamily: 'Roboto Flex, sans-serif',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '18.75px',
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '6px',
    paddingLeft: '10px'
  };

  const skillStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
	  marginBottom: '8px',
	  width: '100%',
    paddingLeft: '10px'
  };
  

  return (
    <div style={containerStyle}>
      {skillsTest.map((skill, index) => (
        <div key={index} style={skillStyle}>
          <span style={{ flex: 1 }}>{skill.name}</span>
          <SkillRating level={skill.level} />
        </div>
      ))}
    </div>
  );
};

const SkillLanguageList = () => {
  const containerStyle = {
    fontFamily: 'Roboto Flex, sans-serif',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '18.75px',
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '6px',
    paddingLeft: '10px'
  };

  const skillStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
	  marginBottom: '8px',
	  width: '100%',
    paddingLeft: '10px'
  };
  

  return (
    <div style={containerStyle}>
      {skillsLangague.map((skill, index) => (
        <div key={index} style={skillStyle}>
          <span style={{ flex: 1 }}>{skill.name}</span>
          <SkillRating level={skill.level} />
        </div>
      ))}
    </div>
  );
};

const SkillComponent = () => {
  const titleStyle = {
    fontFamily: 'Roboto Flex, sans-serif',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '28px',
    color: '#000000',
    marginBottom: '16px'
  };

  return (
    <div id='habilidades' className="projects-section" style={styles.cardContainer}>
      <h1 style={titleStyle}>Habilidades</h1>
      <SkillTestList />
      <SkillLanguageList />
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileCard />
      
      <SobreMimCard />

      <SkillComponent />
      <div className="projects-section" style={styles.cardContainer}>
        <h2 id="meusProjetos" >Meus Projetos</h2>
        <div className="projects-list">
          <ProjectCard 
            imageId={cypress} 
            title="Cypress Bugbank" 
            tags="Javascript, NODE" 
            description="Automação de testes end-to-end (E2E) usando o Cypress com NODE e Javascript.
            O objetivo deste projeto é criar testes automatizados que simulem o comportamento do usuário em um navegador web, verificando se é possível realizar uma transação."
            url= "https://github.com/Franias/cypress-bugbank"

          />
          <ProjectCard 
            imageId={selenium} 
            title="Selenium Bugbank" 
            tags="Java, Maven" 
            description="Automação de testes end-to-end (E2E) usando o Selenium com Maven e Java 19.
            O objetivo deste projeto é criar testes automatizados que simulem o comportamento do usuário em um navegador web, verificando se é possível realizar uma transação."
            url="https://github.com/Franias/selenium-bugbank"

          />
          {/* <ProjectCard 
            imageId="1021:408" 
            title="Mobile" 
            tags="Android studio, Kotlin" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem."
          /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
