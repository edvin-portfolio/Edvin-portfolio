import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', lineHeight: '1.6' }}>
      <h1 style={{ textAlign: 'center', color: '#1a202c' }}>Edvin Mosses Essoudassou</h1>
      <p style={{ textAlign: 'center', fontSize: '1.1rem' }}>
        MSc Renewable Energy Engineering | Electrical & Renewable Energy Engineer
      </p>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <a href="mailto:lfugai231@gmail.com" style={linkStyle}>📧 Email</a>
        <a href="https://www.linkedin.com/in/your-link" target="_blank" rel="noopener noreferrer" style={linkStyle}>🔗 LinkedIn</a>
        <a href="https://yourdomain.com/resume.pdf" target="_blank" rel="noopener noreferrer" style={linkStyle}>📄 Resume</a>
      </div>

      <Section title="About Me">
        I'm a dynamic Electrical and Renewable Energy Engineer with hands-on experience in energy-efficient design,
        project management, and system optimization. With a strong foundation in tools like AutoCAD and PVSyst,
        I specialize in delivering cost-effective and sustainable solutions across solar, wind, and hybrid energy systems.
      </Section>

      <Section title="Skills & Tools">
        <List items={[
          'AutoCAD Electrical',
          'Revit MEP',
          'MATLAB',
          'PVSyst',
          'SAM (System Advisory Model)',
          'GAMS',
        ]} />
      </Section>

      <Section title="Projects">
        <List items={[
          <><strong>Hydrogen Production from Seawater</strong>: Literature review on hydrogen production techniques.</>,
          <><strong>Hybrid AC/DC Microgrid</strong>: Bidirectional power control for energy optimization.</>,
          <><strong>Solar Design Portfolio</strong>: Layouts and simulations using PVSyst & SMA tools.</>,
        ]} />
      </Section>

      <Section title="Certifications">
        <List items={[
          'LEED Green Associate',
          'BESS – Battery Energy Storage Systems',
          'AutoCAD, Revit-MEP, MATLAB',
          'Sharjah Civil Defence',
        ]} />
      </Section>

      <Section title="💼 Professional Experience">
        <p><strong>Electrical Engineer</strong> – Dubai, UAE<br />
          Led cost-optimized site designs for power & lighting systems using AutoCAD and Revit MEP. Collaborated across departments to deliver compliant, efficient energy solutions with over 15% in cost savings. Developed technical reports and ensured project execution aligned with DEWA, SEWA, and FEWA standards.
        </p>
        <br />
        <p><strong>Graduate Intern – Electrical</strong><br />
          Performed troubleshooting, system inspection, and documentation. Maintained compliance and supported electrical design improvements.
        </p>
      </Section>
    </div>
  );
}

const Section = ({ title, children }) => (
  <section style={{ marginTop: '2.5rem' }}>
    <h2 style={{ color: '#2d3748' }}>{title}</h2>
    {children}
  </section>
);

const List = ({ items }) => (
  <ul style={{ paddingLeft: '1.25rem' }}>
    {items.map((item, index) => (
      <li key={index} style={{ marginBottom: '0.4rem' }}>{item}</li>
    ))}
  </ul>
);

const linkStyle = {
  display: 'inline-block',
  margin: '0 1rem',
  textDecoration: 'none',
  color: '#4a5568',
  fontWeight: 'bold'
};

export default App;
