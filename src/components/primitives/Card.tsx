export function Card(props: any) {
    return (
        <div className="d-flex flex-column align-items-center p-3 m-2 bg-light rounded">
            {props.children}
        </div>
    );
}