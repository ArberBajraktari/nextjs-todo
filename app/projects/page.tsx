import CustomLink from "@/components/custom-link"
import SessionData from "@/components/session-data"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { auth } from "auth"

export default async function Page() {
  const session = await auth()
  return (
    <div className="space-y-2">
      <Breadcrumbs 
                    breadcrumbs={[
                        {label: 'Projects', href: `/projects`, active: true},
                    ]} />
      <SessionData session={session} />
    </div>
  )
}
