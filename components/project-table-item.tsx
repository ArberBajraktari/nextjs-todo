import Link from "next/link";


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
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {props.name}
            </th>
            <td className="px-6 py-4">
                {props.priority}
            </td>
            <td className="px-6 py-4">
                <Link href={`/${props.project_id}/project`} className="bg-red-50 p-2 rounded-sm">
                    {props.project_name}
                </Link>
            </td>
            <td className="px-6 py-4">
                $2999
            </td>
            <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    )
  }
  