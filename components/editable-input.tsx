'use client'
import { updateTask } from "@/app/lib/actions";
import { revalidatePath } from "next/cache";
import { ChangeEvent, useState } from "react";

interface EditableInputProps {
    task_id: string;
    text: string;
    project_id: string;
}

export function EditableInput(props: EditableInputProps) {
    const [text, setText] = useState(props.text)
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const changeInputValue = async () => {
        await updateTask(props.task_id, text, props.project_id)
        // await fetch(`/api/task/update?id=${props.task_id}&text=${text}&project_id=${props.project_id}`, 
        //     {method: 'POST', 
        //         headers: {
        //             'Content-Type': 'application/json',
        //         }
        //     }
        // )
    };
    
    return (
        <input value={text} onChange={(e) => handleInputChange(e)} onBlur={() => changeInputValue()}
            className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
        >
            </input>
    );
}
