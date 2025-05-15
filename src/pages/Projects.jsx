const Projects = () => {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Projects</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <a
            href="https://github.com/BabiDoo/TI2-GRUPO25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            PEX - Java + PostgreSQL
          </a>
        </li>
        <li>Chatbot's</li>
        <li>
          <a
            href="https://github.com/BabiDoo/teste-claude"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            AI
          </a>
        </li>
        <li>
          <a
            href="https://github.com/BabiDoo/Minicurso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Free Online Course
          </a>
        </li>
        <li>
          <a
            href="https://github.com/seu-usuario/webapp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            WebApp - Node.js + MongoDB
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Projects;
