export const AboutSection = () => {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="container about-layout">
        <div className="about-text">
          <header className="section-header section-header-left">
            <p className="eyebrow">About NextGenTechCare LLC</p>
            <h2 id="about-heading">Technology with patience and empathy.</h2>
          </header>
          <p>
            NextGenTechCare LLC was created to bridge the gap between fast-changing technology and the
            seniors who deserve to benefit from it. We believe that no one is &quot;too old&quot; to learn – they
            just need the right guide.
          </p>
          <p>
            Every session is tailored to the individual. We listen first, avoid jargon, and focus on what
            matters most: staying connected with family, feeling safe online, and enjoying the convenience
            that modern technology can bring.
          </p>
          <p className="about-note">
            We are not a repair shop or a call center. We are patient humans who show up, sit side by
            side, and make technology feel approachable.
          </p>
        </div>
        <div className="about-card" aria-hidden="true">
          <div className="about-badge">Trusted, patient, local</div>
          <ul className="about-list">
            <li>Clear, step-by-step explanations</li>
            <li>Respectful of pace & preferences</li>
            <li>Written notes left after each visit</li>
            <li>Flexible options for families & caregivers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

