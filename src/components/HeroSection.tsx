export const HeroSection = () => {
  return (
    <section className="section hero" aria-labelledby="hero-heading">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow">Patient, in-person tech help</p>
          <h1 id="hero-heading">
            Helping seniors feel confident with today&apos;s technology.
          </h1>
          <p className="lead">
            NextGenTechCare LLC gently guides older adults through phones,
            tablets, computers, smart TVs, and online services – at their pace,
            in language they understand.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Schedule a visit
            </a>
            <a href="#services" className="btn btn-ghost">
              View services
            </a>
          </div>
          <ul className="hero-highlights" aria-label="Key benefits">
            <li>No tech jargon</li>
            <li>One-on-one, patient support</li>
            <li>Safety & privacy focused</li>
          </ul>
        </div>
        <div className="hero-card" aria-label="Example senior support scenario">
          <div className="hero-illustration">
            <div className="avatar avatar-senior" />
            <div className="avatar avatar-guide" />
            <div className="speech-bubble speech-senior">
              Can you help me join my video call?
            </div>
            <div className="speech-bubble speech-guide">Of course. Let&apos;s do it together.</div>
          </div>
          <div className="hero-card-body">
            <h2>Support that feels like family.</h2>
            <p>
              We take time to listen, understand goals, and build confidence –
              so technology feels helpful, not overwhelming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

