'use client'

import { ChangeEvent, useState } from "react"
import { ProjectForm } from "./project-form"
import { deleteProject, insertProject, insertTask } from "@/app/lib/actions"
import { useRouter } from "next/navigation"

export function DeleteProjectButton(props: {user_id: string | undefined, project_id: string | undefined}) {
    const [showModal, setShowModal] = useState(false)
    const router = useRouter();

    const deleteProjectHanlder = async () => {
      try {
        await deleteProject(props.project_id);
        // Redirect after successful deletion
        router.push('/projects');
      } catch (error) {
        console.error('Error deleting project:', error);
        // Handle error or display an error message to the user
      } finally {
        // Close the modal regardless of success or failure
        setShowModal(false);
      }
    };

    return (
        <>
        <button type="button"
            onClick={() => setShowModal(true)}
            className="mr-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
            >Delete</button>
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
                      Delete project
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
                  <div className="relative p-6 flex-auto">
						<div className="mb-4">
							<h3>
								If you want to delete this project, you will delete all its containing tasks as well. <br/><br/>
								<b>
									Do you wish to proceed?
								</b>
							</h3>						
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
                        onClick={() => deleteProjectHanlder()}
                        >
                        Delete
                        </button>
                    </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
    )
  }
  


