export const HorizontalBar = (props: any) => {
    return (
        <div className="d-flex flex-row justify-content-around text-start border bg-light rounded text-black p-1 bg-opacity-50">
            {props.children}
        </div>
    )
}