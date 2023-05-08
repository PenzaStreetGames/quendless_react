export function Panel(props: any) {
    return (
        <div className="d-flex flex-column justify-content-start
            text-start border rounded bg-white bg-opacity-75 p-3 m-2">
            {props.children}
        </div>
    );
}