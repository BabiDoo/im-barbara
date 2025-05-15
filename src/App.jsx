import { Routes, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const Home = () => (
  <main className="font-sans text-gray-800 bg-white p-6">
    <header className="mb-8 text-center">
      <h1 className="text-3xl font-bold">Barbara Dorneles Martins</h1>
      <p className="text-sm">Computer Science Student @ PUC Minas</p>
    </header>

    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b pb-1 mb-2">About Me</h2>
      <p>
        I am a motivated Computer Science student passionate about backend development, automation,
        and cloud technologies. I am currently pursuing certifications in backend and cybersecurity,
        while also applying what I learn in real-world projects, including AI integrations and Python automation.
      </p>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b pb-1 mb-2">Projects</h2>
      <ul className="list-disc list-inside">
        <li><strong>PEX - Academic System</strong>: Backend with Java + PostgreSQL</li>
        <li><strong>Chatbots & AI</strong>: Discord bots using JS, Dialogflow, Claude API</li>
        <li><Link to="/projects" className="text-blue-600">See all →</Link></li>
      </ul>
    </section>

    <section className="mb-6">
      <h2 className="text-xl font-semibold border-b pb-1 mb-2">Skills</h2>
      <ul className="list-disc list-inside">
        <li>JavaScript / Java / Python</li>
        <li>SQL / PostgreSQL / Git / C#</li>
        <li><Link to="/skills" className="text-blue-600">See all →</Link></li>
      </ul>
    </section>

    <section>
      <h2 className="text-xl font-semibold border-b pb-1 mb-2">Contact</h2>
      <p>Email: <a href="mailto:barbara.laisdorneles@gmail.com" className="text-blue-600">barbara.laisdorneles@gmail.com</a></p>
      <p>GitHub: <a href="https://github.com/barbaradorneles" className="text-blue-600">github.com/barbaradorneles</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/barbaradorneles" className="text-blue-600">linkedin.com/in/barbaradorneles</a></p>
    </section>
  </main>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
  </Routes>
);

export default App;