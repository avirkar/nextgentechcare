export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-main">
          <div className="logo footer-logo">
            <span className="logo-mark">NG</span>
            <div className="logo-text">
              <span className="logo-title">NextGenTechCare LLC</span>
              <span className="logo-subtitle">Technology services for seniors</span>
            </div>
          </div>
          <p className="footer-copy">
            Patient, one-on-one technology support helping seniors stay connected, safe, and confident.
          </p>
        </div>
        <div className="footer-meta">
          <p>© {year} NextGenTechCare LLC. All rights reserved.</p>
          <p className="footer-small">
            This website is for informational purposes only and does not provide legal, financial, or medical
            advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

