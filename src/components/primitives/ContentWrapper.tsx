export function ContentWrapper(props: any) {
    return (
        <div className="d-flex flex-column justify-content-start" style={{minHeight: "80vh"}}>
            {props.children}
        </div>
    );
}