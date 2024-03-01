import { auth } from "@/auth"
import CustomLink from "@/components/custom-link"
import { HomeTable } from "@/components/home-table"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import packageJSON from "../package.json"

export default async function Index() {
  const session = await auth()
  return (
    <div className="space-y-2">
      <HomeTable session={session} />
    </div>
  )
}
