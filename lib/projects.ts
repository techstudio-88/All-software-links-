export type GitHubProject = {
  id: number; name: string; slug: string; description: string;
  language: string | null; topics: string[]; size: number; stars: number;
  updatedAt: string; htmlUrl: string;
};
type GitHubRepo = {
  id: number; name: string; description: string | null; language: string | null;
  topics?: string[]; size: number; stargazers_count: number; updated_at: string;
  html_url: string; archived: boolean; fork: boolean; private: boolean;
};
export async function getGitHubProjects(): Promise<GitHubProject[]> {
  try {
    const response = await fetch("https://api.github.com/users/techstudio-88/repos?type=public&sort=updated&per_page=100", {
      headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 300 }
    });
    if (!response.ok) return [];
    const repos = (await response.json()) as GitHubRepo[];
    return repos.filter((repo) => !repo.private && !repo.archived && !repo.fork && repo.name !== "All-software-links-")
      .map((repo) => ({
        id: repo.id,
        name: repo.name.replace(/[-_]+/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase()),
        slug: repo.name,
        description: repo.description || "A new project from the TechStudio portfolio. Details will be added as the project evolves.",
        language: repo.language, topics: repo.topics || [], size: repo.size,
        stars: repo.stargazers_count, updatedAt: repo.updated_at, htmlUrl: repo.html_url
      }));
  } catch { return []; }
}
