'use client'
import { updateTask } from "@/app/lib/actions";
import { ChangeEvent, useEffect, useState } from "react";

interface EditableInputProps {
    task_id: string;
    text: string;
    project_id: string;
}

export function EditableInput({ task_id, text: initialText, project_id }: EditableInputProps) {
    const [text, setText] = useState<string>(initialText);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const changeInputValue = async () => {
        if (text !== initialText) {
            try {
                await updateTask(task_id, text, project_id);
            } catch (error) {
                console.error("Error updating task:", error);
            }
        }
        setIsEditing(false); // Disable editing mode after updating
    };

    useEffect(() => {
        setText(initialText);
    }, [initialText]);

    return (
        <div>
            {isEditing ? (
                <input
                    value={text}
                    onChange={handleInputChange}
                    onBlur={changeInputValue}
                    className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-1.5 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                />
            ) : (
                <div className="flex items-center justify-between">
                    <span className="mr-2">{text}</span>
                    <button className="text-blue-500 hover:text-blue-700 focus:outline-none" onClick={() => setIsEditing(true)}>
                        Edit
                    </button>
                </div>
            )}
        </div>
    );
}
