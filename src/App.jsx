import { Routes, Route, Link } from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

const Home = () => (
  <main className="relative bg-gray-100 min-h-screen flex justify-center items-start">
    {}
    <div className="fixed top-0 left-0 h-full w-14 bg-white shadow-md z-10" />

    {}
    <div className="fixed top-0 right-0 h-full w-14 bg-white shadow-md z-10" />

    {}
    <div className="relative z-20 w-full max-w-4xl px-6 py-12">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif font-semibold text-gray-900 mb-1">
          Barbara Dorneles Martins
        </h1>
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Computer Science Student @ PUC Minas
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl font-light text-justify mx-auto">
          I'm a Computer Science student passionate about{" "}
          <span className="font-medium text-gray-900">backend development</span>
          ,<span className="font-medium text-gray-900"> automation</span>, and{" "}
          <span className="font-medium text-gray-900">cloud technologies</span>.
          I'm currently working toward certifications in backend and
          cybersecurity, while actively applying knowledge in real-world
          projects — from AI integrations to Python-based automation. I value
          clean code, solid architecture, and continuous learning.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Projects</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <strong>PEX - Academic System</strong>: Backend with Java +
            PostgreSQL
          </li>
          <li>
            <strong>Chatbots & AI</strong>: Discord bots using JS, Dialogflow,
            Claude API
          </li>
          <li>
            <Link to="/projects" className="text-blue-600 hover:underline">
              See all →
            </Link>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Skills</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>JavaScript / Java / Python</li>
          <li>SQL / PostgreSQL / Git / C#</li>
          <li>
            <Link to="/skills" className="text-blue-600 hover:underline">
              See all →
            </Link>
          </li>
        </ul>
      </section>

      <section>
        <div className="border-t border-gray-300 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Contact</h2>
        <p className="text-gray-700 mb-2">
          Email:{" "}
          <a
            href="mailto:barbara.laisdorneles@gmail.com"
            className="text-blue-600 hover:underline"
          >
            barbara.laisdorneles@gmail.com
          </a>
        </p>
        <p className="text-gray-700">
          GitHub:{" "}
          <a
            href="https://github.com/BabiDoo"
            className="text-blue-600 hover:underline"
          >
            https://github.com/BabiDoo
          </a>
        </p>
      </section>
    </div>
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
