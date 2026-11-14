import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
export const metadata: Metadata = { title: "Contact | TechStudio", description: "Contact TechStudio to request a project, walkthrough or custom software discussion." };
const phone = "918859985492";
const email = "techstudio7808@gmail.com";
export default function ContactPage() {
  const message = "Hi TechStudio, I would like to discuss a project. Please get in touch.";
  return <main id="top" className="site-page"><SiteHeader />
    <section className="inner-hero contact-hero"><div className="hero-grain"/><div className="page-eyebrow"><i/> START A CONVERSATION</div><h1>Tell us what<br/><em>you're imagining.</em></h1><p>Have a project in mind, want to request one of our builds, or need something custom? Reach out directly.</p><div className="hero-meta"><span>WE'D LOVE TO HEAR FROM YOU.</span><span>LET'S BUILD SOMETHING USEFUL.</span></div></section>
    <section className="contact-content"><div className="contact-intro"><span className="page-eyebrow dark-eyebrow">GET IN TOUCH</span><h2>One message<br/>can start <em>it all.</em></h2><p>Choose your preferred way to contact us. WhatsApp opens a ready-to-send message; email opens your mail app.</p></div>
      <div className="contact-methods"><a className="contact-method whatsapp-method" href={"https://wa.me/" + phone + "?text=" + encodeURIComponent(message)}><span>01 / WHATSAPP</span><strong>8859985492</strong><small>Message us directly <b>↗</b></small></a>
      <a className="contact-method" href={"mailto:" + email + "?subject=" + encodeURIComponent("Project enquiry")}><span>02 / EMAIL</span><strong>{email}</strong><small>Send a detailed enquiry <b>↗</b></small></a>
      <a className="contact-method" href={"tel:+" + phone}><span>03 / CALL</span><strong>+91 88599 85492</strong><small>Call our contact number <b>↗</b></small></a></div>
    </section><SiteFooter /></main>;
}
