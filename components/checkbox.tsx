'use client'

import { fetchProjects } from "@/app/lib/data";
import { useEffect, useState } from "react";

interface Checkbox {
    id?: string;
    status: boolean;
}


export function Checkbox(props: Checkbox) {
    const [status, setStatus] = useState<boolean>(props.status)

    useEffect(()=>{
        setStatus(props.status)
    })

    const handleButtonClick = async () => {
        const res = await fetch(`/api/checkbox/update?id=${props.id}&status=${props.status}`)
        const json = await res.json()
        if(json.message === 'ok'){
            const oppositeStatus = !status
            setStatus(oppositeStatus)
        }
    };

    return (
        <>
                <input id="checked-checkbox" checked={status} type="checkbox" onChange={() => handleButtonClick()}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            
        </>  
    )
  }
  