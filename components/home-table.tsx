"use server"
import { fetchProjectTasks, fetchTasks } from "@/app/lib/data";
import { Session } from "next-auth";
import { HomeTableItem } from "./home-table-item";
import { ProjectTableItem } from "./project-table-item";


export async function HomeTable({ session }: { session: Session | null }) {

    const data = await fetchTasks();

    const updateStatusItem = () =>{

    } 

    return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Task Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Priority
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Project
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Edit</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {data.length > 0 && data.map((task) => {
                    return(
                        <>
                            <HomeTableItem props={task} handleStatus={updateStatusItem}/>
                        </>
                    )
                })}
            </tbody>
        </table>
    </div>

  )
}
