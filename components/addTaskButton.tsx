'use client'

import { ChangeEvent, useState } from "react"
import { ProjectForm } from "./project-form"
import { insertProject, insertTask } from "@/app/lib/actions"

export function AddTaskButton(props: {user_id: string | undefined, project_id: string | undefined}) {

    const [showModal, setShowModal] = useState(false)
    const [name, setName] = useState("");
	const [priority, setPriority] = useState('');

	const handlePriorityChange = (event: ChangeEvent<HTMLInputElement>) => {
		setPriority(event.target.value);
	};

    const addTask = async() => {
        // console.log(props.user_id)
        // await insertProject(name, description, props.user_id,)
        await insertTask(name, priority, props.project_id, props.user_id)
		setName('')
		setPriority('')
        setShowModal(false)
        
    }

    return (
        <>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
          Add Task
        </button>
        {showModal ? (
          <>
            <div
              className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Create a new Task
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <form>
                    <div className="relative p-6 flex-auto">
                        <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" >
                            Task name
                        </label>
                        <input value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="task_name" type="text" placeholder="task-name" />
                        </div>
                        <div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">Priority</label>
						{[1, 2, 3, 4, 5].map((value) => (
							<label key={value} className="inline-flex items-center mr-4">
								<input
								type="radio"
								className="form-radio h-4 w-4 rounded-md"
								name="priority"
								value={value}
								checked={priority === value.toString()}
								onChange={handlePriorityChange}
								/>
								<span className="ml-2">{value}</span>
							</label>
						))}
                      </div>
                        <div className="flex items-center justify-between">
                    </div>
                  </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                        <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                        >
                        Close
                        </button>
                        <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => addTask()}
                        >
                        Save Changes
                        </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    )
  }
  