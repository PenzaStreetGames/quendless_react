import {Panel} from "../primitives/Panel";
import {ProfileCard} from "../cards/ProfileCard";
import defaultIcon from "../../res/images/user_icon.png"
import {ContentWrapper} from "../primitives/ContentWrapper";

export function ProfilePage() {
    return (
        <ContentWrapper>
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
        </ContentWrapper>
    );
}