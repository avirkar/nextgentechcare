const services = [
  {
    title: "Device setup & tune‑up",
    description:
      "Personalized setup for phones, tablets, computers, and smart TVs – with simple written instructions left behind.",
    items: ["New device setup", "Email & messaging", "App installation", "Backup & updates"]
  },
  {
    title: "Staying connected",
    description:
      "Step-by-step guidance on using video calls, photos, and social tools to stay close to family and friends.",
    items: ["Video calling practice", "Sharing & viewing photos", "Texting & messaging", "Online events"]
  },
  {
    title: "Safety & peace of mind",
    description:
      "Clear explanations of online safety, scams, and privacy settings – practiced together until they feel comfortable.",
    items: ["Recognizing scams", "Password best practices", "Privacy checkups", "Safe online shopping"]
  }
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">What we offer</p>
          <h2 id="services-heading">Technology services designed for seniors.</h2>
          <p>
            Flexible one-on-one sessions that meet seniors where they are – whether that&apos;s learning
            the basics or exploring something new.
          </p>
        </header>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="card service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

