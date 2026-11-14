import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
export const metadata: Metadata = { title: "About | TechStudio", description: "Learn about TechStudio and how we turn ideas into useful digital products." };
export default function AboutPage() {
  return <main id="top" className="site-page"><SiteHeader />
    <section className="inner-hero about-hero"><div className="hero-grain"/><div className="page-eyebrow"><i/> A LITTLE ABOUT US</div><h1>Good ideas deserve<br/><em>great execution.</em></h1><p>TechStudio is an independent software studio focused on building practical digital products, thoughtful interfaces and useful tools for ambitious people and businesses.</p><div className="hero-meta"><span>STRATEGY · DESIGN · DEVELOPMENT</span><span>BUILT WITH INTENTION.</span></div></section>
    <section className="about-story"><div><span className="page-eyebrow dark-eyebrow">OUR APPROACH</span><h2>Less noise.<br/><em>More useful.</em></h2></div><div className="about-story-copy"><p>We believe software should make everyday work simpler. From business dashboards to creator tools and management systems, our focus is on clear experiences that solve real problems.</p><p>Our portfolio brings projects together in one place so you can explore what exists, understand the direction of each build and request a conversation before moving forward.</p><Link className="request-button" href="/projects">EXPLORE OUR PROJECTS ↗</Link></div></section>
    <section className="principles"><div className="principle"><span>01</span><h3>Clarity first.</h3><p>Simple interfaces, understandable workflows and honest project information.</p></div><div className="principle"><span>02</span><h3>Built with purpose.</h3><p>Every product starts with a problem worth solving and a user worth helping.</p></div><div className="principle"><span>03</span><h3>Progress in the open.</h3><p>Our public project index updates from GitHub as new repositories are added.</p></div></section>
    <SiteFooter /></main>;
}
