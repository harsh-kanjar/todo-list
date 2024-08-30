import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer text-center text-white bg-dark">
      <div className="container p-4 pb-0">
        <section>
          <p className="lead">
            Share your experience and suggestions with us <a href="/">@Feedback</a>
          </p>
        </section>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
        © {currentYear} Copyright:
        <a className="text-white" href="/">
          notesApp
        </a>
      </div>
    </footer>
  );
}

export default Footer;
