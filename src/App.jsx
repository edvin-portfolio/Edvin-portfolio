
import React from "react";
import { Mail, Linkedin, FileText } from "lucide-react";

export default function Portfolio() {
  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <section style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Edvin Mosses Essoudassou</h1>
        <p style={{ fontSize: "1.2rem" }}>
          MSc Renewable Energy Engineering | Electrical & Renewable Energy Engineer
        </p>
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
          <a href="mailto:lfugai231@gmail.com"><button><Mail size={16} /> Email</button></a>
          <a href="https://www.linkedin.com/in/edvin-mosses-essoudassou/" target="_blank"><button><Linkedin size={16} /> LinkedIn</button></a>
          <a href="/resume.pdf" target="_blank"><button><FileText size={16} /> Resume</button></a>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>About Me</h2>
        <p>
          I'm a dynamic Electrical and Renewable Energy Engineer with hands-on experience in energy-efficient design, project management, and system optimization. With a strong foundation in tools like AutoCAD, MATLAB, and PVSyst, I specialize in delivering cost-effective and sustainable solutions across solar, wind, and hybrid energy systems.
        </p>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Skills & Tools</h2>
        <ul>
          <li>AutoCAD Electrical</li>
          <li>Revit MEP</li>
          <li>MATLAB</li>
          <li>PVSyst</li>
          <li>SAM (System Advisory Model)</li>
          <li>GAMS</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Projects</h2>
        <ul>
          <li><strong>Hydrogen Production from Seawater:</strong> Literature review on hydrogen production techniques.</li>
          <li><strong>Hybrid AC/DC Microgrid:</strong> Bidirectional power control for energy optimization.</li>
          <li><strong>Solar Design Portfolio:</strong> Layouts and simulations using PVSyst & SMA tools.</li>
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Certifications</h2>
        <ul>
          <li>LEED Green Associate</li>
          <li>BESS – Battery Energy Storage Systems</li>
          <li>AutoCAD, Revit-MEP, MATLAB</li>
          <li>Sharjah Civil Defence</li>
        </ul>
      </section>
    </main>
  );
}
