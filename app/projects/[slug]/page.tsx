import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getGitHubProjects } from "@/lib/projects";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
const whatsapp = "918859985492";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = (await getGitHubProjects()).find((item) => item.slug === slug);
  return { title: project ? project.name + " | TechStudio" : "Project | TechStudio", description: project?.description };
}
export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = (await getGitHubProjects()).find((item) => item.slug === slug);
  if (!project) notFound();
  const request = "https://wa.me/" + whatsapp + "?text=" + encodeURIComponent("Hi TechStudio, I would like to request details about " + project.name + ".");
  const tags = [project.language, ...project.topics].filter(Boolean) as string[];
  return <main id="top" className="site-page"><SiteHeader />
    <section className="detail-hero"><div className="detail-hero-glow"/><div className="page-eyebrow"><i/> PROJECT DETAIL / {project.slug.toUpperCase()}</div>
      <div className="detail-title-row"><div><h1>{project.name}<em>.</em></h1><p>{project.description}</p></div><div className="detail-orb">{project.name.slice(0,1).toUpperCase()}</div></div>
      <div className="detail-meta"><span>{project.language || "SOFTWARE PROJECT"}</span><span>{project.stars} GITHUB STARS</span><span>UPDATED {new Date(project.updatedAt).toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"})}</span></div>
    </section>
    <section className="detail-content"><div className="detail-copy"><span className="page-eyebrow dark-eyebrow">THE PROJECT</span><h2>Designed around<br/><em>real work.</em></h2><p>{project.description}</p><p>This project is part of the TechStudio public portfolio. Request a walkthrough to discuss its current functionality, setup requirements, customization and handover options before making a decision.</p><div className="detail-actions"><a className="request-button" href={request}>REQUEST THIS PROJECT <span>↗</span></a><Link className="back-link" href="/projects">← BACK TO ALL PROJECTS</Link></div></div>
      <aside className="detail-panel"><div className="panel-label">PROJECT SNAPSHOT</div><div className="snapshot-row"><span>TECH STACK</span><strong>{project.language || "To be confirmed"}</strong></div><div className="snapshot-row"><span>REPOSITORY SIZE</span><strong>{project.size.toLocaleString("en-IN")} KB</strong></div><div className="snapshot-row"><span>STARS</span><strong>{project.stars}</strong></div><div className="panel-label tags-label">TECHNOLOGIES & TOPICS</div><div className="topic-tags">{tags.length ? tags.map((tag)=><span key={tag}>{tag}</span>) : <span>Details on request</span>}</div><a className="panel-request" href={request}>REQUEST DETAILS ↗</a></aside>
    </section><section className="detail-note"><span>01 / TRANSPARENCY</span><p>Project listings are discovered from public GitHub repository metadata. A listing does not imply that every feature is production-ready. Confirm scope, deliverables and ownership with us before purchase.</p></section>
    <SiteFooter /></main>;
}
