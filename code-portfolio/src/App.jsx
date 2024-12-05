import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1G3V0mqC8VE7xqg" alt="Logo" width="87" height="60" />
      </div>
      <ul className="navbar-links">
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Currículo</a></li>
        <li><a href="#">Projetos</a></li>
      </ul>
      <div className="navbar-icons">
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1G3V0mqC8VE7xqh" alt="Icon 1" width="24" height="24" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1G3V0mqC8VE7xqi" alt="Icon 2" width="24" height="24" />
        <img src="https://dashboard.codeparrot.ai/api/assets/Z1G3V0mqC8VE7xqj" alt="Icon 3" width="24" height="24" />
      </div>
    </nav>
  );
}

const ProfileCard = () => {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.textContainer}>
        <h2 style={styles.greeting}>Olá, meu nome é</h2>
        <h1 style={styles.name}>Ana Maria</h1>
        <p style={styles.description}>Sou trainee de desenvolvimento de software na DBServer.</p>
      </div>
      <img 
        src="https://dashboard.codeparrot.ai/api/assets/Z1G3WEmqC8VE7xqk" 
        alt="Profile" 
        style={styles.image}
      />
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
  image: {
    width: '292px',
    height: '292px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
};

const ProjectCard = ({ imageId, title, tags, description }) => {
  return (
    <div className="project-card">
      <img 
        src={`https://placeholder.pics/svg?${imageId}`} 
        alt={title} 
        className="project-image"
      />
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-tags">{tags}</p>
        <p className="project-description">{description}</p>
        <button className="project-button">Acessar</button>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileCard />
      <div className="projects-section">
        <h2>Meus Projetos</h2>
        <div className="projects-list">
          <ProjectCard 
            imageId="1021:406" 
            title="Calculadora" 
            tags="HTML, CSS, NODE" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem."
          />
          <ProjectCard 
            imageId="1021:407" 
            title="Blog pessoal" 
            tags="HTML, CSS, NODE" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem."
          />
          <ProjectCard 
            imageId="1021:408" 
            title="Mobile" 
            tags="Android studio, Kotlin" 
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam urna, euismod at porttitor in, dignissim eu mauris. In sem nibh, viverra eu risus sed, accumsan luctus dui. Fusce ex neque, maximus quis dui et, rutrum sollicitudin sem."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
