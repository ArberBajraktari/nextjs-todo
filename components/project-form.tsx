
export function ProjectForm() {

    return(
        <>
            <form>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Project Name
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Football" />
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Description
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Enter the description here" />
                </div>
                <div className="flex items-center justify-between">
                </div>
            </form>
        </>
    )
}
