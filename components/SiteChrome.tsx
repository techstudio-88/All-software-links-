const phone = "918859985492";
const email = "techstudio7808@gmail.com";
export function SiteHeader() {
  const intro = encodeURIComponent("Hi TechStudio, I would like to discuss a project.");
  return <header className="site-header">
    <a className="site-brand" href="/" aria-label="TechStudio home"><span className="brand-symbol">T<span>.</span></span><span>TECHSTUDIO<small>DIGITAL PRODUCTS & SYSTEMS</small></span></a>
    <nav className="site-nav" aria-label="Main navigation"><a href="/">Home</a><a href="/projects">Projects</a><a href="/about">About</a><a href="/contact">Contact</a></nav>
    <a className="header-action" href={"https://wa.me/" + phone + "?text=" + intro}>LET'S TALK <span>↗</span></a>
  </header>;
}
export function SiteFooter() {
  const intro = encodeURIComponent("Hi TechStudio, I would like to discuss a project.");
  return <footer className="site-footer">
    <div className="footer-topline"><span>TECHSTUDIO®</span><span>IDEAS INTO DIGITAL EXPERIENCES.</span></div>
    <div className="footer-main"><div><div className="footer-kicker">HAVE SOMETHING IN MIND?</div><h2>Let's make<br/><em>it happen.</em></h2></div>
      <div className="footer-contact"><a href={"https://wa.me/" + phone + "?text=" + intro}>WhatsApp · 8859985492 ↗</a><a href={"mailto:" + email}>{email} ↗</a><div className="footer-links"><a href="/projects">Projects</a><a href="/about">About</a><a href="/contact">Contact</a></div></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} TECHSTUDIO. ALL RIGHTS RESERVED.</span><span>DESIGNED TO MOVE YOU FORWARD.</span><a href="#top">BACK TO TOP ↑</a></div>
  </footer>;
}
