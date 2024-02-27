import { fetchProjects } from "@/app/lib/data"
import type { Session } from "next-auth"
import Project from "./ui/project"
import Link from "next/link"

export default async function SessionData({ session }: { session: Session | null }) {
  if (session?.user) {
    const data = await fetchProjects(session.user.id)

    return (
      <div className="w-full space-y-2 overflow-auto">
        <div className="flex flex-wrap gap-8 mt-4 justify-center">
          {data.length > 0 && data.map((project) => {
            return (
              <>
                <Link href={`/${project.id}/project`} key={`link-${project.id}`}>
                  <Project title={project.name} id={project.id} key={`proj-${project.id}`}/>
                </Link> 
              </> 
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <p>
      No session data, please <em>Sign In</em> first.
    </p>
  )
}
