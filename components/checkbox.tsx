'use client'

interface CheckboxProps {
    props: Checkbox;
}

interface Checkbox {
    id?: string;
    status: boolean;
}


export function Checkbox(props: Checkbox) {
        
    function handleChange(){
        console.log("hello")
    }

    return (
        <>
            {props.status ? 

                <input checked id="checked-checkbox" type="checkbox" onChange={() => handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            : 
                <input id="checked-checkbox" type="checkbox" onChange={() => handleChange}  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
            }
        </>  
    )
  }
  