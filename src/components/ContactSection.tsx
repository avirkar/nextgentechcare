const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/info@nextgentechcare.com";

export const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const nameInput = form.querySelector<HTMLInputElement>('input[name="name"]');
    const subjectInput = form.querySelector<HTMLInputElement>('input[name="_subject"]');
    const nextInput = form.querySelector<HTMLInputElement>('input[name="_next"]');
    if (subjectInput && nameInput) {
      const name = nameInput.value.trim() || "Unknown";
      subjectInput.value = `New Enquiry : ${name}`;
    }
    if (nextInput) {
      nextInput.value = `${window.location.origin}${window.location.pathname}#contact?submitted=1`;
    }
    // Form submits to FormSubmit.co; no preventDefault()
  };

  const isSubmitted =
    typeof window !== "undefined" &&
    window.location.hash.startsWith("#contact") &&
    new URLSearchParams(window.location.hash.split("?")[1] || "").get("submitted") === "1";

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
              <a href="mailto:info@nextgentechcare.com">info@nextgentechcare.com</a>
            </div>
            <div>
              <div className="contact-label">Phone</div>
              <a href="tel:+19805954321">(980) 595-4321</a>
            </div>
          </div>
        </div>
        <form
          className="contact-form"
          action={FORMSUBMIT_ENDPOINT}
          method="POST"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_subject" value="" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="" />
          {isSubmitted && (
            <p className="form-success" role="status">
              Thank you! We&apos;ll be in touch soon.
            </p>
          )}
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

