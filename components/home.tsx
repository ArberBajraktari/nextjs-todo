"use server"
import { fetchProjectTasks, fetchTasks } from "@/app/lib/data";
import { Session } from "next-auth";
import { HomeTableItem } from "./home-table-item";
import { ProjectTableItem } from "./project-table-item";
import Breadcrumbs from "./ui/breadcrumbs";


export async function Home({ session }: { session: Session | null }) {

    return(
        <>
            <HomeTable session={session} />
        </>
    )
}