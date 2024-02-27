import { fetchProjectInfo } from "@/app/lib/data"
import CustomLink from "@/components/custom-link"
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
                    
                    <Breadcrumbs 
                    breadcrumbs={[
                        {label: 'Projects', href: `/projects`},
                        {label: `${data.name}`, href: `/${data.id}/project`, active: true,},
                    ]} />
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
