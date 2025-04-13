import './App.css';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <h1>Edvin Mosses Essoudassou</h1>
        <p>MSc Renewable Energy Engineering | Electrical & Renewable Energy Engineer</p>
        <div className="buttons">
          <a href="mailto:lfugai231@gmail.com">📧 Email</a>
          <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">📄 Resume</a>
        </div>
      </header>

      <section>
        <h2>About Me</h2>
        <p>
          I'm a dynamic Electrical and Renewable Energy Engineer with hands-on experience in energy-efficient design,
          project management, and system optimization. With a strong foundation in tools like AutoCAD, MATLAB, and PVSyst,
          I specialize in delivering cost-effective and sustainable solutions across solar, wind, and hybrid energy systems.
        </p>
      </section>

      <section>
        <h2>Skills & Tools</h2>
        <ul>
          <li>AutoCAD Electrical</li>
          <li>Revit MEP</li>
          <li>MATLAB</li>
          <li>PVSyst</li>
          <li>SAM (System Advisory Model)</li>
          <li>GAMS</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Hydrogen Production from Seawater:</strong> Literature review on hydrogen production techniques.
          </li>
          <li>
            <strong>Hybrid AC/DC Microgrid:</strong> Bidirectional power control for energy optimization.
          </li>
          <li>
            <strong>Solar Design Portfolio:</strong> Layouts and simulations using PVSyst & SMA tools.
          </li>
        </ul>
      </section>

      <section>
        <h2>Certifications</h2>
        <ul>
          <li>LEED Green Associate</li>
          <li>BESS – Battery Energy Storage Systems</li>
          <li>AutoCAD, Revit-MEP, MATLAB</li>
          <li>Dubai Civil Defence</li>
        </ul>
      </section>

      <section>
        <h2>💼 Professional Experience</h2>
        <p><strong>Electrical Engineer – Dubai, UAE</strong><br />
          Led cost-optimized site designs for power & lighting systems using AutoCAD and Revit MEP. Collaborated across departments
          to deliver compliant, efficient energy solutions with over 15% in cost savings. Developed technical reports and ensured
          project execution aligned with DEWA, SEWA, and FEWA standards.
        </p>
        <p><strong>Graduate Intern – Electrical</strong><br />
          Performed troubleshooting, system inspection, and documentation. Maintained compliance and supported electrical design improvements.
        </p>
      </section>

      <footer>
        <p>© 2024 Edvin Mosses Essoudassou | Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
