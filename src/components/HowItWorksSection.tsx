const steps = [
  {
    step: "1",
    title: "Tell us what you need",
    description:
      "Share a few details about the senior, their devices, and what they would like to feel more confident doing."
  },
  {
    step: "2",
    title: "We schedule a relaxed session",
    description:
      "We agree on a time and place that works best – at home or a convenient public space like a library or café."
  },
  {
    step: "3",
    title: "Patient, one-on-one guidance",
    description:
      "We move at their pace, repeat as needed, and leave behind clear notes so they can practice after we leave."
  }
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section section-muted" aria-labelledby="how-heading">
      <div className="container">
        <header className="section-header">
          <p className="eyebrow">Simple & stress-free</p>
          <h2 id="how-heading">How it works.</h2>
        </header>
        <div className="steps-grid">
          {steps.map((step) => (
            <article key={step.step} className="card step-card">
              <div className="step-number">{step.step}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

