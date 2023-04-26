export function Panel(props: any) {
    return (
        <div className="d-flex flex-column justify-content-start align-items-start
            text-center border rounded bg-white bg-opacity-75 p-2 m-2">
            {props.children}
        </div>
    );
}