'use client'
import { deleteTask } from "@/app/lib/actions"

export function DeleteTaskButton(props : {task_id: string, project_id: string}) {
    
    const deleteThisTask = async() =>{
        await deleteTask(props.task_id, props.project_id)
        console.log('delete task', props.task_id)
    }

    return (
        <>
            <td className="px-6 py-4 text-right">
                <button onClick={deleteThisTask} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</button>
            </td>
        </>
    )
  }
  