type profile = {
    login: string,
    name: string,
    imageUrl: string,
    email: string,
}

export function ProfileCard({profile}: {profile: profile}) {
    return (
        <div className="d-flex flex-column p-3 m-2 bg-light rounded">
            <div className="d-flex flex-row justify-content-around">
                <div className="m-2">
                    <img src={profile.imageUrl} alt={"avatar"} style={{display: "block", maxWidth: "100px", maxHeight: "100px", width: "auto", height: "auto"}}/>
                </div>
                <div>
                    <h3>{profile.name}</h3>
                    <h3>{profile.login}</h3>
                    <p>{profile.email}</p>
                </div>
            </div>
        </div>
    );
}