import type { Metadata } from "next";
import Link from "next/link";
import { getGitHubProjects } from "@/lib/projects";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
export const metadata: Metadata = { title: "Projects | TechStudio", description: "Explore software projects and digital products created by TechStudio." };
const accents = ["#c8ff64", "#8b9dff", "#ff9e75", "#69dfc4", "#d69bff"];
export default async function ProjectsPage() {
  const projects = await getGitHubProjects();
  return <main id="top" className="site-page"><SiteHeader />
    <section className="inner-hero projects-hero"><div className="hero-grain"/><div className="page-eyebrow"><i/> THE WORK / LIVE FROM GITHUB</div>
      <h1>Built to make<br/><em>things better.</em></h1><p>Every public project in the TechStudio GitHub portfolio appears here automatically. New public repositories are picked up on the next refresh.</p>
      <div className="hero-meta"><span>{String(projects.length).padStart(2,"0")} PUBLIC PROJECTS</span><span>UPDATED AUTOMATICALLY · EVERY 5 MINUTES</span></div>
    </section>
    <section className="projects-list-section"><div className="list-heading"><div><span className="page-eyebrow dark-eyebrow">THE COLLECTION</span><h2>Selected <em>work.</em></h2></div><span className="list-note">A live index of public repositories<br/>from github.com/techstudio-88</span></div>
      {projects.length ? <div className="live-project-grid">{projects.map((project,index) => <Link className="live-project-card" href={"/projects/" + encodeURIComponent(project.slug)} key={project.id} style={{"--project-accent":accents[index%accents.length]} as React.CSSProperties}>
        <div className="live-card-top"><span>PROJECT / {String(index+1).padStart(2,"0")}</span><span>↗</span></div>
        <div className="live-card-art"><div className="art-orbit"/><div className="art-core">{project.name.slice(0,1).toUpperCase()}</div><div className="art-stamp">{project.language || "SOFTWARE"}<br/>TECHSTUDIO</div></div>
        <div className="live-card-bottom"><div><span>{project.language || "DIGITAL PRODUCT"} · {Math.max(1,Math.round(project.size/1024*10)/10)} MB</span><h3>{project.name}</h3><p>{project.description}</p></div><b>↗</b></div>
      </Link>)}</div> : <div className="empty-projects"><h3>Projects are loading.</h3><p>GitHub may be temporarily unavailable. Please refresh in a moment.</p></div>}
    </section><SiteFooter /></main>;
}
