import { NextResponse } from "next/server";
import { getGitHubProjects } from "@/lib/projects";
export const revalidate = 300;
export async function GET() {
  const projects = await getGitHubProjects();
  return NextResponse.json({ projects, updatedAt: new Date().toISOString() }, {
    headers: { "Cache-Control": "s-maxage=300, stale-while-revalidate=600" }
  });
}
