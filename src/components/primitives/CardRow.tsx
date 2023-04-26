export function CardRow(props: any) {
    return (
        <div className="d-flex flex-row justify-content-around">
            {props.children}
        </div>
    );
}