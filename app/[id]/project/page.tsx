import { fetchProjectInfo } from "@/app/lib/data"
import { AddProjectButton } from "@/components/addProjectButton"
import { AddTaskButton } from "@/components/addTaskButton"
import CustomLink from "@/components/custom-link"
import { ProjectTable } from "@/components/project-table"
import SessionData from "@/components/session-data"
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { auth } from "auth"

export default async function Page({params}:{params: {id: string}}){
    const session = await auth()
    const data = await fetchProjectInfo(params.id)
    if (session?.user) {
        if(data){
            return(
                <> 
		            <div className="flex flex-row justify-between m-2">
                        <Breadcrumbs  key={data.id}
                        breadcrumbs={[
                            {label: 'Projects', href: `/projects`},
                            {label: `${data.name}`, href: `/${data.id}/project`, active: true,},
                        ]} />
                        <AddTaskButton user_id={session?.user?.id} project_id={params.id}/>
                    </div>
                    <ProjectTable project_id={params.id} user_id={session.user.id}/>
                </>
            )
        }
        return(
            <>
                The Project could not be loaded!
            </>
        )
    }
    return(
        <>
            Not authorised
        </>
    )
}
