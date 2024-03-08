import Link from "next/link";
import { Checkbox } from "./checkbox";
import { DeleteTaskButton } from "./deleteTaskButton";
import { EditableInput } from "./editable-input";


interface ProjectTableItemProps {
    props: ProjectTableItem;
}

interface ProjectTableItem {
    id: string;
    name: string;
    status: boolean;
    priority: number;
    project_id: string;
    user_id: string;
    project_name: string;
}

export function ProjectTableItem({ props }: ProjectTableItemProps) {

    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-1/12">
                <Checkbox id={props.id} status={props.status} />
            </th>
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white w-1/2">
                <EditableInput task_id={props.id} text={props.name} project_id={props.project_id}/>
            </th>
            <td className="px-6 py-4 text-center w-1/12">
                {props.priority}
            </td>
            <td className="px-6 py-4 w-2/12">
                <Link href={`/${props.project_id}/project`} className="bg-red-50 p-2 rounded-sm">
                    {props.project_name}
                </Link>
            </td>
            <td className="px-6 py-4">
                Date
            </td>
            <DeleteTaskButton task_id={props.id} project_id={props.project_id}/>
        </tr>
    )
  }
  