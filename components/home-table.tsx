"use server"
import { fetchProjectTasks, fetchTasks } from "@/app/lib/data";
import { Session } from "next-auth";
import { Suspense } from "react";
import { HomeTableItem } from "./home-table-item";
import { ProjectTableItem } from "./project-table-item";
import Breadcrumbs from "./ui/breadcrumbs";


export async function HomeTable({ session }: { session: Session | null }) {

    
    if(session){
        const data = await fetchTasks(session?.user?.id);
        return (
            <>
                <Breadcrumbs 
                    breadcrumbs={[
                        {label: 'Home', href: `/`, active: true},
                    ]} />
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3 w-1/12">
                                    Status
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/2">
                                    Task Name
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/12">
                                    Priority
                                </th>
                                <th scope="col" className="px-6 py-3 w-2/12">
                                    Project
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/12">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 w-1/12">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((task) => {
                                    return(
                                        <>
                                        <Suspense fallback={<HomeTableItem props={{id: "string", name: "string", status: true, priority: 1, project_id: "string",
                                            user_id: "string", project_name: "string",}} />}>
                                            <HomeTableItem props={task} />
                                        </Suspense>
                                            
                                        </>
                                    )
                                })}
                        </tbody>
                    </table>
                </div>  
            </>
        )
    }

    return (
        <>
            Please log in
        </>
      )
    
}
