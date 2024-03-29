import { fetchProjectTasks } from "@/app/lib/data";
import { ProjectTableItem } from "./project-table-item";

interface ProjectTable {
    project_id: string;
    user_id: string | undefined;
  }

export async function ProjectTable(props: ProjectTable) {

    const data = await fetchProjectTasks(props.project_id, props.user_id)
    return (
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
                {data.length>0 && data.map((task) => {
                    return(
                        <>
                            <ProjectTableItem props={task} key={task.id}/>
                        </>
                    )
                })}
            </tbody>
        </table>
    </div>

  )
}
