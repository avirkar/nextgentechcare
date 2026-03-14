export const ContactSection = () => {
  return (
    <section id="contact" className="section section-accent" aria-labelledby="contact-heading">
      <div className="container contact-layout">
        <div className="contact-text">
          <header className="section-header section-header-left">
            <p className="eyebrow">Ready to begin?</p>
            <h2 id="contact-heading">Let&apos;s talk about support for you or a loved one.</h2>
          </header>
          <p>
            Share a few details and we&apos;ll follow up with a friendly, no-pressure conversation about how we
            can help. You can also reach out directly by phone or email.
          </p>
          <div className="contact-details">
            <div>
              <div className="contact-label">Email</div>
              <a href="mailto:president@nextgentechcare.com">president@nextgentechcare.com</a>
            </div>
            <div>
              <div className="contact-label">Phone</div>
              <a href="tel:+19805954321">(980) 595-4321</a>
            </div>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            form.reset();
            alert("Thank you! We&apos;ll be in touch soon."); // simple, static behavior
          }}
        >
          <div className="form-field">
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required />
          </div>
          <div className="form-field">
            <label htmlFor="relation">Who is this support for?</label>
            <select id="relation" name="relation" defaultValue="">
              <option value="" disabled>
                Please select
              </option>
              <option value="self">Myself</option>
              <option value="parent">Parent</option>
              <option value="grandparent">Grandparent</option>
              <option value="other">Other family member</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="message">What would you like help with?</label>
            <textarea id="message" name="message" rows={4} />
          </div>
          <button type="submit" className="btn btn-primary btn-full">
            Submit inquiry
          </button>
          <p className="form-footnote">
            This form is for general inquiries. Please do not share sensitive medical or financial details.
          </p>
        </form>
      </div>
    </section>
  );
};

