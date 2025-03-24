export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
    const projects = await res.json();
  
    return { props: { projects } };
  }
  
  export default function Projects({ projects }) {
    return (
      <div>
        <h1>Mes Projets</h1>
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  