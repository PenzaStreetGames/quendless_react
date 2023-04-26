import {Panel} from "../primitives/Panel";
import {ProfileCard} from "../cards/ProfileCard";
import defaultIcon from "../../res/images/user_icon.png"

export function ProfilePage() {
    return (
        <div className="d-flex flex-column justify-content-start" style={{minHeight: "80vh"}}>
            <Panel>
                <ProfileCard profile={{
                    name: "Pavel Solomatin",
                    login: "hyberlet",
                    email: "crave_ozer_man@mail.ru",
                    imageUrl: defaultIcon
                }}/>
            </Panel>
            <Panel>
                <h2>Recent Activity</h2>
                <p>There's no recent activity</p>
            </Panel>
        </div>

    );
}