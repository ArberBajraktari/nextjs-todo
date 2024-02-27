interface ProjectProps {
    title?: string;
    id: string;
}

export default function Project(props: ProjectProps) {

    return(
        <div className="w-64 h-64 bg-red-50 m-2">
            {props.title}
        </div>
    )
}